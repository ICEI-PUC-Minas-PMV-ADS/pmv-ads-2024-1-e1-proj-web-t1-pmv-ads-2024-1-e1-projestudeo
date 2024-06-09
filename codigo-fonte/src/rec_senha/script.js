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

document.getElementById('formRec').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura dos valores dos campos de login
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confsenha = document.getElementById('confirmarSenha').value;

    // Recupera os dados do usuário armazenado no Local Storage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    // Verifica se o usuário existe e se as credenciais são válidas
    if (usuario && usuario.email === email && senha === confsenha) {
        alert('Senha alterada com sucesso!');
        // Atualiza a senha do usuário no Local Storage
        usuario.senha = senha;
        localStorage.setItem('usuario', JSON.stringify(usuario));
        // Redireciona para a página de login
        window.location.href = '../index.html';
    } else {
        alert('E-mail não existe ou senhas diferentes. Por favor, tente novamente.');
    }
});