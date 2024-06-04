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
        document.getElementById("current-date").textContent = `${dayNames[date.getDay()]}, ${date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' })}`;

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

// Função para adicionar uma nova lembrete
function adicionarLembrete() {
    const listaLembrete = document.getElementById('listaLembrete'); // Seleciona a lista de lembretes

    const itemLembrete = document.createElement('div'); // Cria um novo elemento de lembrete
    itemLembrete.classList.add('itemLembrete'); // Adiciona a classe 'itemLembrete' ao elemento

    // Cria o container de texto da lembrete com um checkbox e um campo de texto
    const textoLembrete = document.createElement('div');
    textoLembrete.classList.add('texto');
    textoLembrete.innerHTML = `<input type="checkbox"><input type="text" placeholder="Nome do lembrete">`;

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
