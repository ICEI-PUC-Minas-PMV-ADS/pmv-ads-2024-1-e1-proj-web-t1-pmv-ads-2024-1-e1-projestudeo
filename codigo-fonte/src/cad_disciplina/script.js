document.addEventListener('DOMContentLoaded', () => {
    const amostrasCor = document.querySelectorAll('.amostraCor'); // Seleciona todos os elementos de cores predefinidas
    const entradaCorHexa = document.getElementById('entradaCorHexa'); // Seleciona o input para entrada de cor manual
    const corSelecionada = document.getElementById('corSelecionada'); // Seleciona o elemento para exibir a cor selecionada

    // Definir a cor padrão
    const corPadrao = '#0066CC';
    atualizarCor(corPadrao); // Atualiza a cor padrão ao carregar a página

    // Adiciona um evento de clique para cada swatch de cor
    amostrasCor.forEach(amostra => {
        amostra.addEventListener('click', () => {
            const cor = amostra.getAttribute('data-color'); // Obtém a cor associada ao swatch
            atualizarCor(cor); // Atualiza a cor selecionada
            amostrasCor.forEach(a => a.classList.remove('selected')); // Remove a classe 'selected' de todas as swatches
            amostra.classList.add('selected'); // Adiciona a classe 'selected' ao swatch clicado
        });
    });

    // Adiciona um evento de entrada para o campo de entrada de cor manual
    entradaCorHexa.addEventListener('input', () => {
        const cor = entradaCorHexa.value; // Obtém o valor da cor inserida manualmente
        if (/^#([0-9A-F]{3}){1,2}$/i.test(cor)) { // Verifica se o valor da cor é válido
            atualizarCor(cor); // Atualiza a cor selecionada
            amostrasCor.forEach(a => a.classList.remove('selected')); // Remove a classe 'selected' de todas as swatches
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

    // Cria o contêiner de texto da atividade com um checkbox e um campo de texto
    const textoAtividade = document.createElement('div');
    textoAtividade.classList.add('texto');
    textoAtividade.innerHTML = `<input type="checkbox"><input type="text" placeholder="Nome da atividade">`;

    // Cria o menu com o ícone de lixeira para deletar a atividade
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = `
        <i class='bx bx-trash-alt' onclick="deletarAtividade(this)"></i>
    `;

    // Adiciona os elementos de texto e menu ao item de atividade
    itemAtividade.appendChild(textoAtividade);
    itemAtividade.appendChild(menu);
    // Adiciona o item de atividade à lista de atividades
    listaAtividade.appendChild(itemAtividade);
}

// Função para alternar a exibição do menu de opções
function alternarMenu(elemento) {
    const opcoesMenu = elemento.nextElementSibling; // Seleciona o próximo elemento irmão (menu de opções)
    if (opcoesMenu.style.display === 'block') {
        opcoesMenu.style.display = 'none'; // Oculta o menu se estiver visível
    } else {
        opcoesMenu.style.display = 'block'; // Exibe o menu se estiver oculto
    }
}

// Função para deletar uma atividade
function deletarAtividade(elemento) {
    const itemAtividade = elemento.closest('.itemAtividade'); // Seleciona o item de atividade mais próximo
    itemAtividade.remove(); // Remove o item de atividade da lista
}
