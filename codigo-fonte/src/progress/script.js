document.addEventListener('DOMContentLoaded', () => {
    const colorSwatches = document.querySelectorAll('.color-swatch'); // Seleciona todos os elementos de cores predefinidas
    const colorInput = document.getElementById('colorInput'); // Seleciona o input para entrada de cor manual
    const selectedColorDisplay = document.getElementById('selectedColorDisplay'); // Seleciona o elemento para exibir a cor selecionada

    // Definir a cor padrão
    const defaultColor = '#0066CC';
    updateColor(defaultColor); // Atualiza a cor padrão ao carregar a página

    // Adiciona um evento de clique para cada swatch de cor
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const color = swatch.getAttribute('data-color'); // Obtém a cor associada ao swatch
            updateColor(color); // Atualiza a cor selecionada
            colorSwatches.forEach(s => s.classList.remove('selected')); // Remove a classe 'selected' de todos os swatches
            swatch.classList.add('selected'); // Adiciona a classe 'selected' ao swatch clicado
        });
    });

    // Adiciona um evento de entrada para o campo de entrada de cor manual
    colorInput.addEventListener('input', () => {
        const color = colorInput.value; // Obtém o valor da cor inserida manualmente
        if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) { // Verifica se o valor da cor é válido
            updateColor(color); // Atualiza a cor selecionada
            colorSwatches.forEach(s => s.classList.remove('selected')); // Remove a classe 'selected' de todos os swatches
        }
    });

    // Função para atualizar a cor selecionada
    function updateColor(color) {
        colorInput.value = color; // Atualiza o valor do campo de entrada de cor
        selectedColorDisplay.style.backgroundColor = color; // Atualiza a exibição da cor selecionada
    }
});

// Função para adicionar uma nova atividade
function addActivity() {
    const activityList = document.getElementById('activity-list'); // Seleciona a lista de atividades

    const activityItem = document.createElement('div'); // Cria um novo elemento de atividade
    activityItem.classList.add('activity-item'); // Adiciona a classe 'activity-item' ao elemento

    // Cria o contêiner de texto da atividade com um checkbox e um campo de texto
    const activityText = document.createElement('div');
    activityText.classList.add('text');
    activityText.innerHTML = `<input type="checkbox"><input type="text" placeholder="Nome da atividade">`;

    // Cria o menu com o ícone de lixeira para deletar a atividade
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = `
        <i class='bx bx-trash-alt' onclick="deleteActivity(this)"></i>
    `;

    // Adiciona os elementos de texto e menu ao item de atividade
    activityItem.appendChild(activityText);
    activityItem.appendChild(menu);
    // Adiciona o item de atividade à lista de atividades
    activityList.appendChild(activityItem);
}

// Função para alternar a exibição do menu de opções
function toggleMenu(element) {
    const menuOptions = element.nextElementSibling; // Seleciona o próximo elemento irmão (menu de opções)
    if (menuOptions.style.display === 'block') {
        menuOptions.style.display = 'none'; // Oculta o menu se estiver visível
    } else {
        menuOptions.style.display = 'block'; // Exibe o menu se estiver oculto
    }
}

// Função para deletar uma atividade
function deleteActivity(element) {
    const activityItem = element.closest('.activity-item'); // Seleciona o item de atividade mais próximo
    activityItem.remove(); // Remove o item de atividade da lista
}