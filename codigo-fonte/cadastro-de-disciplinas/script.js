const colorInput = document.getElementById('colorInput');
const selectedColor = document.getElementById('selectedColor');

colorInput.addEventListener('input', function() {
  selectedColor.style.backgroundColor = colorInput.value;
});


//Registra um ouvinte de evento que será disparado quando o DOM estiver carregado. O código dentro da função será executado
document.addEventListener('DOMContentLoaded', function() {
    //Armaza uma referência e permite manipular esse elemento posteriormente
    var dateInput = document.getElementById('dateInput');

    //Adiciona um ouvinte de evento ao elemento que é acionado quando clicado e a função fornecida como argumento é executada
    dateInput.addEventListener('click', function() {
        //Dentro da função, alteramos o tipo do elemento para 'date', o navegador reconhece isso como um campo de data
        this.type = 'date';
    });
});