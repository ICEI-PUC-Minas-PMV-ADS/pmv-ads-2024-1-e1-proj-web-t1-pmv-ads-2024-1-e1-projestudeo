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

document.addEventListener('DOMContentLoaded', () => {
    const amostrasCor = document.querySelectorAll('.amostraCor'); // Seleciona todos os elementos de cores predefinidas
    const entradaCorHexa = document.getElementById('entradaCorHexa'); // Seleciona o input para entrada de cor manual
    const corSelecionada = document.getElementById('corSelecionada'); // Seleciona o elemento para exibir a cor selecionada

    // Definir a cor padrão
    const corPadrao = '#0066CC';
    atualizarCor(corPadrao); // Atualiza a cor padrão ao carregar a página

    // Adiciona um evento de clique para cada amostra de cor
    amostrasCor.forEach(amostra => {
        amostra.addEventListener('click', () => {
            const cor = amostra.getAttribute('data-color'); // Obtém a cor associada a amostra de cor
            atualizarCor(cor); // Atualiza a cor selecionada
        });
    });

    // Adiciona um evento de entrada para o campo de entrada de cor manual
    entradaCorHexa.addEventListener('input', () => {
        const cor = entradaCorHexa.value; // Obtém o valor da cor inserida manualmente
        if (/^#([0-9A-F]{3}){1,2}$/i.test(cor)) { // Verifica se o valor da cor é válido
            atualizarCor(cor); // Atualiza a cor selecionada
        }
    });

    // Função para atualizar a cor selecionada
    function atualizarCor(cor) {
        entradaCorHexa.value = cor; // Atualiza o valor do campo de entrada de cor
        corSelecionada.style.backgroundColor = cor; // Atualiza a exibição da cor selecionada
    }
});

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
    acaoDeletar.innerHTML = `
        <i class='bx bx-trash-alt' onclick="deletarAtividade(this)"></i>
    `;

    // Adiciona os elementos de texto e container de lixeira ao item de atividade
    itemAtividade.appendChild(textoAtividade);
    itemAtividade.appendChild(acaoDeletar);
    // Adiciona o item de atividade à lista de atividades
    listaAtividade.appendChild(itemAtividade);
}

// Função para deletar uma atividade
function deletarAtividade(element) {
    const itemAtividade = element.closest('.itemAtividade'); // Seleciona o item de atividade mais próximo
    itemAtividade.remove(); // Remove o item de atividade da lista
}

// Funções do cronômetro
let timer;
let isRunning = false;
let seconds = localStorage.getItem('seconds') ? parseInt(localStorage.getItem('seconds')) : 0;

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
        localStorage.setItem('seconds', seconds); // Salva o valor atual dos segundos no localStorage
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
    localStorage.setItem('seconds', seconds); // Reseta o valor dos segundos no localStorage
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

function salvarDados() {
    // Obtendo dados relevantes 
    const tempo = document.getElementById('clock').textContent;
    const anotacao = document.querySelector('.campoAnotacao').value;
    const nomeMateria = document.getElementById('altNomeMateria').value;

    // Obtendo as atividades 
    const atividades = [];
    const listaAtividade = document.querySelectorAll('.itemAtividade');
    listaAtividade.forEach(item => {
        const textoAtividade = item.querySelector('.texto input[type="text"]').value;
        const marcado = item.querySelector('.texto input[type="checkbox"]').checked; // Verifica se está marcado
        atividades.push({ texto: textoAtividade, marcado: marcado });
    });

    // Criando um objeto com os dados obtidos
    const dados = {
        tempo: tempo,
        anotacao: anotacao,
        atividades: atividades
    };

    // Verificando se já existem arrays no localStorage 
    let dadosArray = JSON.parse(localStorage.getItem('dadosArray')) || [];
    let nomeMateriaArray = JSON.parse(localStorage.getItem('nomeMateriaArray')) || [];

    // Adicionando os dados aos arrays correspondentes
    dadosArray.push(dados);
    nomeMateriaArray = [nomeMateria];

    // Salvando os arrays atualizados de volta no localStorage
    localStorage.setItem('dadosArray', JSON.stringify(dadosArray));
    localStorage.setItem('nomeMateriaArray', JSON.stringify(nomeMateriaArray));

    // Atualizando o título da página e o campo específico no HTML
    document.title = `${nomeMateria} - eStudeo`;
    document.querySelector('.tituloCentralizado fieldset legend').textContent = nomeMateria;

    // Exibindo mensagem de confirmação
    window.alert('Dados salvos com sucesso!');
}

function carregarDadosSalvos() {
    // Verificando se já existem arrays no localStorage 
    const dadosArray = JSON.parse(localStorage.getItem('dadosArray'));
    const nomeMateriaArray = JSON.parse(localStorage.getItem('nomeMateriaArray'));

    // Verificando se existem dados salvos
    if (dadosArray && dadosArray.length > 0) {
        const ultimoDados = dadosArray[dadosArray.length - 1];
        document.getElementById('clock').textContent = ultimoDados.tempo;
        document.querySelector('.campoAnotacao').value = ultimoDados.anotacao;

        // Exibindo as atividades salvas
        const listaAtividade = document.getElementById('listaAtividade');
        listaAtividade.innerHTML = '';
        ultimoDados.atividades.forEach(function(atividade) {
            const itemAtividade = document.createElement('div');
            itemAtividade.classList.add('itemAtividade');

            const textoAtividade = document.createElement('div');
            textoAtividade.classList.add('texto');
            textoAtividade.innerHTML = `
                <input type="checkbox" ${atividade.marcado ? 'checked' : ''}> <!-- Marca o checkbox se estiver marcado -->
                <input type="text" value="${atividade.texto}">
            `;

            const acaoDeletar = document.createElement('div');
            acaoDeletar.classList.add('acaoDeletar');
            acaoDeletar.innerHTML = `
                <i class='bx bx-trash-alt' onclick="deletarAtividade(this)"></i>
            `;

            itemAtividade.appendChild(textoAtividade);
            itemAtividade.appendChild(acaoDeletar);
            listaAtividade.appendChild(itemAtividade);
        });
    }

    // Verificando se existe um nome de matéria salvo, caso contrário, definir como "Disciplina - 1"
    let nomeMateria = '';
    if (!nomeMateriaArray || nomeMateriaArray.length === 0) {
        nomeMateria = 'Disciplina - 1';
        localStorage.setItem('nomeMateriaArray', JSON.stringify([nomeMateria]));
    } else {
        nomeMateria = nomeMateriaArray[nomeMateriaArray.length - 1];
    }

    document.getElementById('altNomeMateria').value = nomeMateria;
    document.title = `${nomeMateria} - eStudeo`;
    document.querySelector('.tituloCentralizado fieldset legend').textContent = nomeMateria;
}

// Chamar a função para carregar os dados salvos quando a página for carregada
window.addEventListener('load', carregarDadosSalvos);
