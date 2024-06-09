document.getElementById('iconeLogout').addEventListener('click', function() {
    realizarLogout();
});

function realizarLogout() {
    localStorage.clear(); // Limpa todos os dados armazenados no Local Storage
    window.location.href = '../index.html';
}

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
        disciplinaDiv.classList.add('discipline');
        disciplinaDiv.style.backgroundColor = disciplina.cor;

        // Cria um elemento div para representar a cor da disciplina
        const disciplinaCorDiv = document.createElement('div');
        disciplinaCorDiv.classList.add('discipline-color');

        // Cria um link para a página de progresso e envolve o nome da disciplina
        const disciplinaNomeLink = document.createElement('a');
        disciplinaNomeLink.classList.add('discipline-name');
        disciplinaNomeLink.href = `../progresso/progresso.html?id=${disciplina.id}`;
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
        dropdownMenu.innerHTML = `<a onclick="deletarDisciplina('${disciplina.id}')">Deletar</a>`;

        // Adiciona o ícone de três pontinhos e o menu dropdown ao elemento disciplina
        disciplinaDiv.appendChild(optionsIcon);
        disciplinaDiv.appendChild(dropdownMenu);
        disciplinaDiv.appendChild(disciplinaCorDiv);
        disciplinaDiv.appendChild(disciplinaNomeLink);

        disciplineContainer.appendChild(disciplinaDiv);

        // Fecha o dropdown ao clicar fora dele
        document.addEventListener('click', () => {
            dropdownMenu.style.display = 'none';
        });
    });
}

// Função para deletar uma disciplina
function deletarDisciplina(idDisciplina) {
    let disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];
    disciplinas = disciplinas.filter(disciplina => disciplina.id !== parseInt(idDisciplina));
    localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
    carregarDisciplinas();
}

// Chama a função para carregar e exibir as disciplinas ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarDisciplinas();
});

// Função para renderizar o calendário
document.addEventListener("DOMContentLoaded", function() {
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const dayNames = ["D", "S", "T", "Q", "Q", "S", "S"];
    
    let currentDate = new Date();

    function renderCalendar(date) {
        const month = date.getMonth();
        const year = date.getFullYear();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        
        document.getElementById("month-year").textContent = `${monthNames[month]} ${year}`;
        document.getElementById("current-date").textContent = `${dayNames[date.getDay()]}, ${date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short'})}`;

        const dates = document.getElementById("calendar-dates");
        dates.innerHTML = "";

        for (let i = 0; i < firstDay; i++) {
            dates.innerHTML += `<div></div>`;
        }

        for (let i = 1; i <= lastDate; i++) {
            const dayDiv = document.createElement("div");
            dayDiv.textContent = i;
            if (i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
                dayDiv.classList.add("today");
            }
            dates.appendChild(dayDiv);
        }
    }

    document.getElementById("prev-month").addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    document.getElementById("next-month").addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});

// Função para ajustar a altura do textarea
function ajustarAlturaTextarea(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// Função para adicionar uma nova lembrete
function adicionarLembrete() {
    const listaLembrete = document.getElementById('listaLembrete');

    const itemLembrete = document.createElement('div');
    itemLembrete.classList.add('itemLembrete');

    const textoLembrete = document.createElement('div');
    textoLembrete.classList.add('texto');
    const textarea = document.createElement('textarea');
    textarea.placeholder = 'Nome do lembrete';
    textarea.style.height = '25px';
    textarea.addEventListener('input', function() {
        ajustarAlturaTextarea(this);
        salvarLembretes(); // Salva os lembretes sempre que o texto é alterado
    });
    textoLembrete.appendChild(textarea);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', salvarLembretes); // Salva os lembretes sempre que o estado do checkbox é alterado
    textoLembrete.insertBefore(checkbox, textarea);

    const acaoDeletar = document.createElement('div');
    acaoDeletar.classList.add('acaoDeletar');
    acaoDeletar.innerHTML = `<i class='bx bx-trash-alt' onclick="deletarLembrete(this)"></i>`;

    itemLembrete.appendChild(textoLembrete);
    itemLembrete.appendChild(acaoDeletar);

    listaLembrete.appendChild(itemLembrete);

    salvarLembretes(); // Salva os lembretes quando um novo lembrete é adicionado
}

// Função para deletar um lembrete
function deletarLembrete(elemento) {
    const itemLembrete = elemento.closest('.itemLembrete');
    itemLembrete.remove();
    salvarLembretes(); // Salva os lembretes quando um lembrete é removido
}

// Função para salvar os lembretes no Local Storage
function salvarLembretes() {
    const lembretes = [];
    document.querySelectorAll('.itemLembrete').forEach(itemLembrete => {
        const textarea = itemLembrete.querySelector('textarea');
        const checkbox = itemLembrete.querySelector('input[type="checkbox"]');
        lembretes.push({
            texto: textarea.value,
            checked: checkbox.checked
        });
    });
    localStorage.setItem('lembretes', JSON.stringify(lembretes));
}

// Função para carregar os lembretes do Local Storage
function carregarLembretes() {
    const lembretes = JSON.parse(localStorage.getItem('lembretes')) || [];
    lembretes.forEach(lembrete => {
        const listaLembrete = document.getElementById('listaLembrete');

        const itemLembrete = document.createElement('div');
        itemLembrete.classList.add('itemLembrete');

        const textoLembrete = document.createElement('div');
        textoLembrete.classList.add('texto');
        const textarea = document.createElement('textarea');
        textarea.placeholder = 'Nome do lembrete';
        textarea.style.height = '25px';
        textarea.value = lembrete.texto;
        textarea.addEventListener('input', function() {
            ajustarAlturaTextarea(this);
            salvarLembretes(); // Salva os lembretes sempre que o texto é alterado
        });
        textoLembrete.appendChild(textarea);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = lembrete.checked;
        checkbox.addEventListener('change', salvarLembretes); // Salva os lembretes sempre que o estado do checkbox é alterado
        textoLembrete.insertBefore(checkbox, textarea);

        const acaoDeletar = document.createElement('div');
        acaoDeletar.classList.add('acaoDeletar');
        acaoDeletar.innerHTML = `<i class='bx bx-trash-alt' onclick="deletarLembrete(this)"></i>`;

        itemLembrete.appendChild(textoLembrete);
        itemLembrete.appendChild(acaoDeletar);

        listaLembrete.appendChild(itemLembrete);
    });
}

// Chama a função para carregar os lembretes ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarLembretes();
});
