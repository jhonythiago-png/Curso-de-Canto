document.addEventListener('DOMContentLoaded', () => {
    // Registrando Service Worker para o PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js').catch(err => console.log('SW falhou: ', err));
        });
    }

    // --- Elementos DOM ---
    const daysGrid = document.getElementById('days-grid');
    const modalOverlay = document.getElementById('day-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalDayBadge = document.getElementById('modal-day-badge');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const btnCompleteDay = document.getElementById('btn-complete-day');
    const progressText = document.getElementById('progress-text');
    const progressFill = document.getElementById('progress-fill');
    
    // Ferramentas
    const btnWakeLock = document.getElementById('btn-wakelock');
    const btnInstall = document.getElementById('btn-install');
    const streakContainer = document.getElementById('streak-container');
    const streakCount = document.getElementById('streak-count');
    
    const timerDisplay = document.getElementById('timer-display');
    const btnTimerAdd = document.getElementById('btn-timer-add');
    const btnTimerStart = document.getElementById('btn-timer-start');
    const btnTimerReset = document.getElementById('btn-timer-reset');
    
    const btnRecord = document.getElementById('btn-record');
    const audioPlaybackContainer = document.getElementById('audio-playback-container');
    const audioPlayback = document.getElementById('audio-playback');
    const btnRecordDelete = document.getElementById('btn-record-delete');

    const metronomeDisplay = document.getElementById('metronome-display');
    const btnMetronomeMinus = document.getElementById('btn-metronome-minus');
    const btnMetronomeStart = document.getElementById('btn-metronome-start');
    const btnMetronomePlus = document.getElementById('btn-metronome-plus');

    // ==========================================
    // AUDIO CONTEXT (GLOBAL UNLOCK PARA iOS)
    // ==========================================
    let audioContext;

    function unlockAudioContext() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContext.state === 'suspended') {
            audioContext.resume();
            
            // Tocar um som inaudível super curto só para forçar o desbloqueio no iOS
            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();
            gain.gain.value = 0;
            oscillator.connect(gain);
            gain.connect(audioContext.destination);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.001);
        }
        document.removeEventListener('click', unlockAudioContext);
        document.removeEventListener('touchstart', unlockAudioContext);
    }

    document.addEventListener('click', unlockAudioContext);
    document.addEventListener('touchstart', unlockAudioContext, {passive: true});

    // --- Estado da Aplicação ---
    let completedDays = JSON.parse(localStorage.getItem('canto30dias_progress')) || [];
    let completionDates = JSON.parse(localStorage.getItem('canto30dias_completionDates')) || {};
    let currentOpenDay = null;

    // --- Inicialização ---
    init();

    function init() {
        initWakeLock();
        checkStreak();
        renderDays();
        updateProgress();
        requestNotificationPermission();
    }

    // ==========================================
    // MODO AO VIVO (WAKE LOCK API)
    // ==========================================
    let wakeLock = null;

    async function requestWakeLock() {
        try {
            wakeLock = await navigator.wakeLock.request('screen');
            wakeLock.addEventListener('release', () => {
                btnWakeLock.classList.remove('active');
                btnWakeLock.innerHTML = '<i class="ph ph-moon"></i> Modo Ao Vivo: Desligado';
            });
            btnWakeLock.classList.add('active');
            btnWakeLock.innerHTML = '<i class="ph ph-sun"></i> Modo Ao Vivo: Ativado';
        } catch (err) {
            console.error('Erro no WakeLock:', err.message);
        }
    }

    async function toggleWakeLock() {
        if (wakeLock !== null) {
            await wakeLock.release();
            wakeLock = null;
        } else {
            await requestWakeLock();
        }
    }

    function initWakeLock() {
        if ('wakeLock' in navigator) {
            btnWakeLock.addEventListener('click', toggleWakeLock);
            document.addEventListener('visibilitychange', async () => {
                if (wakeLock !== null && document.visibilityState === 'visible') {
                    await requestWakeLock();
                }
            });
        } else {
            btnWakeLock.style.display = 'none'; // Esconde se não suportado
        }
    }

    // ==========================================
    // INSTALAÇÃO DO PWA (APP)
    // ==========================================
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        // Previne o Chrome de exibir a mini-infobar automaticamente
        e.preventDefault();
        // Guarda o evento para ser disparado depois
        deferredPrompt = e;
        // Mostra o botão de instalação
        if (btnInstall) {
            btnInstall.style.display = 'inline-flex';
        }
    });

    if (btnInstall) {
        btnInstall.addEventListener('click', async () => {
            if (deferredPrompt) {
                // Mostra o prompt nativo de instalação
                deferredPrompt.prompt();
                // Aguarda a escolha do usuário
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    console.log('Usuário aceitou a instalação do PWA');
                }
                // Limpa o evento salvo
                deferredPrompt = null;
                // Esconde o botão após a escolha
                btnInstall.style.display = 'none';
            }
        });
    }

    window.addEventListener('appinstalled', () => {
        // Esconde o botão caso tenha sido instalado por outro meio
        if (btnInstall) {
            btnInstall.style.display = 'none';
        }
        deferredPrompt = null;
    });

    // ==========================================
    // GAMIFICATION (OFENSIVA / STREAK)
    // ==========================================
    function checkStreak() {
        const lastDate = localStorage.getItem('canto30dias_lastDate');
        let streak = parseInt(localStorage.getItem('canto30dias_streak')) || 0;
        
        const todayStr = new Date().toDateString();
        
        if (lastDate !== todayStr) {
            if (lastDate) {
                const last = new Date(lastDate);
                const today = new Date();
                
                // Resetar horas para comparar apenas os dias calendários
                last.setHours(0, 0, 0, 0);
                today.setHours(0, 0, 0, 0);
                
                const diffTime = today - last;
                const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24)); 
                
                if (diffDays === 1) {
                    // Ontem treinou, mantém a ofensiva
                } else if (diffDays > 1) {
                    // Passou mais de um dia, perdeu a ofensiva
                    streak = 0;
                }
            } else {
                streak = 0;
            }
            localStorage.setItem('canto30dias_streak', streak);
        }

        updateStreakUI(streak);
    }

    function updateStreakUI(streak) {
        if (streak > 0) {
            streakContainer.style.display = 'inline-flex';
            streakCount.textContent = `${streak} ${streak === 1 ? 'Dia Seguido' : 'Dias Seguidos'}!`;
        } else {
            streakContainer.style.display = 'none';
        }
    }

    function registerTrainingDay() {
        const todayStr = new Date().toDateString();
        const lastDate = localStorage.getItem('canto30dias_lastDate');
        let streak = parseInt(localStorage.getItem('canto30dias_streak')) || 0;
        
        if (lastDate !== todayStr) {
            streak++;
            localStorage.setItem('canto30dias_lastDate', todayStr);
            localStorage.setItem('canto30dias_streak', streak);
            updateStreakUI(streak);
            
            // Notificação local de parabéns
            if (Notification.permission === 'granted') {
                new Notification('Parabéns!', {
                    body: `Você completou seu treino de hoje. Ofensiva: ${streak} dias! 🔥`,
                    icon: 'assets/stage_presence.png'
                });
            }
        }
    }

    // Notificações
    function requestNotificationPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            setTimeout(() => {
                Notification.requestPermission();
            }, 3000);
        }
    }

    // ==========================================
    // CRONÔMETRO (TIMER)
    // ==========================================
    let timerSeconds = 0;
    let timerInterval = null;
    let isTimerRunning = false;

    function formatTime(totalSeconds) {
        const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    btnTimerAdd.addEventListener('click', () => {
        timerSeconds += 60;
        timerDisplay.textContent = formatTime(timerSeconds);
    });

    btnTimerStart.addEventListener('click', () => {
        if (timerSeconds === 0) return;
        
        // Garante que o AudioContext seja desbloqueado no iOS durante o clique do usuário
        if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended') audioContext.resume();
        
        if (isTimerRunning) {
            clearInterval(timerInterval);
            isTimerRunning = false;
            btnTimerStart.innerHTML = '<i class="ph ph-play"></i> Play';
        } else {
            isTimerRunning = true;
            btnTimerStart.innerHTML = '<i class="ph ph-pause"></i> Pause';
            timerInterval = setInterval(() => {
                if (timerSeconds > 0) {
                    timerSeconds--;
                    timerDisplay.textContent = formatTime(timerSeconds);
                } else {
                    clearInterval(timerInterval);
                    isTimerRunning = false;
                    btnTimerStart.innerHTML = '<i class="ph ph-play"></i> Play';
                    // Som de fim do timer (C5 alert)
                    startTone(523.25);
                    setTimeout(() => stopTone(523.25), 500);
                }
            }, 1000);
        }
    });

    btnTimerReset.addEventListener('click', () => {
        clearInterval(timerInterval);
        isTimerRunning = false;
        timerSeconds = 0;
        timerDisplay.textContent = '00:00';
        btnTimerStart.innerHTML = '<i class="ph ph-play"></i> Play';
    });

    // ==========================================
    // METRÔNOMO
    // ==========================================
    let currentBpm = 80;
    let isMetronomeRunning = false;
    let metronomeInterval = null;

    function playMetronomeClick() {
        if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended') audioContext.resume();
        
        const osc = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        osc.frequency.value = 800; // Tom alto para o click
        osc.type = 'sine';
        
        gainNode.gain.setValueAtTime(1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
        
        osc.start(audioContext.currentTime);
        osc.stop(audioContext.currentTime + 0.05);
    }

    function toggleMetronome() {
        if (isMetronomeRunning) {
            isMetronomeRunning = false;
            clearInterval(metronomeInterval);
            btnMetronomeStart.innerHTML = '<i class="ph ph-metronome"></i> Play';
            btnMetronomeStart.classList.remove('recording'); // Podemos reusar o CSS 'recording' para ficar vermelho
        } else {
            isMetronomeRunning = true;
            btnMetronomeStart.innerHTML = '<i class="ph ph-stop"></i> Stop';
            btnMetronomeStart.classList.add('recording');
            
            if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
            if (audioContext.state === 'suspended') audioContext.resume();
            
            // Toca a primeira batida imediatamente
            playMetronomeClick();
            
            // Agenda as próximas
            const msPerBeat = (60 / currentBpm) * 1000;
            metronomeInterval = setInterval(playMetronomeClick, msPerBeat);
        }
    }

    btnMetronomeStart.addEventListener('click', toggleMetronome);

    btnMetronomeMinus.addEventListener('click', () => {
        if (currentBpm > 40) currentBpm -= 5;
        metronomeDisplay.textContent = currentBpm + ' BPM';
        if (isMetronomeRunning) {
            toggleMetronome(); // Stop
            toggleMetronome(); // Restart with new BPM
        }
    });

    btnMetronomePlus.addEventListener('click', () => {
        if (currentBpm < 240) currentBpm += 5;
        metronomeDisplay.textContent = currentBpm + ' BPM';
        if (isMetronomeRunning) {
            toggleMetronome(); // Stop
            toggleMetronome(); // Restart with new BPM
        }
    });

    // ==========================================
    // GRAVADOR DE VOZ
    // ==========================================
    let mediaRecorder;
    let audioChunks = [];

    btnRecord.addEventListener('click', async () => {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            // Parar Gravação
            mediaRecorder.stop();
            btnRecord.classList.remove('recording');
            btnRecord.innerHTML = '<i class="ph ph-microphone"></i> <span>Gravar Novo</span>';
        } else {
            // Iniciar Gravação
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream);
                
                mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) audioChunks.push(e.data);
                };
                
                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    audioPlayback.src = audioUrl;
                    audioPlaybackContainer.style.display = 'flex';
                    // Parar as faixas do microfone para liberar permissão visual no navegador
                    stream.getTracks().forEach(track => track.stop());
                };
                
                audioChunks = [];
                mediaRecorder.start();
                btnRecord.classList.add('recording');
                btnRecord.innerHTML = '<i class="ph ph-stop"></i> <span>Parando...</span>';
                audioPlaybackContainer.style.display = 'none';
            } catch (err) {
                alert('Não foi possível acessar o microfone. Verifique as permissões.');
            }
        }
    });

    btnRecordDelete.addEventListener('click', () => {
        audioChunks = [];
        audioPlayback.src = '';
        audioPlaybackContainer.style.display = 'none';
        btnRecord.innerHTML = '<i class="ph ph-microphone"></i> <span>Gravar</span>';
    });


    // ==========================================
    // SINTETIZADOR DE PIANO (WEB AUDIO API)
    // ==========================================
    let activeOscillators = {};

    function startTone(frequency, btn) {
        if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (audioContext.state === 'suspended') audioContext.resume();
        
        if (activeOscillators[frequency]) stopTone(frequency);

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();

        oscillator.type = 'triangle';
        oscillator.frequency.value = frequency;
        filter.type = 'lowpass';
        filter.frequency.value = 1000;

        // Envelope: Attack
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.8, audioContext.currentTime + 0.1);

        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        activeOscillators[frequency] = { osc: oscillator, gain: gainNode };
        
        if (btn) {
            btn.style.transform = 'scale(0.95)';
            btn.style.boxShadow = '0 0 15px var(--primary-glow)';
        }
    }

    function stopTone(frequency, btn) {
        const active = activeOscillators[frequency];
        if (active) {
            // Envelope: Release (Decay suave de 1.5s após soltar)
            const currentTime = audioContext.currentTime;
            active.gain.gain.cancelScheduledValues(currentTime);
            active.gain.gain.setValueAtTime(active.gain.gain.value, currentTime);
            active.gain.gain.exponentialRampToValueAtTime(0.001, currentTime + 1.5);
            active.osc.stop(currentTime + 1.5);
            delete activeOscillators[frequency];
        }
        if (btn) {
            btn.style.transform = '';
            btn.style.boxShadow = '';
        }
    }

    // Usando pointer events para sustentar a nota enquanto estiver pressionado
    modalBody.addEventListener('pointerdown', (e) => {
        const btn = e.target.closest('.play-note-btn');
        if (btn) {
            e.preventDefault(); // Evita seleção de texto no celular
            const freq = parseFloat(btn.dataset.note);
            if (!isNaN(freq)) startTone(freq, btn);
        }
    });

    const handleRelease = (e) => {
        const btn = e.target.closest('.play-note-btn');
        if (btn) {
            const freq = parseFloat(btn.dataset.note);
            if (!isNaN(freq)) stopTone(freq, btn);
        } else {
            // Se o mouse sair do botão de forma muito rápida, paramos todas
            for(let freq in activeOscillators) {
                stopTone(freq);
            }
        }
    };

    modalBody.addEventListener('pointerup', handleRelease);
    modalBody.addEventListener('pointerout', handleRelease);
    modalBody.addEventListener('pointercancel', handleRelease);

    // ==========================================
    // PIANO DE ESTUDO
    // ==========================================
    const studyPiano = document.getElementById('study-piano');
    if (studyPiano) {
        const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        const startMidi = 36; // C2
        const endMidi = 95; // B6

        for (let midi = startMidi; midi <= endMidi; midi++) {
            const freq = 440 * Math.pow(2, (midi - 69) / 12);
            const noteIndex = midi % 12;
            const noteName = noteNames[noteIndex];
            const octave = Math.floor(midi / 12) - 1;
            const label = noteName + octave;
            
            const isBlack = noteName.includes('#');
            
            const keyEl = document.createElement('div');
            keyEl.className = `key ${isBlack ? 'black-key' : 'white-key'}`;
            keyEl.dataset.note = freq;
            
            const labelEl = document.createElement('span');
            labelEl.textContent = label;
            
            if (isBlack) {
                labelEl.style.transform = 'rotate(-90deg) translateX(10px)';
                labelEl.style.display = 'block';
            }
            
            keyEl.appendChild(labelEl);
            studyPiano.appendChild(keyEl);
        }

        // Centralizar o piano na nota C4 (MIDI 60)
        setTimeout(() => {
            const wrapper = studyPiano.closest('.piano-scroll-container');
            const c4Freq = 440 * Math.pow(2, (60 - 69) / 12);
            const c4Key = Array.from(studyPiano.children).find(k => Math.abs(parseFloat(k.dataset.note) - c4Freq) < 0.1);
            if (c4Key && wrapper) {
                // Posiciona o C4 mais para a esquerda da tela (cerca de 30% da largura)
                // em vez de exatamente no centro (50%), permitindo ver mais os agudos
                const offset = wrapper.clientWidth * 0.3;
                const keyCenter = c4Key.offsetLeft + (c4Key.offsetWidth / 2);
                wrapper.scrollLeft = keyCenter - offset;
            }
        }, 100);

        studyPiano.addEventListener('pointerdown', (e) => {
            const key = e.target.closest('.key');
            if (key) {
                e.preventDefault();
                const freq = parseFloat(key.dataset.note);
                if (!isNaN(freq)) {
                    key.classList.add('active');
                    startTone(freq);
                }
            }
        });

        const releaseKey = (e) => {
            const key = e.target.closest('.key');
            if (key) {
                const freq = parseFloat(key.dataset.note);
                if (!isNaN(freq)) {
                    key.classList.remove('active');
                    stopTone(freq);
                }
            } else {
                studyPiano.querySelectorAll('.key.active').forEach(k => {
                    k.classList.remove('active');
                    const freq = parseFloat(k.dataset.note);
                    if (!isNaN(freq)) stopTone(freq);
                });
            }
        };


        studyPiano.addEventListener('pointerup', releaseKey);
        studyPiano.addEventListener('pointerout', releaseKey);
        studyPiano.addEventListener('pointercancel', releaseKey);
    }

    // ==========================================
    // RENDERIZAÇÃO E PROGRESSO PADRÃO
    // ==========================================
    function renderDays() {
        daysGrid.innerHTML = '';
        lessonData.forEach(lesson => {
            const isCompleted = completedDays.includes(lesson.day);
            const card = document.createElement('div');
            card.className = `day-card ${isCompleted ? 'completed' : ''}`;
            card.dataset.day = lesson.day;
            card.innerHTML = `
                <span class="day-number">${String(lesson.day).padStart(2, '0')}</span>
                <span class="day-title">${lesson.title}</span>
            `;
            card.addEventListener('click', () => openDayModal(lesson));
            daysGrid.appendChild(card);
        });
    }

    function updateProgress() {
        const total = lessonData.length;
        const completed = completedDays.length;
        const percentage = (completed / total) * 100;
        progressText.textContent = `${completed}/${total} Dias`;
        progressFill.style.width = `${percentage}%`;
    }

    function openDayModal(lesson) {
        currentOpenDay = lesson.day;
        modalDayBadge.textContent = `Dia ${String(lesson.day).padStart(2, '0')}`;
        modalTitle.textContent = lesson.title;
        modalBody.innerHTML = lesson.content;
        
        const isCompleted = completedDays.includes(lesson.day);
        updateModalButtonState(isCompleted);
        
        // Reset tools when opening a new day
        btnTimerReset.click();
        if (isMetronomeRunning) toggleMetronome();
        if (mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop();
        btnRecordDelete.click();
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        currentOpenDay = null;
        if (isMetronomeRunning) toggleMetronome();
    }

    function updateModalButtonState(isCompleted) {
        const icon = btnCompleteDay.querySelector('i');
        const text = btnCompleteDay.querySelector('span');
        if (isCompleted) {
            btnCompleteDay.classList.add('completed-state');
            icon.className = 'ph ph-arrow-u-down-left';
            text.textContent = 'Refazer Aula';
        } else {
            btnCompleteDay.classList.remove('completed-state');
            icon.className = 'ph ph-check-circle';
            text.textContent = 'Concluir Dia';
        }
    }

    function toggleCompleteDay() {
        if (!currentOpenDay) return;
        
        const isCompleted = completedDays.includes(currentOpenDay);
        const todayStr = new Date().toDateString();
        
        if (isCompleted) {
            // Removendo conclusão
            completedDays = completedDays.filter(d => d !== currentOpenDay);
            delete completionDates[currentOpenDay];
            
            // Se não sobrar nenhuma aula feita hoje, removemos o dia da ofensiva
            const lessonsDoneToday = Object.values(completionDates).filter(d => d === todayStr).length;
            if (lessonsDoneToday === 0) {
                let streak = parseInt(localStorage.getItem('canto30dias_streak')) || 0;
                if (streak > 0) {
                    streak--;
                    localStorage.setItem('canto30dias_streak', streak);
                    
                    // Restaurar a data anterior como a última data de treino
                    const remainingDates = Object.values(completionDates);
                    if (remainingDates.length > 0) {
                        const last = remainingDates.sort((a, b) => new Date(b) - new Date(a))[0];
                        localStorage.setItem('canto30dias_lastDate', last);
                    } else {
                        localStorage.removeItem('canto30dias_lastDate');
                    }
                    updateStreakUI(streak);
                }
            }
        } else {
            // Adicionando conclusão
            completedDays.push(currentOpenDay);
            completionDates[currentOpenDay] = todayStr;
            registerTrainingDay();
        }
        
        localStorage.setItem('canto30dias_progress', JSON.stringify(completedDays));
        localStorage.setItem('canto30dias_completionDates', JSON.stringify(completionDates));
        renderDays();
        updateProgress();
        updateModalButtonState(!isCompleted);
        
        if (!isCompleted) {
            setTimeout(() => {
                closeModal();
            }, 500);
        }
    }

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    btnCompleteDay.addEventListener('click', toggleCompleteDay);
});
