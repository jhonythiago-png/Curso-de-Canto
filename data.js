const lessonData = [
  {
    day: 1,
    title: "Fundamentos da Respiração",
    content: `
      <img src="assets/respiracao_diafragma.png" alt="Respiração Diafragmática" class="lesson-image">
      <p>Bem-vindo à sua jornada de transformação vocal! Este curso foi criado especialmente para cantores de louvor gospel que desejam desenvolver uma voz grave e média bonita, encorpada e poderosa – sem forçar a garganta, sem tensão, com técnica e emoção. A cada dia você aprenderá um fundamento novo, construindo uma base sólida para cantar com confiança e unção no louvor. Prepare sua voz, seu coração e vamos começar!</p>
      
      <div class="highlight-box">
        <strong>🎯 Objetivo do Dia 1:</strong>
        Aprender a respirar corretamente para sustentar notas longas e cantar sem cansar a voz. Tudo começa pela respiração diafragmática – a base de toda técnica vocal sólida.
      </div>

      <h3>🧍 Postura Correta</h3>
      <ul>
        <li>Pés paralelos, afastados na largura dos ombros</li>
        <li>Joelhos levemente flexionados (não travados)</li>
        <li>Coluna ereta, mas não rígida</li>
        <li>Ombros relaxados, peito aberto</li>
        <li>Cabeça alinhada com a coluna (queixo reto)</li>
      </ul>
      <div class="highlight-box error">
        <strong>❌ Erro comum:</strong> Ombros arqueados para frente ou tensos.
      </div>

      <h3>1. Respiração Diafragmática (⏱️ 2 min)</h3>
      <ul>
        <li>Coloque uma mão na barriga (umbigo) e outra no peito</li>
        <li>Inspire pelo NARIZ contando 4 segundos -> barriga infla como balão</li>
        <li>O peito NÃO deve subir</li>
        <li>Segure o ar por 4 segundos</li>
        <li>Solte pela BOCA fazendo "SSSS" por 8 segundos</li>
        <li>Repita 5 vezes</li>
      </ul>

      <h3>2. Vibração Labial (⏱️ 3 min)</h3>
      <p>Faça "Brrrrr" como imitação de motor de carro.</p>
      <ul>
        <li>Passo 1: Solte o ar fazendo "BRRRRR" por 5 segundos</li>
        <li>Passo 2: Suba e desça a entonação imitando uma sirene</li>
        <li>Passo 3: Mantenha o som estável em uma nota confortável</li>
      </ul>
      <div class="highlight-box tip">
        <strong>💡 Dica:</strong> Os lábios devem vibrar frouxamente, sem pressão.
      </div>

      <h3>3. Humming – "Mmmmm" (⏱️ 3 min)</h3>
      <ul>
        <li>Feche a boca, dentes separados</li>
        <li>Faça "Mmmmm" sentindo a vibração nos lábios e nariz</li>
        <li>Segure por 5 segundos em uma nota confortável</li>
        <li>Desça a nota gradualmente (glissando descendente)</li>
      </ul>
      <div class="highlight-box success">
        <strong>✅ Correto:</strong> Vibração nos lábios e nariz.<br>
        <strong>❌ Errado:</strong> Sentir aperto na garganta.
      </div>

      <h3>4. Afinação Básica (⏱️ 3 min)</h3>
      <p>Cante a nota <button class="play-note-btn" data-note="440.00"><i class="ph-fill ph-speaker-high"></i> Lá (440Hz)</button> usando o botão ao lado. Comece com um "LÁ" falado, depois sustentado por 5 segundos. Verifique se não está muito agudo (forçado) ou grave demais. Use o afinador: agulha no centro verde = afinado!</p>

      <h3>5. Prática com Frase de Louvor (⏱️ 3 min)</h3>
      <p>Cante estas notas em sequência: 
        <button class="play-note-btn" data-note="261.63">Dó</button> 
        <button class="play-note-btn" data-note="293.66">Ré</button> 
        <button class="play-note-btn" data-note="329.63">Mi</button> 
        <button class="play-note-btn" data-note="349.23">Fá</button> 
        <button class="play-note-btn" data-note="392.00">Sol</button>
      </p>
      <ul>
        <li>"Deus é bom" -> Dó - Ré - Mi</li>
        <li>"Pra sempre" -> Fá - Sol - Sol</li>
      </ul>
      <p>Sem forçar, sentindo a vibração. Tempo total do Dia 1: ~15 minutos.</p>

      <div class="highlight-box success">
        <strong>✅ Checklist do Dia 1:</strong>
        <ul>
            <li>Barriga infla ao inspirar</li>
            <li>Peito fica parado</li>
            <li>Vibração labial contínua por 5s</li>
            <li>Vibração nos lábios no "Mmmmm"</li>
            <li>Cantar sem dor ou arranhão na garganta</li>
        </ul>
      </div>
    `
  },
  {
    day: 2,
    title: "Apoio Vocal (HA HA HA)",
    content: `
      <div class="highlight-box">
        <strong>🎯 Objetivo do Dia:</strong>
        Aprender a usar o abdômen para sustentar a voz e dar potência sem forçar a garganta.
      </div>
      <p>Use a mesma postura do Dia 1, acrescentando as mãos na cintura (polegares na região renal) para monitorar o movimento abdominal.</p>
      
      <h3>💪 Exercício Central: HA HA HA (⏱️ 4 min)</h3>
      <p>Com as mãos na cintura e o abdômen relaxado, diga "HA" curto e seco – sinta o abdômen contrair rapidamente. Repita: HA HA HA HA HA. Agora em uma nota confortável, com intensidade crescente, sem gritar. Cada "HA" deve durar 0,5 segundo.</p>
      
      <div class="highlight-box error">
        <strong>❌ Errado:</strong> Contrair ombros ou pescoço.<br>
        <strong>✅ Correto:</strong> Apenas o abdômen se move, garganta relaxada.
      </div>

      <h3>🌬️ Nota Sustentada (⏱️ 3 min)</h3>
      <p>Inspire 4s (barriga infla) -> Solte o ar em "AAAAH" sustentado por 8 segundos -> Controle a saída de ar para não acabar antes. Use um afinador: tente manter a agulha estável nos últimos segundos.</p>

      <h3>🎶 Frase de Louvor do Dia</h3>
      <p>Ouça os tons:</p>
      <p>
        <button class="play-note-btn" data-note="261.63">Dó</button> 
        <button class="play-note-btn" data-note="293.66">Ré</button> 
        <button class="play-note-btn" data-note="329.63">Mi</button> 
        <button class="play-note-btn" data-note="349.23">Fá</button> 
        <button class="play-note-btn" data-note="392.00">Sol</button>
        <button class="play-note-btn" data-note="440.00">Lá</button>
      </p>
      <ul>
        <li>"EU TE AMO" -> Dó - Ré - Mi</li>
        <li>"CORRO PRA TI" -> Mi - Fá - Sol - Lá</li>
      </ul>
      <p>Use apoio abdominal em cada sílaba.</p>
    `
  },
  {
    day: 3,
    title: "Potência sem Gritar",
    content: `
      <p>Aumentar volume e projeção usando ressonância, não força na garganta. Aquecimento: alongamento suave do pescoço, bocejo para soltar a mandíbula.</p>

      <h3>🗣️ Ressonância Facial – MMMMM (⏱️ 4 min)</h3>
      <p>Faça "Mmmmm" prolongado com boca fechada. Toque o nariz e bochechas com as pontas dos dedos – você deve sentir VIBRAÇÃO. Abra para "AAAAH" mantendo a mesma sensação. Alterne "Mmmmm" -> "AAAAH".</p>
      <div class="highlight-box warning">
        <strong>⚠️ Atenção:</strong> Sem vibração = ressonância fraca. Vibração forte = projeção natural.
      </div>

      <h3>👄 Vogais MA ME MI MO MU (⏱️ 4 min)</h3>
      <p>Coloque a mão no rosto para sentir a vibração. Grave cada vogal em uma nota confortável por 3 segundos cada, mantendo a vibração facial durante todo o som:</p>
      <ul>
        <li>MA (como em MÃO)</li>
        <li>ME (como em MÉDIO)</li>
        <li>MI (como em MUITO)</li>
        <li>MO (como em MORRO)</li>
        <li>MU (como em MÚSICA)</li>
      </ul>

      <h3>🎵 Frase "ALELUIA" com Potência (⏱️ 4 min)</h3>
      <p>Mão na barriga, outra na garganta. Comece baixo, aumente a intensidade até soar forte. Mão na garganta deve sentir POUCA tensão. Se doer ou arranhar = forçou demais.</p>
      <div class="highlight-box tip">
        <strong>💡 O Segredo:</strong> A voz fica forte pela RESSONÂNCIA, não pela força muscular!
      </div>

      <div class="highlight-box success">
        <strong>✅ Checklist Dias 2 e 3:</strong>
        <ul>
            <li>Abdômen contrai em cada "HA"</li>
            <li>Vibração labial sobe e desce suavemente</li>
            <li>Nota sustentada por 8s</li>
            <li>Vibração no rosto no "Mmmmm"</li>
            <li>"ALELUIA" forte sem dor</li>
            <li>Garganta relaxada, abdômen trabalhando</li>
        </ul>
      </div>
    `
  },
  {
    day: 4,
    title: "Afinação Gospel",
    content: `
      <img src="assets/sound_waves.png" alt="Ondas Sonoras" class="lesson-image">
      <p>Corrigir problemas de afinação é um dos maiores desafios de cantores iniciantes. Neste dia, você vai treinar o ouvido ativo, cantar escalas e aplicar em melodias reais de louvor.</p>

      <div class="highlight-box">
        <strong>🎹 Referência de Notas (Voz Grave/Média):</strong>
        <ul>
            <li>Dó (C4) – 261 Hz -> "CORAÇÃO" <button class="play-note-btn" data-note="261.63"><i class="ph-fill ph-speaker-high"></i> Tocar Dó</button></li>
            <li>Ré (D4) – 293 Hz -> "DEUS" <button class="play-note-btn" data-note="293.66"><i class="ph-fill ph-speaker-high"></i> Tocar Ré</button></li>
            <li>Mi (E4) – 329 Hz -> "FIEL" <button class="play-note-btn" data-note="329.63"><i class="ph-fill ph-speaker-high"></i> Tocar Mi</button></li>
            <li>Fá (F4) – 349 Hz -> "AMOR" <button class="play-note-btn" data-note="349.23"><i class="ph-fill ph-speaker-high"></i> Tocar Fá</button></li>
            <li>Sol (G4) – 392 Hz -> "ALELUIA" <button class="play-note-btn" data-note="392.00"><i class="ph-fill ph-speaker-high"></i> Tocar Sol</button></li>
        </ul>
      </div>

      <h3>🎧 1. Ouvido Ativo – Repetir Notas (⏱️ 4 min)</h3>
      <p>Com um teclado ou app: toque DÓ (C4) -> cante DÓ imitando a nota -> verifique: está igual? Muito grave? Muito agudo? Repita com RÉ, MI, FÁ, SOL. <strong>Grave sua voz e compare!</strong> Esse exercício treina seu ouvido a reconhecer quando está dentro ou fora da nota.</p>

      <h3>🎼 2. Escala Maior (⏱️ 4 min)</h3>
      <p>Cante devagar, nota por nota: DÓ - RÉ - MI - FÁ - SOL - FÁ - MI - RÉ - DÓ</p>
      <div class="highlight-box error">
        <strong>❌ Erro comum:</strong> Acelerar nas notas difíceis.<br>
        <strong>✅ Correto:</strong> Respire entre as notas se precisar. Ir devagar garante que o ouvido e a voz se sincronizem.
      </div>

      <h3>🧍 3. Postura e Controle de Ar para Afinação</h3>
      <p>O problema mais comum é desafinar no final da frase por falta de apoio. Cante uma nota por 8 segundos e preste atenção nos últimos 3: a nota caiu? Subiu? Faltou apoio! Repita mantendo o abdômen firme até o fim.</p>

      <h3>🎤 4. Prática com Melodia Gospel (⏱️ 4 min)</h3>
      <p>Melodia de "Quero Te Adorar" (tom maior simples):</p>
      <ul>
        <li>DÓ - RÉ - MI -> "Eu, venho para te"</li>
        <li>MI - RÉ - DÓ -> "Adorar Senhor"</li>
        <li>DÓ - MI - SOL -> "Quero te agradar"</li>
        <li>SOL - MI - DÓ -> "Com meu cantar"</li>
      </ul>
      <p>Cante mantendo as notas exatas como no piano. Grave e compare!</p>
    `
  },
  {
    day: 5,
    title: "Graves Encorpados",
    content: `
      <p>Desenvolver a região grave da voz masculina com firmeza, beleza e ressonância peitoral. Lembre-se: o grave é resultado de relaxamento, não de força!</p>

      <div class="highlight-box tip">
        <strong>💡 Preparação do Dia 5:</strong>
        Boceje suavemente 3x para relaxar a laringe. Massageie a região do pescoço com movimentos suaves. Alongue o pescoço inclinando a cabeça para os lados.
      </div>

      <h3>🗣️ 1. OOOH Grave Relaxado (⏱️ 5 min)</h3>
      <p>Coloque a mão no peito. Comece com "OOH" em tom grave e sinta a VIBRAÇÃO no peito (não na cabeça). Desça ainda mais a nota se possível, mantendo a garganta totalmente relaxada.</p>
      <div class="highlight-box error">
        <strong>❌ Errado:</strong> Forçar para baixo (a voz quebra ou some).<br>
        <strong>✅ Correto:</strong> Grave natural, sem esforço, peito vibrando. O grave encorpado é resultado direto do relaxamento da laringe!
      </div>

      <h3>🌬️ 2. Sustentação Grave (⏱️ 4 min)</h3>
      <p>Escolha uma nota grave confortável. Inspire 4s -> "OOOH" sustentado por 8 segundos -> Mantenha a mesma potência do início ao fim, sentindo o peito vibrar todo o tempo. DICA: Se a nota sumir no meio, é porque inspirou pouco.</p>

      <h3>🎵 3. Frase Cantada em Grave (⏱️ 4 min)</h3>
      <p>"Deus é amor" em notas graves: DEUS (Dó grave <button class="play-note-btn" data-note="130.81"><i class="ph-fill ph-speaker-high"></i></button> - 2s) -> É (mesma nota - 1s) -> AMOR (Ré grave <button class="play-note-btn" data-note="146.83"><i class="ph-fill ph-speaker-high"></i></button> - 3s sustentado). Grave-se e ouça: parece forçado ou natural?</p>

      <h3>🫀 4. Ressonância Peitoral (⏱️ 3 min)</h3>
      <p>Coloque a palma da mão no peito, diga "UOOOH" em tom grave – a palma deve sentir VIBRAÇÃO forte. Mova a mão gradualmente para cima até o pescoço: a vibração deve DIMINUIR ao chegar na garganta.</p>
    `
  },
  {
    day: 6,
    title: "Recuperação e Aquecimento Leve",
    content: `
      <p>Dia leve para recuperação muscular vocal e aquecimento suave – ideal após dias intensos de prática. Assim como atletas precisam de dias de descanso ativo, a voz também precisa de recuperação. Este dia é tão importante quanto os dias de treino intenso!</p>

      <div class="highlight-box">
        <strong>🧘 Alongamento Leve (⏱️ 3 min)</strong>
        <ul>
            <li>Incline cabeça para frente (relaxa pescoço) - 10s</li>
            <li>Incline cabeça para trás (devagar) - 10s</li>
            <li>Olhe para esquerda e direita suavemente - 10s cada</li>
            <li>Suba ombros em direção às orelhas e solte - 3x</li>
            <li>Boceje 3x (solta mandíbula e laringe)</li>
        </ul>
        <p><em>Sempre suavemente, sem forçar ou estalar!</em></p>
      </div>

      <h3>1. Vibração Labial Suave (⏱️ 4 min)</h3>
      <p>"Brrrrr" em intensidade BAIXA (como um sussurro). Som contínuo por 5 segundos, suba e desça notas suavemente. Pare se sentir qualquer tensão. Este exercício MASSAJA as pregas vocais e promove circulação sanguínea no tecido vocal.</p>

      <h3>2. Humming Suave (⏱️ 3 min)</h3>
      <p>"Mmmmm" boca fechada, intensidade leve. Apenas uma nota confortável por vez, mantendo por 10 segundos. Faça pausas de 5 segundos entre repetições. Objetivo: relaxamento, não esforço.</p>

      <h3>3. Respiração Calma – Técnica 4-4-8 (⏱️ 4 min)</h3>
      <ul>
        <li>Inspire pelo nariz (contando 4)</li>
        <li>Segure (contando 4)</li>
        <li>Solte pelo nariz (contando 8)</li>
        <li>Repita 8 vezes, concentrando-se APENAS na respiração</li>
      </ul>

      <div class="highlight-box success">
        <strong>✅ Checklist Dia 6:</strong>
        <ul>
            <li>Vibração labial saiu suave e contínua</li>
            <li>Humming não causou tensão na garganta</li>
            <li>Alongamentos foram suaves e confortáveis</li>
            <li>Sinto minha voz descansada após o treino</li>
        </ul>
      </div>
    `
  },
  {
    day: 7,
    title: "Revisão da Semana 1",
    content: `
      <p>Consolidar os aprendizados da primeira semana com uma sequência prática completa de 20 minutos. Este é o momento de integrar tudo que foi aprendido em uma rotina fluida e musical.</p>

      <div class="highlight-box">
        <strong>⏱️ Cronograma do Treino:</strong>
        <ul>
            <li><strong>0:00 -> 0:30:</strong> Postura (Alinhamento do corpo)</li>
            <li><strong>0:30 -> 2:30:</strong> Respiração diafragmática (Barriga infla, peito parado)</li>
            <li><strong>2:30 -> 5:00:</strong> Vibração labial (Conexão ar + som)</li>
            <li><strong>5:00 -> 8:00:</strong> Humming "Mmmmm" (Ressonância facial)</li>
            <li><strong>8:00 -> 10:00:</strong> HA HA HA apoiado (Abdômen ativo)</li>
            <li><strong>10:00 -> 12:00:</strong> Nota sustentada 8s (Controle de ar)</li>
            <li><strong>12:00 -> 15:00:</strong> Escala Dó-Ré-Mi-Fá-Sol (Afinação)</li>
            <li><strong>15:00 -> 17:00:</strong> Frase de louvor (Aplicar técnica com música)</li>
            <li><strong>17:00 -> 18:00:</strong> Autoavaliação (Registrar sensações)</li>
            <li><strong>18:00 -> 20:00:</strong> Alongamento e desaquecimento (Relaxar a voz)</li>
        </ul>
      </div>

      <h3>📈 Autoavaliação da Semana 1</h3>
      <p>Responda de 0 a 10 – e seja honesto! Isso guia sua evolução:</p>
      <ol>
        <li>Quantos dias pratiquei? (meta: 5/7)</li>
        <li>Postura melhorou?</li>
        <li>Respiração diafragmática está natural?</li>
        <li>Consigo fazer vibrar os lábios?</li>
        <li>Sinto vibração facial no humming?</li>
        <li>Consigo sustentar uma nota por 8 segundos?</li>
        <li>Sinto menos tensão na garganta?</li>
      </ol>
      <div class="highlight-box warning">
        <strong>⚠️ Importante:</strong> Se alguma nota for menor que 5, repita o dia correspondente antes de avançar!
      </div>
    `
  },
  {
    day: 8,
    title: "Potência Técnica",
    content: `
      <p>O objetivo do Dia 8 é aumentar a potência vocal usando técnica correta – nunca gritando. A voz poderosa vem do abdômen e da ressonância, não da garganta. Comece com vibração labial + humming antes dos exercícios.</p>

      <h3>1. Apoio Abdominal Isolado (⏱️ 4 min)</h3>
      <p>Sem som – apenas preparação física. Mãos na cintura, abdômen relaxado. Contraia o abdômen RÁPIDO (como um susto), relaxe devagar. Repita 10x acelerando cada contração. Este movimento será a fonte de TODA a potência vocal.</p>

      <h3>2. "HEY" Explosivo (⏱️ 4 min)</h3>
      <p>Combine o movimento do abdômen com som: inspire (abdômen relaxado) -> contraia RÁPIDO e diga "HEY!" – som curto, forte, seco. Repita 10x em notas diferentes. NÃO use a garganta – apenas o abdômen! Se a garganta doer, reduza a intensidade.</p>

      <h3>3. Frase "JESUS" com Potência (⏱️ 4 min)</h3>
      <p>JE (contraia abdômen, sílaba forte) -> SUS (mantenha apoio, solte a sílaba). Faça crescer a potência sem gritar. Se doer ou arranhar = forçou demais. Potência vem do ABDÔMEN, não da garganta.</p>

      <h3>4. Comparação: Fala vs Canto Forte (⏱️ 3 min)</h3>
      <p>Fale "ALELUIA" em volume de conversa normal. Agora cante a mesma frase em volume forte. A diferença: fala forte = força na garganta (ruim) / canto forte = vibração e apoio (bom). Esse é o momento do "click" técnico!</p>

      <div class="highlight-box success">
        <strong>✅ Checklist Dia 8:</strong>
        <ul>
            <li>Abdômen contrai rápido e forte</li>
            <li>"HEY" vem do abdômen, não da garganta</li>
            <li>Frase "JESUS" forte sem dor</li>
            <li>Canto forte soa cheio, não gritado</li>
        </ul>
      </div>
    `
  },
  {
    day: 9,
    title: "Ressonância e Projeção",
    content: `
      <p>Desenvolver ressonância facial para projetar a voz sem esforço. A "máscara facial" (nariz, bochechas e maçãs do rosto) é o seu amplificador natural. Ativá-la corretamente faz sua voz soar maior e mais cheia sem nenhum esforço extra.</p>

      <h3>1. MMMM Vibrando Máscara (⏱️ 5 min)</h3>
      <p>Coloque os dedos indicadores nas bochechas e faça "Mmmmm" prolongado – os dedos devem sentir VIBRAÇÃO. Mova os dedos para o nariz -> mesma vibração. Para o meio da testa -> vibração ainda presente. Vibração em TODA a máscara = projeção máxima. Se não sentir vibração, relaxe a mandíbula e tente novamente.</p>

      <h3>2. Vogais com Brilho: MA ME MI MO MU (⏱️ 5 min)</h3>
      <p>Mantenha a vibração do "M" ao abrir para vogais. Comece com "Mmmmm" -> abra para "AAAAH" mantendo vibração -> teste MA, ME, MI, MO, MU. O "brilho" vocal é exatamente essa vibração presente na voz aberta.</p>

      <h3>3. Frase Projetada: "EU TE AMO" (⏱️ 4 min)</h3>
      <p>Comece com "Mmmmm" fechado, transicione para "EU TE AMO" mantendo vibração. Cante voltado para uma parede e ouça o retorno sonoro – quanto mais eco, mais projetado! Projeção = ressonância, não volume.</p>

      <h3>4. Comparação: Sem e Com Ressonância (⏱️ 3 min)</h3>
      <p>Cante "ALELUIA" duas vezes: 1ª sem pensar em ressonância -> 2ª ativando a máscara facial. A diferença é imediata: a 2ª versão soa MAIS CHEIA sem esforço extra. Grave as duas versões e compare.</p>
    `
  },
  {
    day: 10,
    title: "Emoção e Técnica no Louvor",
    content: `
      <p>O objetivo final desta primeira fase é cantar com emoção e sentimento verdadeiro sem perder a técnica vocal. Técnica e emoção não são opostos – são parceiros. Quanto mais sólida sua técnica, mais livre você é para se expressar com autenticidade.</p>

      <h3>1. Dinâmica Suave – Piano (⏱️ 3 min)</h3>
      <p>Cante "EU TE AMO" em VOLUME BAIXO com total intenção emocional. Erro comum: baixo volume = sem emoção. Correto: sussurro cantado com a mesma entrega de um canto forte. A intimidade do piano tem um poder emocional único no louvor.</p>

      <h3>2. Dinâmica Forte – Forte (⏱️ 3 min)</h3>
      <p>Cante "EU TE AMO" em VOLUME MÉDIO/ALTO com apoio abdominal, sem gritar. Compare com a versão suave: qual passou mais sentimento?</p>

      <h3>3. Transição Suave->Forte – Crescendo (⏱️ 4 min)</h3>
      <p>Cante "ALELUIA" começando baixo e aumentando gradualmente: AL (piano) -> E (mezzo) -> LU (forte) -> IA (fortíssimo - pico). Mantenha AFINAÇÃO durante todo o crescendo! O crescendo é um dos recursos mais poderosos do louvor gospel.</p>

      <h3>4. Frase Emocional Completa (⏱️ 5 min)</h3>
      <p>"Te agradeço, Senhor, pelo Teu amor sem fim." Pratique a frase completa integrando: postura alinhada, respiração preparada, apoio em cada sílaba forte, ressonância ativa.</p>

      <div class="highlight-box success">
        <strong>🌟 Parabéns pelos 10 Dias Concluídos!</strong><br>
        Você construiu pilares sólidos: Respiração, Apoio, Ressonância e Afinação.<br>
        <strong>Checklist Final:</strong>
        <ul>
            <li>Suave ainda transmite emoção genuína</li>
            <li>Forte sem gritar ou perder qualidade</li>
            <li>Crescendo manteve afinação perfeita</li>
            <li>Frase completa soou natural</li>
        </ul>
        Você está pronto para a Semana 2!
      </div>
    `
  },
  {
    day: 11,
    title: "Notas Médias Fortes e Bonitas",
    content: `
      <p>A região média é a espinha dorsal do louvor. Desenvolvê-la com força e beleza é o objetivo central de hoje. O segredo está no apoio diafragmático – a base de toda nota poderosa e equilibrada.</p>

      <h3>1. AAH com Apoio</h3>
      <p>Em nota confortável (Dó <button class="play-note-btn" data-note="261.63"><i class="ph-fill ph-speaker-high"></i></button> ou Ré <button class="play-note-btn" data-note="293.66"><i class="ph-fill ph-speaker-high"></i></button>): inspire por 4 segundos e solte em "AAAAH" por 8 segundos mantendo intensidade constante do início ao fim. Mão no abdômen – deve estar firme. Repita 5x.</p>

      <h3>2. Sustentação com Controle</h3>
      <p>Na mesma nota média, varie a intensidade: 5s piano -> 5s mezzo -> 5s forte (sem gritar). A voz deve mudar de volume, não de nota. Esse controle dinâmico é essencial no louvor.</p>

      <h3>3. AAA -> EEE -> OOO Alternado</h3>
      <p>Em uma mesma nota, alterne: AAAA (3s) -> EEEE (3s) -> OOOO (3s). Vogais abertas como A e E exigem mais apoio abdominal. Sinta o abdômen trabalhar mais nessas trocas.</p>

      <h3>4. Frase Gospel</h3>
      <p>"CANTO PORQUE TU ÉS BOM" em notas médias estáveis (tom C): 
      <button class="play-note-btn" data-note="261.63">Dó</button>
      <button class="play-note-btn" data-note="293.66">Ré</button>
      <button class="play-note-btn" data-note="329.63">Mi</button>
      -> Mi-Ré -> Dó -> Ré -> Mi sustentado. Cante com apoio constante, ressonância ativa e intenção genuína de louvor.</p>
      
      <div class="highlight-box error">
        <strong>❌ Erro comum:</strong> Achar que "forte" = gritar. Forte bonito vem de apoio + ressonância. Grave seu "AAH forte" e ouça: está agradável ou estridente?
      </div>
    `
  },
  {
    day: 12,
    title: "Dicção Cantando",
    content: `
      <p>Cantar com beleza técnica é essencial, mas se as palavras não chegam claras ao ouvinte, a mensagem do louvor se perde. A dicção é a ponte entre a sua voz e o coração de quem ouve. Hoje vamos trabalhar musculatura articulatória com precisão.</p>

      <div class="highlight-box tip">
        <strong>💡 Preparação (2 min):</strong>
        Massageie o rosto – bochechas, mandíbula e lábios – para soltar os músculos da articulação antes de qualquer exercício. Músculos tensos produzem dicção fechada e sons abafados.
      </div>

      <h3>🗣️ Vogais Exageradas</h3>
      <p>Em nota confortável, pronuncie cada vogal por 5 segundos exagerando a posição da boca: AAA (boca aberta, língua baixa) -> EEE (sorriso leve) -> III (lábios esticados) -> OOO (lábios redondos) -> UUU (lábios fechados). Isso treina a musculatura orofacial.</p>

      <h3>👅 Consoantes Claras</h3>
      <p>Repita sílabas explosivas em ritmo constante com metrônomo a 80 bpm: TA-TE-TI-TO-TU / DA-DE-DI-DO-DU / PA-PE-PI-PO-PU / BA-BE-BI-BO-BU. Cada sílaba deve ser cortada, não arrastada.</p>

      <h3>🎵 Música: "Quero Te Adorar"</h3>
      <p>"Quero Te adorar, quero Te exaltar" – atenção especial ao Q do Quero (explodindo), ao T do Te (língua nos dentes) e ao S do exaltar (suave, não chiado). Grave-se e ouça criticamente a clareza das consoantes.</p>
      
      <div class="highlight-box success">
        <strong>✅ Checklist:</strong>
        <ul>
            <li>Exagerei vogais e senti diferença</li>
            <li>Consoantes TA/DA/PA/BA ficaram claras</li>
            <li>Frase "Como é bom..." ficou compreensível</li>
        </ul>
      </div>
    `
  },
  {
    day: 13,
    title: "Recuperação Leve",
    content: `
      <p>Após dias de esforço vocal intenso, o descanso ativo é tão importante quanto o treino. Hoje não há exercícios de força – apenas cuidado, consciência corporal e regeneração. Sua voz precisa desse espaço para consolidar o aprendizado.</p>

      <div class="highlight-box">
        <strong>⏱️ Roteiro de 10 minutos:</strong>
        <ul>
            <li><strong>0-2 Minutos:</strong> Bocejos amplos e alongamento suave do pescoço. Movimentos lentos e sem tensão.</li>
            <li><strong>2-5 Minutos:</strong> Respiração 4-4-8: inspire em 4s, segure 4s, expire em 8s. Promove calma e expansão pulmonar.</li>
            <li><strong>5-8 Minutos:</strong> Humming suave em notas confortáveis, sem esforço. Manter ressonância passiva.</li>
            <li><strong>8-10 Minutos:</strong> Vibração labial feita como sussurro, sem pressão. Finalize com mandíbula solta.</li>
        </ul>
      </div>

      <div class="highlight-box tip">
        <strong>💡 Dica de Ouro:</strong>
        Beba água morna durante todo o dia, evite falar alto ou pigarrear. Pigarrear agride as pregas vocais – se sentir necessidade, prefira engolir saliva ou tossir suavemente.
      </div>
    `
  },
  {
    day: 14,
    title: "Revisão da Semana 2",
    content: `
      <p>Chegamos ao dia de consolidação. O objetivo agora é amarrar tudo que foi trabalhado: potência sem gritar, ressonância ativa, notas médias firmes e dicção clara. Esta sessão de 20 minutos é um mapa completo da semana.</p>

      <div class="highlight-box">
        <strong>⏱️ Tabela de Treino:</strong>
        <ul>
            <li><strong>0-2 min:</strong> Respiração diafragmática (Controle de ar e postura)</li>
            <li><strong>2-5 min:</strong> MMMM com vibração facial (Ativar ressonância)</li>
            <li><strong>5-8 min:</strong> AAH sustentado com apoio (Notas médias fortes)</li>
            <li><strong>8-11 min:</strong> Vibração labial em slides (Conexão peito-cabeça)</li>
            <li><strong>11-14 min:</strong> Vogais MA ME MI MO MU (Manter ressonância em vogais)</li>
            <li><strong>14-16 min:</strong> Frase "ALELUIA" em crescendo (Dinâmica e emoção)</li>
            <li><strong>16-18 min:</strong> Frase gospel com boa dicção (Clareza articulatória)</li>
            <li><strong>18-20 min:</strong> Desaquecimento (Humming suave para relaxamento vocal)</li>
        </ul>
      </div>

      <h3>📈 Autoavaliação Semana 2 (0 a 10)</h3>
      <ol>
        <li>Consigo dar potência sem gritar?</li>
        <li>Sinto ressonância facial sempre?</li>
        <li>Minhas notas médias estão firmes?</li>
        <li>Dicção melhorou em músicas?</li>
        <li>Completei 5 dias de treino?</li>
      </ol>
      <div class="highlight-box warning">
        <strong>⚠️ Atenção:</strong> Se alguma nota for inferior a 5, repita os dias correspondentes antes de avançar para a próxima semana. Progresso real exige base sólida.
      </div>
    `
  },
  {
    day: 15,
    title: "Aumentar Alcance sem Forçar",
    content: `
      <p>Expandir o alcance vocal é um dos maiores objetivos de qualquer cantor. Mas a expansão saudável acontece com técnica, paciência e respeito ao limite do dia. Nunca force. O que não veio hoje, virá amanhã com consistência.</p>

      <h3>🚨 Sirene com UUU</h3>
      <p>Boca em bico, comece no grave confortável e suba lentamente até o agudo leve, depois desça. Cada subida: 5s / descida: 5s / descanso: 3s. Repita 8 vezes como uma sirene contínua, sem parar o som.</p>

      <h3>🎹 Notas Progressivas</h3>
      <p>Use a escala cromática: Dó -> Dó# -> Ré -> Ré# -> Mi -> Fá... em "AAAAH" sustentado. Pare quando sentir tensão. O limite de hoje é seu limite natural – respeite-o sem culpa.</p>

      <h3>🔗 Transição Grave -> Médio</h3>
      <p>Comece em "EEEE" grave e suba muito devagar, notando onde a voz quer "quebrar". Mantenha o som contínuo sem deixar falhar. Se quebrar: volte um tom e tente mais suavemente.</p>

      <h3>🍃 Agudo Leve</h3>
      <p>Imagine que está chamando alguém de longe com cuidado. Cante "OLÁ" subindo do médio para o agudo devagar. O som deve ser leve, quase como uma flauta. Laringe estável = agudo bonito.</p>
    `
  },
  {
    day: 16,
    title: "Agudos Leves (Masculinos)",
    content: `
      <p>Dois extremos do alcance vocal (agudos e graves) exigem a mesma coisa: relaxamento, não força. Agudos bonitos nascem de laringe estável.</p>

      <h3>1. "NO NO NO" subindo</h3>
      <p>A sílaba NO mantém a laringe baixa – ideal para agudos. Comece no médio (Dó <button class="play-note-btn" data-note="261.63"><i class="ph-fill ph-speaker-high"></i></button>) e suba nota a nota, cada NO leve e sem esforço.</p>

      <h3>2. Sirene Invertida</h3>
      <p>Diferente do Dia 15, começa no agudo e desce até o grave. Ensina a voz a descer com controle, facilitando os agudos depois.</p>

      <h3>3. Frase: "TEU NOME É SANTO"</h3>
      <p>Em tom agudo leve. Pronuncie maravilhado, não gritando. Grave duas versões – forçada vs. leve – e compare. A versão leve sempre emociona mais.</p>
    `
  },
  {
    day: 17,
    title: "Graves Encorpados",
    content: `
      <p>Graves encorpados nascem de ressonância peitoral genuína. A força destrói o grave.</p>

      <h3>1. OOOH profundo relaxado</h3>
      <p>Coluna ereta, inspire fundo e solte em "OOOOH" no grave mais confortável. Sinta a vibração no peito com a mão. O grave não se força – ele acontece quando o corpo relaxa.</p>

      <h3>2. Canto falado</h3>
      <p>Fale "O Senhor é meu pastor" naturalmente, depois repita sustentando as vogais. Parece falar cantado? Isso é grave natural e saudável.</p>

      <h3>3. Frase: "DEUS É FIEL"</h3>
      <p>Em grave sustentado. Grave-se e avalie: está encorpado (ressonância peitoral) ou fanho (falta de apoio)?</p>

      <div class="highlight-box success">
        <strong>✅ Checklist Dias 16 e 17:</strong>
        <ul>
            <li>"NO NO NO" subiu sem tensão na garganta</li>
            <li>Agudo soou leve, não estridente</li>
            <li>OOOH grave saiu sem esforço</li>
            <li>Vibração forte sentida no peito</li>
        </ul>
      </div>
    `
  },
  {
    day: 18,
    title: "Transição Grave -> Médio sem Quebra",
    content: `
      <p>A passagem entre registros – o chamado <em>passaggio</em> – é o ponto onde muitos cantores "quebram" ou perdem a nota. Treinar essa transição suavemente é o caminho para uma voz conectada, fluida e profissional.</p>

      <div class="highlight-box">
        <strong>📝 Exercícios:</strong>
        <ul>
            <li><strong>Glissando lento:</strong> A lentidão do glissando expõe qualquer quebra – se ela aparecer, volte um tom e tente de novo com menos pressão.</li>
            <li><strong>Humming Mmmmm:</strong> Especialmente eficaz porque mantém a ressonância ativa durante a transição.</li>
            <li><strong>Exercício IÁ:</strong> Alternância grave/médio. Se a alternância com "iá" ficou suave e ágil, sua passagem está sendo treinada corretamente.</li>
            <li><strong>Frase EU CANTO:</strong> "EU CANTO PORQUE TU ÉS BOM" foi pensada exatamente para cruzar a passagem – cante-a muito ligada, sem cortar sílabas.</li>
        </ul>
      </div>
    `
  },
  {
    day: 19,
    title: "Emoção + Técnica no Louvor",
    content: `
      <p>Técnica sem emoção é mecânica. Emoção sem técnica é caos. O objetivo do louvor é a união perfeita dos dois – entregar a mensagem com o coração inteiro sem perder afinação, apoio e ressonância.</p>

      <h3>💖 Aquecimento Emocional</h3>
      <p>Escolha uma frase que te toque ("Jesus, eu te amo") e repita em diferentes emoções: alegria, gratidão, saudade e reverência. Apenas a cor emocional muda – a nota e o apoio permanecem idênticos. Esse exercício separa interpretação de perda de controle.</p>

      <h3>📖 Frase Longa com Propósito</h3>
      <p>"EU ME PROSTRO ANTE TI, MEU SENHOR" – divida em blocos de respiração e pense em cada palavra. Cante 3 vezes: 1ª focando apenas na técnica, 2ª focando apenas na emoção, 3ª unindo as duas. Perceba a diferença.</p>

      <h3>🌊 Dinâmica Emocional</h3>
      <p>Pegue um trecho de louvor conhecido (ex: "Lugar Secreto") e cante o verso começando baixo e íntimo, crescendo até uma explosão de louvor. A afinação deve se manter durante todo o crescendo – emoção não pode detonar a nota.</p>

      <h3>🎙️ Autoavaliação com Gravação</h3>
      <p>Grave um verso completo da sua música favorita. Ouça e responda: a emoção passou? A técnica estava lá? O conjunto é agradável? Se algo faltou, repita. A gravação é seu espelho mais honesto.</p>
    `
  },
  {
    day: 20,
    title: "Sustentar Notas Longas",
    content: `
      <p>Notas longas são momentos sagrados no louvor – aquelas sustentações que elevam a congregação e abrem espaço para o Espírito. Mas sustentá-las requer controle preciso de ar, apoio abdominal constante e ressonância ativa. Este é o treino final da semana.</p>

      <h3>1. Controle de Ar com "SSSS"</h3>
      <p>Inspire (4s) -> solte em "SSSS" por 10s -> 12s -> 15s. Cada dia, tente aumentar 1 segundo. Anote seu recorde. Esse exercício condiciona o músculo diafragmático para economia máxima de ar.</p>

      <h3>2. Nota Sustentada em "AAAH"</h3>
      <p>Em nota média confortável: inspire fundo, inicie o "AAAH" e conte quantos segundos mantém sem desafinar. Repita 5x tentando bater seu recorde. Objetivo mínimo: 12 segundos. Se a nota cair no final, contraia o abdômen.</p>

      <h3>3. Notas Vizinhas sem Respirar</h3>
      <p>Dó <button class="play-note-btn" data-note="261.63"><i class="ph-fill ph-speaker-high"></i></button> (6s) -> Ré <button class="play-note-btn" data-note="293.66"><i class="ph-fill ph-speaker-high"></i></button> (6s) -> Mi <button class="play-note-btn" data-note="329.63"><i class="ph-fill ph-speaker-high"></i></button> (6s) em uma única respiração. Respire fundo antes do Dó e apenas depois do Mi. Este exercício treina economia de ar e controle de intensidade.</p>

      <h3>4. Frase Longa do Louvor</h3>
      <p>Escolha um trecho com sílaba longa natural – ex: "Santo, Santo, Santo" (último Santo sustentado). Cante a frase inteira em uma respiração.</p>

      <div class="highlight-box success">
        <strong>🏆 Metas Atingidas:</strong>
        <ul>
            <li><strong>12s de SSSS:</strong> Duração mínima de saída de ar controlada</li>
            <li><strong>12s de AAAH:</strong> Nota sustentada sem desafinar</li>
            <li><strong>18s Dó-Ré-Mi:</strong> Três notas contínuas numa respiração</li>
        </ul>
        Parabéns por completar os 20 dias! Revise suas gravações do início e do fim da semana – a diferença será evidente.
      </div>
    `
  },
  {
    day: 21,
    title: "Revisão da Semana 3",
    content: `
      <p><strong>ALCANCE · AGUDOS LEVES · EMOÇÃO</strong><br>
      Hoje é dia de consolidar os ganhos da semana. Revise com atenção cada exercício – o objetivo não é vencer o cansaço, mas confirmar que seu corpo já internalizou as técnicas.</p>

      <div class="highlight-box">
        <strong>⏱️ Cronograma:</strong>
        <ul>
            <li><strong>0-2 min:</strong> Respiração 4-4-8 (Calma e preparo mental)</li>
            <li><strong>2-5 min:</strong> Sirene UUU grave -> agudo -> grave (Alcance sem força)</li>
            <li><strong>5-8 min:</strong> "NO NO NO" subindo (Agudos leves e sem tensão)</li>
            <li><strong>8-11 min:</strong> OOOH grave com ressonância (Graves encorpados)</li>
            <li><strong>11-14 min:</strong> Glissando lento grave -> médio (Passagem suave)</li>
            <li><strong>14-17 min:</strong> Frase "EU TE AMO" (Técnica unida ao sentimento)</li>
            <li><strong>17-19 min:</strong> Nota sustentada por 12s (Controle de ar)</li>
            <li><strong>19-20 min:</strong> Humming + alongamento (Desaquecimento)</li>
        </ul>
      </div>

      <h3>📈 Autoavaliação - Semana 3</h3>
      <ul>
        <li><strong>Alcance:</strong> Aumentei meu alcance em pelo menos 2 notas?</li>
        <li><strong>Agudos:</strong> Agudos leves não me dão mais medo?</li>
        <li><strong>Graves:</strong> Meus graves estão mais encorpados?</li>
        <li><strong>Transição:</strong> A passagem grave/médio ficou suave?</li>
        <li><strong>Emoção:</strong> Consigo emocionar sem perder a técnica?</li>
        <li><strong>Frequência:</strong> Pratiquei pelo menos 5 dias nesta semana?</li>
      </ul>
    `
  },
  {
    day: 22,
    title: "Presença de Palco no Louvor",
    content: `
      <img src="assets/stage_presence.png" alt="Presença de Palco" class="lesson-image">
      <p><strong>POSTURA · OLHAR · COMUNICAÇÃO NÃO-VERBAL</strong><br>
      Seu corpo fala antes mesmo da sua voz soar. A presença de palco é o conjunto invisível que transforma um cantor técnico em um ministro de louvor. Trabalhe cada detalhe com consciência e intenção.</p>

      <h3>1. Postura de Palco (⏱️ 3 min)</h3>
      <p>Em frente ao espelho: pés paralelos, joelhos levemente flexionados, peito aberto, ombros para trás, cabeça erguida e queixo reto. Microfone a 2 dedos da boca – nunca encoste. Ande dois passos para cada lado mantendo essa postura. Lembre: seu corpo fala antes da voz.</p>

      <h3>2. Olhar e Conexão (⏱️ 4 min)</h3>
      <p>Treine o olhar fixo em um ponto imaginário. Cante 4 versos olhando para o fundo (plateia distante), para baixo (recolhido - errado), e para cima (elevado, de louvor). Perceba como o olhar muda completamente a intenção e a entrega da música.</p>

      <h3>3. Entrada Vocal com Respiração (⏱️ 3 min)</h3>
      <p>Inspire fundo pelo nariz de forma audível e comece a cantar sem pausa. Isso dá autoridade na entrada – recurso muito usado em louvores como "Abre os Olhos do Meu Coração".</p>

      <h3>4. Frase com Movimento (⏱️ 5 min)</h3>
      <p>Cante um verso inteiro enquanto caminha lentamente. Cada passo deve acompanhar a frase musical com propósito. Nunca fique parado e rígido: o palco é um espaço vivo.</p>

      <h3>5. Simulado de Ministração (⏱️ 5 min)</h3>
      <p>Escolha 2 minutos de uma música e "ministre" para uma parede. Grave em vídeo e assista criticamente: analise postura, olhar, movimentos e entrada vocal. Anote 3 pontos a melhorar. O vídeo é seu professor mais honesto.</p>
    `
  },
  {
    day: 23,
    title: "Dinâmica Vocal",
    content: `
      <p><strong>PIANO · MEZZOFORTE · FORTE</strong><br>
      Dominar o volume é dominar a emoção. Um cantor que canta tudo no mesmo volume perde o ouvinte em menos de um minuto. A dinâmica cria tensão, repouso, clímax e entrega – ela é o coração dramático do louvor.</p>

      <div class="highlight-box">
        <strong>🔊 Os Três Patamares:</strong>
        <ul>
            <li><strong>Piano (baixo):</strong> Quase um sussurro cantado – íntimo, como uma oração pessoal. Deve manter vibração facial e ressonância.</li>
            <li><strong>Mezzoforte (médio):</strong> Volume de conversa clara. É o patamar neutro mais usado em versos e bridges.</li>
            <li><strong>Forte (alto):</strong> Volume de palco pequeno – projetado, não gritado. A AFINAÇÃO deve permanecer igual ao piano. O que muda é apenas a intensidade e o suporte diafragmático.</li>
        </ul>
      </div>

      <h3>📝 Exercícios do Dia</h3>
      <ul>
        <li><strong>Escala com dinâmica (5 min):</strong> Use Dó-Ré-Mi-Fá-Sol 
        <button class="play-note-btn" data-note="261.63">Dó</button>
        <button class="play-note-btn" data-note="293.66">Ré</button>
        <button class="play-note-btn" data-note="329.63">Mi</button>
        <button class="play-note-btn" data-note="349.23">Fá</button>
        <button class="play-note-btn" data-note="392.00">Sol</button>
        subindo nos três patamares. Mantenha afinação idêntica nos três volumes.</li>
        <li><strong>Ressonância no piano (3 min):</strong> Cante "ALELUIA" em piano com vibração facial. Se perder o brilho, faça humming antes para reconectar a ressonância.</li>
        <li><strong>Contraste em frase (5 min):</strong> "QUE (piano) O (piano) MEU (crescendo) CORAÇÃO (forte) CANTE (decrescendo)". Grave e avalie se as mudanças são suaves ou bruscas.</li>
        <li><strong>Dinâmica em louvor (4 min):</strong> Cante "Grandes Coisas": verso em piano, refrão em forte, ponte em médio. Transições graduais – nunca em degraus bruscos.</li>
      </ul>
    `
  },
  {
    day: 24,
    title: "Treino Estilo Ministro",
    content: `
      <p><strong>SIMULADO DE MINISTRAÇÃO</strong><br>
      Sem intervalos longos. Este treino simula uma ministração real com foco em resistência, técnica e entrega. Cada minuto tem um propósito claro.</p>

      <div class="highlight-box">
        <strong>⏱️ Treino Contínuo de 25 minutos:</strong>
        <ul>
            <li><strong>0-2 min:</strong> Respiração diafragmática + postura</li>
            <li><strong>2-6 min:</strong> Vibração labial em slides + Humming com máscara facial</li>
            <li><strong>6-10 min:</strong> OOOH grave (peitoral) + AAH médio sustentado 8s</li>
            <li><strong>10-14 min:</strong> "NO NO NO" agudo leve + Escala piano -> mezzo -> forte</li>
            <li><strong>14-18 min:</strong> Frase de louvor com sentimento + repetição em forte</li>
            <li><strong>18-22 min:</strong> "Santo, Santo, Santo" em 3 notas + verso completo</li>
            <li><strong>22-25 min:</strong> Humming suave + autocrítica: o que mais precisa melhorar?</li>
        </ul>
      </div>
    `
  },
  {
    day: 25,
    title: "Fôlego para o Culto",
    content: `
      <p><strong>RESISTÊNCIA</strong><br>
      Desenvolver fôlego para 5 a 7 músicas seguidas. O diafragma é um músculo – ele precisa ser treinado como tal.</p>

      <h3>1. Ciclos de "SSSS" (⏱️ 4 min)</h3>
      <p>Inspire (3s) -> solte em SSSS (6s) -> repita por 3 minutos cronometrados. Treina o diafragma sem cansá-lo.</p>

      <h3>2. Escala contínua (⏱️ 5 min)</h3>
      <p>
        <button class="play-note-btn" data-note="261.63">Dó</button>
        <button class="play-note-btn" data-note="293.66">Ré</button>
        <button class="play-note-btn" data-note="329.63">Mi</button>
        <button class="play-note-btn" data-note="349.23">Fá</button>
        <button class="play-note-btn" data-note="392.00">Sol</button>
        ->Fá->Mi->Ré->Dó, 6x sem parar. Apenas uma respiração rápida entre ciclos. Sinta o abdômen trabalhar.
      </p>

      <h3>3. Simulado de culto (⏱️ 10 min)</h3>
      <p>3 músicas em sequência: louvor animado -> canção de guerra -> adoração lenta. Meta: terminar as 3 sem rouquidão e com a mesma energia.</p>

      <h3>4. Recuperação rápida (⏱️ 3 min)</h3>
      <p>30s humming suave + 1 min respiração calma + 1 min vibração labial. Voz voltando rápido = boa resistência.</p>
    `
  },
  {
    day: 26,
    title: "Interpretação Profunda",
    content: `
      <p><strong>ADORAÇÃO INTENSA · TÉCNICA + ESPÍRITO</strong><br>
      Adoração não é execução – é entrega. O cantor que apenas canta notas é um músico; o cantor que sente o que canta é um ministro. Hoje você trabalha a profundidade emocional e espiritual que transforma uma apresentação em um encontro.</p>

      <h3>1. Sussurro Cantado (⏱️ 5 min)</h3>
      <p>Cante "EU ME RENDO A TI" em sussurro, mas com entonação completa. Isso elimina a preocupação com volume e força, liberando você para focar apenas no sentimento. Depois, aumente o volume gradativamente mantendo a mesma entrega emocional. O segredo é que o sentimento vem antes do volume.</p>

      <h3>2. Crescendo de Emoção (⏱️ 5 min)</h3>
      <p>Use a frase "TUA GRAÇA ME BASTA". Comece quase falando, sem força. Cada repetição adiciona uma camada de emoção até o ápice. Atenção: nunca perca o controle da nota. Emoção verdadeira não significa descontrole técnico – significa intenção clara em cada sílaba.</p>

      <h3>3. Tremolo – Vibrato Lento (⏱️ 4 min)</h3>
      <p>O vibrato lento transmite comoção profunda. Em uma nota sustentada, simule um choro contido: ondas lentas e controladas na voz. Não exagere – é um recurso para momentos específicos de adoração intensa, como em "não há outro igual". Usado com parcimônia, é poderoso.</p>

      <h3>4. Leitura Interpretativa (⏱️ 6 min)</h3>
      <p>Leia o Salmo 23 como se estivesse orando – com pausas, ênfases e sentimento real. Depois, cante o mesmo salmo com uma melodia simples, mantendo exatamente a mesma entrega. A interpretação profunda nasce de sentir o texto, não apenas cantar notas. A mensagem e a melodia devem ser uma só coisa.</p>
    `
  },
  {
    day: 27,
    title: "Afinação Avançada e Autocorreção",
    content: `
      <p><strong>OUVIDO PRECISO · INTERVALOS · AUTOCORRIGIR</strong><br>
      A afinação não é um dom – é uma habilidade desenvolvida com escuta ativa e prática metódica. Hoje você treina o ouvido interno e aprende a se corrigir em tempo real, uma habilidade essencial para qualquer ministro de louvor.</p>

      <div class="highlight-box tip">
        <strong>💡 Por que 10 cents importam?</strong>
        Um erro de 10 cents (décimos de semitom) já é perceptível ao ouvido humano treinado. Em um conjunto de louvor com instrumentos, um cantor fora de 15-20 cents compromete a harmonia do grupo inteiro. Treinar com afinador semanalmente é o hábito que separa cantores bons de cantores excelentes.
      </div>

      <h3>1. Escala cromática com teclado (⏱️ 5 min)</h3>
      <p>
        <button class="play-note-btn" data-note="261.63"><i class="ph-fill ph-speaker-high"></i> Dó</button>
        <button class="play-note-btn" data-note="293.66"><i class="ph-fill ph-speaker-high"></i> Ré</button>
        <button class="play-note-btn" data-note="329.63"><i class="ph-fill ph-speaker-high"></i> Mi</button>
        <button class="play-note-btn" data-note="349.23"><i class="ph-fill ph-speaker-high"></i> Fá</button>
        <button class="play-note-btn" data-note="392.00"><i class="ph-fill ph-speaker-high"></i> Sol</button>
      </p>
      <p>Toque ou use os botões acima: Dó -> Dó# -> Ré -> Ré# -> Mi -> Fá -> Fá# -> Sol. Cante cada nota com "LÁ" e verifique com afinador. Se errar mais de 10 cents, repita a nota até acertar. A escala cromática treina o ouvido para os menores intervalos possíveis.</p>

      <h3>2. Exercício de intervalos (⏱️ 3 min)</h3>
      <p>Toque Dó e depois Mi (terça maior). Cante o intervalo. Prossiga: Dó->Mi -> Mi->Sol -> Sol->Dó. Intervalos são a base da afinação harmônica. Cantores que erram afinação geralmente erram os intervalos, não as notas isoladas.</p>

      <h3>3. Corrigindo tendência ao grave (⏱️ 3 min)</h3>
      <p>Muitos homens tendem a cantar ligeiramente abaixo da nota. <button class="play-note-btn" data-note="293.66"><i class="ph-fill ph-speaker-high"></i> Ouça o Ré (293 Hz)</button> e verifique. Se estiver grave, visualize mentalmente que precisa "alcançar" a nota vindo de cima – isso corrige a tendência naturalmente.</p>

      <h3>4. Afinação em frases longas (⏱️ 4 min)</h3>
      <p>Cante "EU TE EXALTO, MEU DEUS" em uma só respiração. Preste atenção na última palavra – é onde a afinação mais escorrega. Corrija essa sílaba com apoio diafragmático extra. A última nota da frase é a impressão que fica.</p>

      <h3>5. Autocorreção por gravação (⏱️ 5 min)</h3>
      <p>Grave uma escala e compare com um teclado. Marque no papel as notas que você errou. Treine apenas essas notas por 2 minutos. Estudar seus erros específicos é 10x mais eficiente do que repetir o que você já acerta.</p>

      <div class="highlight-box success">
        <strong>✅ Checklist do Dia 27:</strong>
        <ul>
            <li>Escala cromática saiu afinada (erro inferior a 10 cents)</li>
            <li>Intervalos Dó-Mi e Mi-Sol soaram corretos</li>
            <li>Corrigi minha tendência (grave ou aguda)</li>
            <li>A última palavra da frase ficou afinada</li>
            <li>Identifiquei e treinei minhas notas problemáticas</li>
        </ul>
      </div>
    `
  },
  {
    day: 28,
    title: "Recuperação e Alinhamento Final",
    content: `
      <p><strong>DESCANSO ATIVO · PREPARO MENTAL</strong><br>
      Antes da reta final, o corpo e a mente precisam de espaço para integrar tudo que foi aprendido. Hoje é um dia sagrado na sua jornada – não de silêncio absoluto, mas de cuidado intencional com a sua voz e com você mesmo.</p>

      <div class="highlight-box tip">
        <strong>💡 Orientação Mental:</strong>
        Hoje é dia de ouvir sua voz, não de treiná-la. Beba água morna com mel ao longo do dia. Evite gritar, sussurrar por longo tempo ou falar muito. Se sentir vontade de cantar, cante suavemente uma música que você ama – sem julgamento, sem técnica, apenas prazer. Sua voz descansada amanhã valerá mais do que qualquer treino forçado hoje.
      </div>

      <h3>Sequência de 15 Minutos</h3>
      <ul>
        <li><strong>3 min - Respiração 4-4-8:</strong> Muito lenta, foco total em relaxamento. Inspire por 4 tempos, segure 4, expire por 8. Repita sem pressa, deixando o sistema nervoso desacelerar.</li>
        <li><strong>3 min - Vibração labial suave:</strong> Como um carro em marcha lenta – sem esforço, sem tensão. Apenas manter o fluxo de ar suave. Isso mantém o aquecimento mínimo sem sobrecarregar.</li>
        <li><strong>3 min - Humming em nota confortável:</strong> Escolha UMA nota que soa bem para você e fique nela. Sinta a vibração no rosto sem esforço. Não mude de nota, não teste alcance.</li>
        <li><strong>3 min - Bocejos e alongamento:</strong> Abra a mandíbula em bocejos profundos. Role o pescoço lentamente para os dois lados. Solte os ombros. A laringe relaxa com o bocejo – é fisiológico.</li>
        <li><strong>3 min - Autoavaliação:</strong> Liste 3 pontos fortes e 3 pontos a melhorar. Seja honesto, mas gentil consigo mesmo. Você chegou até o dia 28 – isso já é uma conquista enorme.</li>
      </ul>

      <div class="highlight-box success">
        <strong>✅ Checklist do Dia 28:</strong>
        <ul>
            <li>Não forcei a voz o dia inteiro</li>
            <li>Alonguei bem o pescoço e mandíbula</li>
            <li>Bebi bastante água morna</li>
            <li>Me sinto descansado e confiante para os dias finais</li>
        </ul>
      </div>
    `
  },
  {
    day: 29,
    title: "Performance Completa",
    content: `
      <p><strong>TÉCNICA + EMOÇÃO + POTÊNCIA UNIDAS</strong><br>
      Este é o penúltimo dia – uma simulação completa de apresentação ao vivo. Tudo que você treinou durante 28 dias entra em cena agora: aquecimento, afinação, dinâmica, expressão, resistência e presença. Execute como se houvesse uma congregação na sua frente.</p>

      <div class="highlight-box">
        <strong>⏱️ Roteiro da Performance (25 min):</strong>
        <ul>
            <li><strong>0-2 min:</strong> Aquecimento: respiração 4-4-8 + humming</li>
            <li><strong>2-4 min:</strong> Vibração labial + slides agudo/grave</li>
            <li><strong>4-6 min:</strong> Escala cromática (foco em afinação)</li>
            <li><strong>6-8 min:</strong> Dinâmica piano -> forte -> piano</li>
            <li><strong>8-12 min:</strong> Verso + refrão de um louvor completo (ex: "Reviver")</li>
            <li><strong>12-15 min:</strong> Intervalo: alongamento + hidratação</li>
            <li><strong>15-19 min:</strong> Segunda música contrastante (animada e energética)</li>
            <li><strong>19-22 min:</strong> Bridge espontânea – improvise 4 versos com a voz</li>
            <li><strong>22-24 min:</strong> Final com sustentação longa na última palavra</li>
            <li><strong>24-25 min:</strong> Desaquecimento + autoavaliação imediata</li>
        </ul>
      </div>

      <h3>Critérios de Autoavaliação (0 a 10)</h3>
      <ul>
        <li><strong>Afinação:</strong> Notas estiveram precisas durante toda a performance?</li>
        <li><strong>Ressonância:</strong> Vibração facial esteve presente durante todo o treino?</li>
        <li><strong>Resistência:</strong> Apoio e fôlego sem cansaço excessivo?</li>
        <li><strong>Potência:</strong> Forte projetado sem gritar ou perder afinação?</li>
        <li><strong>Emoção:</strong> Transmiti sentimento genuíno em cada frase?</li>
      </ul>
    `
  },
  {
    day: 30,
    title: "Transformação Vocal: Treino Final",
    content: `
      <img src="assets/stage_presence.png" alt="Transformação Vocal Final" class="lesson-image">
      <p><strong>30 DIAS CONCLUÍDOS - CELEBRAÇÃO & REFLEXÃO</strong><br>
      Parabéns por chegar até aqui. Este último treino é uma celebração – um resumo completo de tudo que você construiu ao longo deste mês. Execute com gratidão, presença e alegria.</p>

      <h3>🏆 O Treino Definitivo (25 min)</h3>
      <ol>
        <li><strong>Abertura (0-3 min):</strong> Postura consciente, respiração 4-4-8, bocejos e relaxamento de mandíbula. Prepare o instrumento com respeito.</li>
        <li><strong>Aquecimento (3-8 min):</strong> Vibração labial em slides, Humming MMMMM com ressonância facial, OOOH grave com ressonância peitoral. Acorde cada região.</li>
        <li><strong>Técnica (8-15 min):</strong> Escala cromática, agudos leves "NO NO NO", grave encorpado "OOOH", transição grave-médio lenta e fluida.</li>
        <li><strong>Louvor (15-22 min):</strong> Cante um louvor na íntegra (ex: "Não Há Nome Maior"). Atenção em apoio, ressonância, dinâmica, emoção e presença de palco.</li>
        <li><strong>Fechamento (22-25 min):</strong> Humming suave de desaquecimento, alongamento do pescoço e ombros, agradecimento e autoavaliação final dos 30 dias.</li>
      </ol>

      <div class="highlight-box success">
        <strong>🌟 Autoavaliação dos 30 Dias:</strong>
        <ul>
            <li><strong>Evolução técnica:</strong> Antes: ___/10 -> Depois: ___/10. Quanto você cresceu?</li>
            <li><strong>Músicas novas:</strong> Consegui cantar músicas que não conseguia antes? Sim / Parcialmente / Não</li>
            <li><strong>Resistência no culto:</strong> Minha voz cansava menos nos cultos ao longo do mês? Sim / Um pouco / Não</li>
            <li><strong>O que mais melhorou?</strong> ( ) Afinação  ( ) Potência  ( ) Resistência  ( ) Ressonância  ( ) Emoção</li>
        </ul>
      </div>

      <div class="highlight-box tip">
        <strong>💡 Mensagem Final:</strong>
        Você concluiu os 30 dias de treino vocal para voz grave/média masculina no estilo louvor gospel. Continue praticando ao menos 3x por semana para manter e evoluir. O que você construiu aqui é só o começo de uma jornada linda de ministério vocal.
      </div>
    `
  }
];
