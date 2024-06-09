document.getElementById('iconeLogout').addEventListener('click', function() {
    // Função de logout
    realizarLogout();
});

function realizarLogout() {
    // Limpe os dados de sessão ou local storage
    localStorage.clear(); // Limpa todos os dados armazenados no localStorage

    // Redirecione para a página de login (index.html)
    window.location.href = '../index.html';
}

/*// Simulação de atividades concluídas e total de atividades
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
}*/

document.addEventListener('DOMContentLoaded', () => {
    // Recupera os dados salvos da página de progresso
    let nomeMateriaArray = JSON.parse(localStorage.getItem('nomeMateriaArray')); // Recupera o nome da disciplina
    let nomeMateria = nomeMateriaArray[nomeMateriaArray.length - 1]; // Pega o último nome da disciplina
    nomeMateria = nomeMateria.replace(/^"(.*)"$/, '$1'); // Remove as aspas do início e do fim, se presentes

    // Recupera o tempo de estudo
    const tempoEstudo = localStorage.getItem('seconds');

    // Recupera as atividades
    const atividades = JSON.parse(localStorage.getItem('dadosArray'));

    // Atualiza o título da página de relatório com o nome da disciplina
    const tituloRelatorio = document.querySelector('legend b');
    tituloRelatorio.textContent = `Relatório: ${nomeMateria}`;

    // Atualiza o tempo de estudo na página de relatório
    const horasEstudo = Math.floor(tempoEstudo / 3600); // Converte os segundos em horas
    const minutosEstudo = Math.floor((tempoEstudo % 3600) / 60); // Converte os segundos restantes em minutos
    const textoTempoEstudo = `${horasEstudo}h${minutosEstudo}m`; // Formata o texto
    const tempoEstudoElement = document.querySelector('.hora');
    tempoEstudoElement.textContent = textoTempoEstudo;

    // Atualiza a barra de progresso e o texto de porcentagem das atividades
    const atividadesConcluidas = atividades.filter(atividade => atividade.marcado).length;
    const totalAtividades = atividades.length;
    const porcentagem = (atividadesConcluidas / totalAtividades) * 100;
    const barraProgresso = document.getElementById('barraProgresso');
    const textoProgresso = document.getElementById('textoProgresso');
    barraProgresso.style.width = `${porcentagem}%`;
    textoProgresso.textContent = `${atividadesConcluidas} de ${totalAtividades}`;

    // Aqui você pode adicionar código para criar os ponteiros de hora, se necessário
});
