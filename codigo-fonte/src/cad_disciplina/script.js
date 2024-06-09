document.getElementById('iconeLogout').addEventListener('click', function() {
    realizarLogout();
});

function realizarLogout() {
    localStorage.clear(); // Limpa todos os dados armazenados no Local Storage
    window.location.href = '../index.html';
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

// Função para salvar a disciplina no Local Storage com atividades
function salvarDisciplina(disciplina) {
    let disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
    disciplina.id = Date.now(); // Adiciona um ID único baseado no timestamp

    // Coletar atividades
    const atividades = [];
    const listaAtividade = document.querySelectorAll('.itemAtividade');
    listaAtividade.forEach(item => {
        const textoAtividade = item.querySelector('.texto input[type="text"]').value;
        const marcado = item.querySelector('.texto input[type="checkbox"]').checked; // Verifica se está marcado
        atividades.push({ texto: textoAtividade, marcado: marcado });
    });

    disciplina.atividades = atividades; // Adiciona as atividades à disciplina

    disciplinas.push(disciplina);
    localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
    alert('Disciplina salva com sucesso!');
    document.getElementById('cadastroForm').reset();
    atualizarCor(corPadrao);
}

// Função para carregar as disciplinas do Local Storage e exibi-las
function carregarDisciplinas() {
    const disciplineContainer = document.querySelector('.discipline-container');
    disciplineContainer.innerHTML = '';
    const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
    
    disciplinas.forEach(disciplina => {
        const disciplinaDiv = document.createElement('div');
        disciplinaDiv.classList.add('discipline');
        disciplinaDiv.style.backgroundColor = disciplina.cor;

        const disciplinaNomeLink = document.createElement('a');
        disciplinaNomeLink.classList.add('discipline-name');
        disciplinaNomeLink.href = `../progresso/progresso.html?id=${disciplina.id}`; // Adiciona o ID na URL
        disciplinaNomeLink.textContent = disciplina.nome;

        disciplinaDiv.appendChild(disciplinaNomeLink);
        disciplineContainer.appendChild(disciplinaDiv);
    });
}

// Função para atualizar a cor selecionada
function atualizarCor(cor) {
    document.getElementById('entradaCorHexa').value = cor;
    document.getElementById('corSelecionada').style.backgroundColor = cor;
}

// Evento DOMContentLoaded para carregar disciplinas e configurar eventos
document.addEventListener('DOMContentLoaded', () => {
    const amostrasCor = document.querySelectorAll('.amostraCor');
    const entradaCorHexa = document.getElementById('entradaCorHexa');
    const corSelecionada = document.getElementById('corSelecionada');
    const form = document.getElementById('cadastroForm');
    const corPadrao = '#0066CC';

    // Define a cor padrão ao carregar a página
    atualizarCor(corPadrao);

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

    // Evento de envio do formulário de cadastro
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Cria um objeto com os dados da disciplina
        const disciplina = {
            nome: document.getElementById('nomeMateria').value,
            cor: entradaCorHexa.value
        };

        // Salva a disciplina no Local Storage
        salvarDisciplina(disciplina);
    });

    // Chama a função para carregar e exibir as disciplinas ao carregar a página
    carregarDisciplinas();
});
