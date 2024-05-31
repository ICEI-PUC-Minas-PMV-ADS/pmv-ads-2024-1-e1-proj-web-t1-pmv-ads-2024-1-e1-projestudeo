// Simulação de atividades concluídas e total de atividades
const atividadesConcluidas = 6; // Número de atividades concluídas
const totalAtividades = 10; // Total de atividades

// Calcula a porcentagem de atividades concluídas
const porcentagem = (atividadesConcluidas / totalAtividades) * 100;

// Atualiza a largura da barra de progresso e o texto da porcentagem
const barraProgresso = document.getElementById('barraProgresso');
const textoProgresso = document.getElementById('textoProgresso');
barraProgresso.style.width = `${porcentagem}%`;
textoProgresso.textContent = `${atividadesConcluidas} de ${totalAtividades} `;

// JavaScript para criar os ponteiros
const marcadoresHora = document.querySelector('.marcadoresHora');
for (let i = 0; i < 12; i++) {
    const marcador = document.createElement('div');
    marcador.classList.add('marcadores');
    marcador.style.transform = `rotate(${i * 30}deg) translateY(-85px)`;
    marcadoresHora.appendChild(marcador);
}
