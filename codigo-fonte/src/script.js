//Chamada da função mostrar/esconder senha
function alternarSenha(){
    //Procura um elemento HTML com o ID "senha" e armazena-o na variável x
    var x = document.getElementById("loginSenha");
    //Procura elementos HTML com os IDs "olhoAberto" e "olhoFechado" e os armazena nas variáveis y e z
    var y = document.getElementById("olhoAberto");
    var z = document.getElementById("olhoFechado");
    //Verifica se o tipo do elemento armazenado em x é "password", se for, significa que a senha está oculta
    if(x.type === 'password'){
        //Se a senha estiver oculta, essa linha muda o tipo do elemento x para "text", e faz com que a senha seja exibida como texto normal
        x.type = "text";
        //Ajusta a propriedade display dos elementos y e z para "block" e "none". Apenas o ícone do olho aberto deve ser exibido quando a senha estiver visível
        y.style.display = "block";
        z.style.display = "none";
    }
    //Se a condição do if não for atendida, a senha está visível. O tipo da senha é definido como "password", e apenas o ícone do olho fechado é exibido
    else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura dos valores dos campos de login
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    // Recupera os dados do usuário armazenado no Local Storage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    // Verifica se o usuário existe e se as credenciais são válidas
    if (usuario && usuario.email === email && usuario.senha === senha) {
        alert('Login bem-sucedido!');
        // Redireciona para a página de perfil ou dashboard
        window.location.href = './home/home.html';
    } else {
        alert('E-mail ou senha incorretos. Por favor, tente novamente.');
    }
});