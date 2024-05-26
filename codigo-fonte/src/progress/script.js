document.addEventListener('DOMContentLoaded', () => {
    const amostrasCor = document.querySelectorAll('.amostraCor');
    const entradaCorHexa = document.getElementById('entradaCorHexa');
    const corSelecionada = document.getElementById('corSelecionada');

    const corPadrao = '#0066CC';
    atualizarCor(corPadrao);

    amostrasCor.forEach(amostra => {
        amostra.addEventListener('click', () => {
            const cor = amostra.getAttribute('data-color');
            atualizarCor(cor);
        });
    });

    entradaCorHexa.addEventListener('input', () => {
        const cor = entradaCorHexa.value;
        if (/^#([0-9A-F]{3}){1,2}$/i.test(cor)) {
            atualizarCor(cor);
        }
    });

    function atualizarCor(cor) {
        entradaCorHexa.value = cor;
        corSelecionada.style.backgroundColor = cor;
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