// Função para carregar as disciplinas do Local Storage e exibi-las
function carregarDisciplinas() {
    const disciplineContainer = document.querySelector('.discipline-container');

    // Limpa o container de disciplinas
    disciplineContainer.innerHTML = '';

    // Recupera as disciplinas armazenadas no Local Storage
    const disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
    
    // Itera sobre cada disciplina recuperada
    disciplinas.forEach(disciplina => {
        // Cria um elemento div para representar a disciplina
        const disciplinaDiv = document.createElement('div');
        // Adiciona a classe 'discipline' ao elemento
        disciplinaDiv.classList.add('discipline');
        // Define a cor de fundo da disciplina com a cor armazenada
        disciplinaDiv.style.backgroundColor = disciplina.cor;

        // Cria um elemento div para representar a cor da disciplina
        const disciplinaCorDiv = document.createElement('div');
        // Adiciona a classe 'discipline-color' ao elemento
        disciplinaCorDiv.classList.add('discipline-color');

        // Cria um link para a página de progresso e envolve o nome da disciplina
        const disciplinaNomeLink = document.createElement('a');
        // Adiciona a classe 'discipline-name' ao link
        disciplinaNomeLink.classList.add('discipline-name');
        // Define o href do link
        disciplinaNomeLink.href = '../progresso/progresso.html';
        // Define o texto do link como o nome da disciplina
        disciplinaNomeLink.textContent = disciplina.nome;

        // Cria o ícone de três pontinhos para abrir o menu de opções
        const optionsIcon = document.createElement('i');
        optionsIcon.classList.add('bx', 'bx-dots-horizontal-rounded', 'options-icon');
        optionsIcon.onclick = (e) => {
            e.stopPropagation();
            const dropdownMenu = disciplinaDiv.querySelector('.dropdown-menu');
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        };

        // Cria o menu dropdown
        const dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu');
        dropdownMenu.innerHTML = `<a onclick="deletarDisciplina('${disciplina.nome}')">Deletar</a>`;

        // Adiciona o ícone de três pontinhos e o menu dropdown ao elemento disciplina
        disciplinaDiv.appendChild(optionsIcon);
        disciplinaDiv.appendChild(dropdownMenu);
        // Adiciona o elemento 'disciplinaCorDiv' como filho de 'disciplinaDiv'
        disciplinaDiv.appendChild(disciplinaCorDiv);
        // Adiciona o link 'disciplinaNomeLink' como filho de 'disciplinaDiv'
        disciplinaDiv.appendChild(disciplinaNomeLink);
        // Adiciona o elemento 'disciplinaDiv' ao container de disciplinas
        disciplineContainer.appendChild(disciplinaDiv);

        // Fecha o dropdown ao clicar fora dele
        document.addEventListener('click', () => {
            dropdownMenu.style.display = 'none';
        });
    });
}

// Função para deletar uma disciplina
function deletarDisciplina(nomeDisciplina) {
    // Recupera as disciplinas armazenadas no Local Storage
    let disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
    // Filtra as disciplinas para remover a que tem o nome fornecido
    disciplinas = disciplinas.filter(disciplina => disciplina.nome !== nomeDisciplina);
    // Armazena novamente as disciplinas no Local Storage
    localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
    // Recarrega as disciplinas para atualizar a exibição
    carregarDisciplinas();
}

// Chama a função para carregar e exibir as disciplinas ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarDisciplinas();
});

