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

// Executa o código quando o conteúdo do documento foi completamente carregado e processado
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o container onde as disciplinas serão inseridas
    const disciplineContainer = document.querySelector('.discipline-container');

    // Função para carregar as disciplinas do Local Storage e exibi-las
    function carregarDisciplinas() {
        // Recupera as disciplinas armazenadas no Local Storage
        // Se não houver disciplinas, inicializa com um array vazio
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

            // Cria um elemento div para representar o nome da disciplina
            const disciplinaNomeDiv = document.createElement('div');
            // Adiciona a classe 'discipline-name' ao elemento
            disciplinaNomeDiv.classList.add('discipline-name');
            // Define o texto do elemento com o nome da disciplina armazenado
            disciplinaNomeDiv.textContent = disciplina.nome;

            // Adiciona o elemento 'disciplinaCorDiv' como filho de 'disciplinaDiv'
            disciplinaDiv.appendChild(disciplinaCorDiv);
            // Adiciona o elemento 'disciplinaNomeDiv' como filho de 'disciplinaDiv'
            disciplinaDiv.appendChild(disciplinaNomeDiv);
            // Adiciona o elemento 'disciplinaDiv' ao container de disciplinas
            disciplineContainer.appendChild(disciplinaDiv);
        });
    }

    // Chama a função para carregar e exibir as disciplinas ao carregar a página
    carregarDisciplinas();
});