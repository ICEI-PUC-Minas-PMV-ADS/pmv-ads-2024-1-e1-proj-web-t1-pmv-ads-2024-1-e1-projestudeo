// Função para mostrar/esconder senha
function togglePassword(){
    // Seleciona o campo de senha
    var x = document.getElementById("senha");
    // Seleciona os ícones de mostrar/esconder senha
    var y = document.getElementById("olhoAberto");
    var z = document.getElementById("olhoFechado");
    // Alterna a visibilidade da senha e dos ícones
    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

// Função para mostrar/esconder confirmação de senha
function togglePasswordConfirmation(){
    // Seleciona o campo de confirmação de senha
    var x = document.getElementById("confirmarSenha");
    // Seleciona os ícones de mostrar/esconder confirmação de senha
    var y = document.getElementById("olhoAbertoConf");
    var z = document.getElementById("olhoFechadoConf");
    // Alterna a visibilidade da confirmação de senha e dos ícones
    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}