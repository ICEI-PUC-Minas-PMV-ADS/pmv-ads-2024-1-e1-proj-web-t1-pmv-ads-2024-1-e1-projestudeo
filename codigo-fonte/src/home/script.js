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
