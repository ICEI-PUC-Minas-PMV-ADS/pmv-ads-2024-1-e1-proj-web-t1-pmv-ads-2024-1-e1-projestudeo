//Chamada da função mostrar/esconder alterar senha
function alternarSenha(){
    //Procura um elemento HTML com o ID "alterarSenha" e armazena-o na variável x
    var x = document.getElementById("alterarSenha");
    //Procuram elementos HTML com os IDs "olhoAberto" e "olhoFechado" e os armazenam nas variáveis y e z
    var y = document.getElementById("olhoAberto");
    var z = document.getElementById("olhoFechado");
    //Verifica se o tipo do elemento armazenado em x é "password", se for, significa que a senha está oculta
    if(x.type === 'password'){
        //Se a senha estiver oculta, essa linha muda o tipo do elemento x para "text", e faz com que a senha seja exibida como texto normal
        x.type = "text";
        //Ajustam a propriedade display dos elementos y e z para "block" e "none". Apenas o ícone do olho aberto seja exibido quando a senha estiver visível
        y.style.display = "block";
        z.style.display = "none";
    } else {
        //Se a condição do if não for atendida, a senha está visível. O tipo da senha é definido como "password", e apenas o ícone do olho fechado é exibido
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

//Chamada da função mostrar/esconder confirmação de senha
function alternarConfSenha(){
    //Procura um elemento HTML com o ID "confirmarAltSenha" e armazena-o na variável x
    var x = document.getElementById("confirmarAltSenha");
    //Procuram elementos HTML com os IDs "confOlhoAberto" e "confOlhoFechado" e os armazenam nas variáveis y e z
    var y = document.getElementById("confOlhoAberto");
    var z = document.getElementById("confOlhoFechado");
    //Verifica se o tipo do elemento armazenado em x é "password", se for, significa que a senha está oculta
    if(x.type === 'password'){
        //Se a senha estiver oculta, essa linha muda o tipo do elemento x para "text", e faz com que a senha seja exibida como texto normal
        x.type = "text";
        //Ajustam a propriedade display dos elementos y e z para "block" e "none". Apenas o ícone do olho aberto seja exibido quando a senha estiver visível
        y.style.display = "block";
        z.style.display = "none";
    } else {
        //Se a condição do if não for atendida, a senha está visível. O tipo da senha é definido como "password", e apenas o ícone do olho fechado é exibido
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}