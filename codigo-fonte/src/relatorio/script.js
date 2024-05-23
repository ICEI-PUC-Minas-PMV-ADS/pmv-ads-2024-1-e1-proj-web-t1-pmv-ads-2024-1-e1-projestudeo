  // Simulação de atividades concluídas e total de atividades
  const atividadesConcluidas = 10; // Número de atividades concluídas
  const totalAtividades = 11; // Total de atividades

  // Calcula a porcentagem de atividades concluídas
   const porcentagem = (atividadesConcluidas / totalAtividades) * 100;

   // Atualiza a largura da barra de progresso e o texto da porcentagem
  const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
  progressBar.style.width = `${porcentagem}%`;
   progressText.textContent = `${atividadesConcluidas} de ${totalAtividades} `;

   // JavaScript para criar os ponteiros
   const tickMarksContainer = document.querySelector('.tick-marks');
   for (let i = 0; i < 12; i++) {
       const tickMark = document.createElement('div');
       tickMark.classList.add('tick-mark');
       tickMark.style.transform = `rotate(${i * 30}deg) translateY(-85px)`;
       tickMarksContainer.appendChild(tickMark);
   }