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

// Função para carregar os dados da disciplina específica
function carregarDadosDisciplina(id) {
    const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
    const disciplina = disciplinas.find(disc => disc.id === parseInt(id));

    if (disciplina) {
        document.querySelector('.tituloCentralizado fieldset legend').textContent = disciplina.nome;
        document.getElementById('altNomeMateria').value = disciplina.nome;
        atualizarCor(disciplina.cor);

        // Carregar outras informações específicas da disciplina (anotações, atividades, etc.)
        carregarAtividades(disciplina);
        carregarAnotacoes(disciplina);
        carregarTempo(disciplina.tempo || 0); // Carregar o tempo salvo

        // Atualizar o link para o relatório com o ID da disciplina
        const linkRelatorio = document.getElementById('linkRelatorio');
        linkRelatorio.href = `../relatorio/relatorio.html?id=${id}`;
    } else {
        alert('Disciplina não encontrada!');
    }
}

// Função para adicionar uma nova atividade
function adicionarAtividade() {
    const listaAtividade = document.getElementById('listaAtividade'); // Seleciona a lista de atividades

    const itemAtividade = document.createElement('div'); // Cria um novo elemento de atividade
    itemAtividade.classList.add('itemAtividade'); // Adiciona a classe 'itemAtividade' ao elemento

    // Cria o container de texto da atividade com um checkbox e um campo de texto
    const textoAtividade = document.createElement('div');
    textoAtividade.classList.add('texto');
    textoAtividade.innerHTML = `<input type="checkbox"><input type="text" placeholder="Nome da atividade">`;

    // Cria o container para o ícone de lixeira, para deletar a atividade
    const acaoDeletar = document.createElement('div');
    acaoDeletar.classList.add('acaoDeletar');
    acaoDeletar.innerHTML = `<i class='bx bx-trash-alt' onclick="deletarAtividade(this)"></i>`;

    // Adiciona os elementos de texto e container de lixeira ao item de atividade
    itemAtividade.appendChild(textoAtividade);
    itemAtividade.appendChild(acaoDeletar);
    // Adiciona o item de atividade à lista de atividades
    listaAtividade.appendChild(itemAtividade);
}

// Função para deletar uma atividade
function deletarAtividade(elemento) {
    const itemAtividade = elemento.closest('.itemAtividade'); // Seleciona o item de atividade mais próximo
    itemAtividade.remove(); // Remove o item de atividade da lista
}

// Função para atualizar a cor selecionada
function atualizarCor(cor) {
    document.getElementById('entradaCorHexa').value = cor;
    document.getElementById('corSelecionada').style.backgroundColor = cor;
}

// Função para carregar atividades salvas
function carregarAtividades(disciplina) {
    const listaAtividade = document.getElementById('listaAtividade');
    listaAtividade.innerHTML = '';

    if (disciplina.atividades) {
        disciplina.atividades.forEach(atividade => {
            const itemAtividade = document.createElement('div');
            itemAtividade.classList.add('itemAtividade');

            const textoAtividade = document.createElement('div');
            textoAtividade.classList.add('texto');
            textoAtividade.innerHTML = `<input type="checkbox" ${atividade.marcado ? 'checked' : ''}><input type="text" value="${atividade.texto}">`;

            const acaoDeletar = document.createElement('div');
            acaoDeletar.classList.add('acaoDeletar');
            acaoDeletar.innerHTML = `<i class='bx bx-trash-alt' onclick="deletarAtividade(this)"></i>`;

            itemAtividade.appendChild(textoAtividade);
            itemAtividade.appendChild(acaoDeletar);
            listaAtividade.appendChild(itemAtividade);
        });
    }
}

// Função para carregar anotações salvas
function carregarAnotacoes(disciplina) {
    const campoAnotacao = document.querySelector('.campoAnotacao');
    if (disciplina.anotacoes) {
        campoAnotacao.value = disciplina.anotacoes;
    } else {
        campoAnotacao.value = '';
    }
}

// Função para carregar o tempo salvo
function carregarTempo(tempoSalvo) {
    seconds = tempoSalvo;
    updateClock();
}

// Funções do cronômetro
let timer;
let isRunning = false;
let seconds = 0;

const clockElement = document.getElementById('clock');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

function updateClock() {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    clockElement.textContent = `${hrs}:${mins}:${secs}`;
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        updateClock();
    }, 1000);
    isRunning = true;
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateClock();
}

playButton.addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
    }
});

pauseButton.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    }
});

resetButton.addEventListener('click', () => {
    resetTimer();
});

// Função para salvar dados
function salvarDados() {
    const id = obterIdDaUrl();
    const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
    const disciplinaIndex = disciplinas.findIndex(disc => disc.id === parseInt(id));

    if (disciplinaIndex !== -1) {
        const tempo = seconds;
        const anotacao = document.querySelector('.campoAnotacao').value;
        const nomeMateria = document.getElementById('altNomeMateria').value;

        const atividades = [];
        const listaAtividade = document.querySelectorAll('.itemAtividade');
        listaAtividade.forEach(item => {
            const textoAtividade = item.querySelector('.texto input[type="text"]').value;
            const marcado = item.querySelector('.texto input[type="checkbox"]').checked; // Verifica se está marcado
            atividades.push({ texto: textoAtividade, marcado: marcado });
        });

        disciplinas[disciplinaIndex] = {
            ...disciplinas[disciplinaIndex],
            nome: nomeMateria,
            cor: document.getElementById('entradaCorHexa').value,
            atividades: atividades,
            anotacoes: anotacao,
            tempo: tempo
        };

        localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
        alert('Dados salvos com sucesso!');
        document.title = `${nomeMateria} - eStudeo`;
        document.querySelector('.tituloCentralizado fieldset legend').textContent = nomeMateria;
    } else {
        alert('Disciplina não encontrada!');
    }
}

// Evento DOMContentLoaded para carregar os dados da disciplina
document.addEventListener('DOMContentLoaded', () => {
    const id = obterIdDaUrl();
    if (id) {
        carregarDadosDisciplina(id);
    }

    // Configurar a seleção de cor
    const amostrasCor = document.querySelectorAll('.amostraCor');
    const entradaCorHexa = document.getElementById('entradaCorHexa');
    const corSelecionada = document.getElementById('corSelecionada');

    // Evento de clique para cada amostra de cor
    amostrasCor.forEach(amostra => {
        amostra.addEventListener('click', () => {
            const cor = amostra.getAttribute('data-color');
            atualizarCor(cor);
        });
    });

    // Evento de entrada para o campo de entrada de cor manual
    entradaCorHexa.addEventListener('input', () => {
        const cor = entradaCorHexa.value;
        if (/^#([0-9A-F]{3}){1,2}$/i.test(cor)) {
            atualizarCor(cor);
        }
    });
});

// Carregar dados da disciplina ao carregar a página
window.addEventListener('load', () => {
    const id = obterIdDaUrl();
    if (id) {
        carregarDadosDisciplina(id);
    }
});
