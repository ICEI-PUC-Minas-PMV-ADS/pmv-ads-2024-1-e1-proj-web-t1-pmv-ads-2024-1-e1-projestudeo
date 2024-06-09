document.getElementById('iconeLogout').addEventListener('click', function() {
    // Função de logout
    realizarLogout();
});

function realizarLogout() {
    // Limpe os dados de sessão ou local storage
    localStorage.clear(); // Limpa todos os dados armazenados no localStorage

    // Redirecione para a página de login (index.html)
    window.location.href = '../index.html';
}

//Chamada da função mostrar/esconder alterar senha
function alternarSenha(){
    //Procura um elemento HTML com o ID "alterarSenha" e armazena-o na variável x
    var x = document.getElementById("senha");
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
    var x = document.getElementById("confSenha");
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
document.addEventListener('DOMContentLoaded', function() {
    // Carrega os dados do usuário do Local Storage
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    
    if (usuario) {
        document.getElementById('nome').value = usuario.nome;
        document.getElementById('sobrenome').value = usuario.sobrenome;
        document.getElementById('dataNascimento').value = usuario.dataNascimento;
        document.getElementById('email').value = usuario.email;

        // Verifica se o gênero já está salvo no usuário e seleciona o radio button correspondente
        if (usuario.genero) {
            if (usuario.genero === 'Masculino') {
                document.getElementById('opcao1').checked = true;
            } else if (usuario.genero === 'Feminino') {
                document.getElementById('opcao2').checked = true;
            } else {
                document.getElementById('opcao3').checked = true;
            }
        }
    }

    document.getElementById('salvar').addEventListener('click', function(e) {
        e.preventDefault();

        // Captura os valores atualizados dos campos do formulário
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confSenha = document.getElementById('confSenha').value;

        // Captura o gênero selecionado
        let genero = '';
        if (document.getElementById('opcao1').checked) {
            genero = 'Masculino';
        } else if (document.getElementById('opcao2').checked) {
            genero = 'Feminino';
        } else if (document.getElementById('opcao3').checked) {
            genero = 'Outros';
        }

        // Verifica se a senha e a confirmação de senha são iguais, se foram preenchidas
        if (senha && confSenha && senha !== confSenha) {
            alert('As senhas não coincidem. Por favor, verifique.');
            return;
        }

        // Atualiza o objeto usuário
        usuario.nome = nome;
        usuario.sobrenome = sobrenome;
        usuario.dataNascimento = dataNascimento;
        usuario.email = email;
        usuario.genero = genero; // Adiciona ou atualiza o gênero

        // Se a senha foi preenchida, atualiza a senha
        if (senha) {
            usuario.senha = senha;
        }

        // Armazena o usuário atualizado no Local Storage
        localStorage.setItem('usuario', JSON.stringify(usuario));

        // Exibe uma mensagem de sucesso
        alert('Perfil atualizado com sucesso!');
    });
});