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

    // --- Estado da Aplicação ---
    let completedDays = JSON.parse(localStorage.getItem('canto30dias_progress')) || [];
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
                const diffTime = Math.abs(today - last);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                
                if (diffDays === 1) {
                    // Mantém a ofensiva (não incrementa ainda, só quando completar uma aula)
                } else if (diffDays > 1) {
                    // Perdeu a ofensiva
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
            streakCount.textContent = `${streak} Dias Seguidos!`;
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
    let audioContext;
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
        if (mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop();
        btnRecordDelete.click();
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        currentOpenDay = null;
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
        
        if (isCompleted) {
            completedDays = completedDays.filter(d => d !== currentOpenDay);
        } else {
            completedDays.push(currentOpenDay);
            // Registrar como treino feito hoje para ofensiva
            registerTrainingDay();
        }
        
        localStorage.setItem('canto30dias_progress', JSON.stringify(completedDays));
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
