//Chamada da função mostrar/esconder senha
function togglePassword(){
    //Procura um elemento HTML com o ID "password" e armazena-o na variável x
    var x = document.getElementById("password");
    //Procuram elementos HTML com os IDs "openEye" e "closedEye" e os armazenam nas variáveis y e z
    var y = document.getElementById("openEye");
    var z = document.getElementById("closedEye");
    //Verifica se o tipo do elemento armazenado em x é "password", se for, significa que a senha está oculta
    if(x.type === 'password'){
        //Se a senha estiver oculta, essa linha muda o tipo do elemento x para "text", e faz com que a senha seja exibida como texto normal
        x.type = "text";
        //Ajustam a propriedade display dos elementos y e z para "block" e "none". Apenas o ícone do olho aberto seja exibido quando a senha estiver visível
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