// Executa o código quando o conteúdo do documento foi completamente carregado e processado
document.addEventListener("DOMContentLoaded", function() {
    // Arrays que contêm os nomes dos meses e dos dias da semana
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const dayNames = ["D", "S", "T", "Q", "Q", "S", "S"];
    
    // Objeto Date que representa a data atual
    let currentDate = new Date();

    // Função que renderiza o calendário para um determinado mês e ano
    function renderCalendar(date) {
        // Obtém o mês e o ano da data fornecida
        const month = date.getMonth();
        const year = date.getFullYear();
        // Obtém o dia da semana do primeiro dia do mês
        const firstDay = new Date(year, month, 1).getDay();
        // Obtém o último dia do mês
        const lastDate = new Date(year, month + 1, 0).getDate();
        
        // Define o texto do elemento que exibe o mês e o ano
        document.getElementById("month-year").textContent = `${monthNames[month]} ${year}`;
        // Define o texto do elemento que exibe a data atual
        document.getElementById("current-date").textContent = `${dayNames[date.getDay()]}, ${date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short'})}`;

        // Seleciona o container onde as datas serão inseridas
        const dates = document.getElementById("calendar-dates");
        // Limpa o conteúdo anterior do container de datas
        dates.innerHTML = "";

        // Preenche o calendário com os dias vazios até o primeiro dia do mês
        for (let i = 0; i < firstDay; i++) {
            dates.innerHTML += `<div></div>`;
        }

        // Preenche o calendário com os dias do mês
        for (let i = 1; i <= lastDate; i++) {
            // Cria um elemento div para cada dia do mês
            const dayDiv = document.createElement("div");
            // Define o texto do elemento como o número do dia
            dayDiv.textContent = i;
            // Adiciona a classe 'today' ao dia atual
            if (i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                dayDiv.classList.add("today");
            }
            // Adiciona o elemento div ao container de datas
            dates.appendChild(dayDiv);
        }
    }

    // Adiciona um evento de clique ao botão para o mês anterior
    document.getElementById("prev-month").addEventListener("click", function() {
        // Decrementa o mês da data atual
        currentDate.setMonth(currentDate.getMonth() - 1);
        // Renderiza o calendário para o novo mês
        renderCalendar(currentDate);
    });

    // Adiciona um evento de clique ao botão para o próximo mês
    document.getElementById("next-month").addEventListener("click", function() {
        // Incrementa o mês da data atual
        currentDate.setMonth(currentDate.getMonth() + 1);
        // Renderiza o calendário para o novo mês
        renderCalendar(currentDate);
    });

    // Renderiza o calendário para o mês atual ao carregar a página
    renderCalendar(currentDate);
});

// Função para ajustar a altura do textarea
function ajustarAlturaTextarea(textarea) {
    textarea.style.height = 'auto'; // Redefine a altura para 'auto' para obter o scrollHeight correto
    textarea.style.height = textarea.scrollHeight + 'px'; // Define a altura com base no scrollHeight
}

// Função para ajustar a altura do textarea
function ajustarAlturaTextarea(textarea) {
    textarea.style.height = '25px'; // Redefine a altura para 25px
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta a altura com base no scrollHeight
}

// Função para adicionar uma nova lembrete
function adicionarLembrete() {
    const listaLembrete = document.getElementById('listaLembrete'); // Seleciona a lista de lembretes

    const itemLembrete = document.createElement('div'); // Cria um novo elemento de lembrete
    itemLembrete.classList.add('itemLembrete'); // Adiciona a classe 'itemLembrete' ao elemento

    // Cria o container de texto da lembrete com um checkbox e um campo de texto
    const textoLembrete = document.createElement('div');
    textoLembrete.classList.add('texto');
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Nome do lembrete';
    textarea.style.height = '25px'; // Define um tamanho inicial pequeno
    textarea.addEventListener('input', function() {
        ajustarAlturaTextarea(this);
    });
    textoLembrete.appendChild(textarea);

    // Cria o container para o checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    textoLembrete.insertBefore(checkbox, textarea);

    // Cria o container para o ícone de lixeira, para deletar a lembrete
    const acaoDeletar = document.createElement('div');
    acaoDeletar.classList.add('acaoDeletar');
    acaoDeletar.innerHTML = `<i class='bx bx-trash-alt' onclick="deletarLembrete(this)"></i>`;

    // Adiciona os elementos de texto e container de lixeira ao item de lembrete
    itemLembrete.appendChild(textoLembrete);
    itemLembrete.appendChild(acaoDeletar);

    // Adiciona o item de lembrete à lista de lembretes
    listaLembrete.appendChild(itemLembrete);
}

// Função para deletar uma lembrete
function deletarLembrete(elemento) {
    const itemLembrete = elemento.closest('.itemLembrete'); // Seleciona o item de lembrete mais próximo
    itemLembrete.remove(); // Remove o item de lembrete da lista
}
