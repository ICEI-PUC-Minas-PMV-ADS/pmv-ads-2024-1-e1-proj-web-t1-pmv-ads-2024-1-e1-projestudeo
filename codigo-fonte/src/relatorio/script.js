document.getElementById('iconeLogout').addEventListener('click', function() {
    realizarLogout();
});

function realizarLogout() {
    localStorage.clear();
    window.location.href = '../index.html';
}

// Função para obter o ID da URL
function obterIdDaUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Função para carregar os dados do relatório específico
function carregarDadosRelatorio(id) {
    console.log("ID recebido:", id); // Log do ID recebido

    const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
    console.log("Disciplinas encontradas no Local Storage:", disciplinas); // Log das disciplinas encontradas

    const disciplina = disciplinas.find(disc => disc.id === parseInt(id));
    console.log("Disciplina encontrada:", disciplina); // Log da disciplina encontrada

    if (disciplina) {
        // Atualizar o título do relatório
        document.getElementById('tituloRelatorio').textContent = `Relatório: ${disciplina.nome}`;

        // Atualizar o tempo de estudo
        const tempoEstudo = disciplina.tempo || 0;
        const horasEstudo = String(Math.floor(tempoEstudo / 3600)).padStart(2, '0');
        const minutosEstudo = String(Math.floor((tempoEstudo % 3600) / 60)).padStart(2, '0');
        document.getElementById('tempoEstudo').textContent = `${horasEstudo}h${minutosEstudo}m`;

        // Atualizar as atividades e barra de progresso
        const atividadesConcluidas = disciplina.atividades.filter(atividade => atividade.marcado).length;
        const totalAtividades = disciplina.atividades.length;
        const porcentagem = totalAtividades > 0 ? (atividadesConcluidas / totalAtividades) * 100 : 0;

        const barraProgresso = document.getElementById('barraProgresso');
        barraProgresso.style.width = `${porcentagem}%`;
        document.getElementById('textoProgresso').textContent = `${atividadesConcluidas}/${totalAtividades}`;

        // Atualizar o link de voltar com o ID da disciplina
        const linkVoltar = document.getElementById('linkVoltar');
        linkVoltar.href = `../progresso/progresso.html?id=${id}`;
    } else {
        alert('Disciplina não encontrada!');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const id = obterIdDaUrl();
    console.log("ID obtido da URL:", id); // Log do ID obtido da URL
    if (id) {
        carregarDadosRelatorio(id);
    } else {
        console.error('ID da disciplina não encontrado na URL');
    }
});
