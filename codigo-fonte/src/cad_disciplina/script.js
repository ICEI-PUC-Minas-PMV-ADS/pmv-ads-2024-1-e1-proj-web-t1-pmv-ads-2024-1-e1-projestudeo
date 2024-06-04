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
function deletarAtividade(elemento) {
    const itemAtividade = elemento.closest('.itemAtividade'); // Seleciona o item de atividade mais próximo
    itemAtividade.remove(); // Remove o item de atividade da lista
}

// Executa o código quando o conteúdo do documento foi completamente carregado e processado
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos de amostra de cor predefinida
    const amostrasCor = document.querySelectorAll('.amostraCor');
    // Seleciona o campo de entrada para a cor hexadecimal
    const entradaCorHexa = document.getElementById('entradaCorHexa');
    // Seleciona o elemento que exibe a cor selecionada
    const corSelecionada = document.getElementById('corSelecionada');
    // Seleciona o campo de entrada para o nome da matéria
    const nomeMateria = document.getElementById('nomeMateria');
    // Seleciona o formulário de cadastro
    const form = document.getElementById('cadastroForm');

    // Define a cor padrão para a cor selecionada
    const corPadrao = '#0066CC';
    atualizarCor(corPadrao); // Atualiza a cor para a cor padrão ao carregar a página

    // Adiciona um evento de clique para cada amostra de cor
    amostrasCor.forEach(amostra => {
        amostra.addEventListener('click', () => {
            // Obtém a cor associada à amostra de cor clicada
            const cor = amostra.getAttribute('data-color');
            // Atualiza a cor selecionada com a cor da amostra clicada
            atualizarCor(cor);
        });
    });

    // Adiciona um evento de entrada para o campo de entrada de cor manual
    entradaCorHexa.addEventListener('input', () => {
        // Obtém o valor da cor inserida manualmente
        const cor = entradaCorHexa.value;
        // Verifica se o valor da cor inserida é um código hexadecimal válido
        if (/^#([0-9A-F]{3}){1,2}$/i.test(cor)) {
            // Atualiza a cor selecionada com a cor inserida manualmente
            atualizarCor(cor);
        }
    });

    // Função para atualizar a cor selecionada
    function atualizarCor(cor) {
        // Atualiza o valor do campo de entrada de cor
        entradaCorHexa.value = cor;
        // Atualiza a exibição da cor selecionada
        corSelecionada.style.backgroundColor = cor;
    }

    // Adiciona um evento de envio para o formulário de cadastro
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Cria um objeto com os dados da disciplina
        const disciplina = {
            nome: nomeMateria.value, // Obtém o nome da matéria
            cor: entradaCorHexa.value // Obtém a cor selecionada
        };

        // Salva a disciplina no Local Storage
        salvarDisciplina(disciplina);
    });

    // Função para salvar a disciplina no Local Storage
    function salvarDisciplina(disciplina) {
        // Recupera as disciplinas do Local Storage, ou inicializa um array vazio se não houver disciplinas salvas
        let disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
        // Adiciona a nova disciplina ao array de disciplinas
        disciplinas.push(disciplina);
        // Salva o array de disciplinas atualizado no Local Storage
        localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
        // Exibe uma mensagem de sucesso
        alert('Disciplina salva com sucesso!');
        // Reseta o formulário de cadastro
        form.reset();
        // Atualiza a cor para a cor padrão
        atualizarCor(corPadrao);
    }
});