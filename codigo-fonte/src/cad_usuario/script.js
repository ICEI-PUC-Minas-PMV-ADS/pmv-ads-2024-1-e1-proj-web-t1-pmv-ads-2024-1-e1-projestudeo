//Chamada da função mostrar/esconder senha
function alternarSenha(){
    //Procura um elemento HTML com o ID "senha" e armazena-o na variável x
    var x = document.getElementById("senha");
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

function alternarConfSenha(){
    //Procura um elemento HTML com o ID "confSenha" e armazena-o na variável x
    var x = document.getElementById("confSenha");
    //Procura elementos HTML com os IDs "confOlhoAberto" e "confOlhoFechado" e os armazena nas variáveis y e z
    var y = document.getElementById("confOlhoAberto");
    var z = document.getElementById("confOlhoFechado");
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

document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Captura dos valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confSenha = document.getElementById('confSenha').value;

    // Verifica se a senha e a confirmação de senha são iguais
    if (senha !== confSenha) {
        alert('As senhas não coincidem. Por favor, verifique.');
        return;
    }

    // Cria o objeto usuário
    const usuario = {
        nome,
        sobrenome,
        dataNascimento,
        email,
        senha
    };

    // Armazena o usuário no Local Storage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redireciona para a página de login ou exibe uma mensagem de sucesso
    alert('Conta criada com sucesso!');
    window.location.href = '../index.html';
});