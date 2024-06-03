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