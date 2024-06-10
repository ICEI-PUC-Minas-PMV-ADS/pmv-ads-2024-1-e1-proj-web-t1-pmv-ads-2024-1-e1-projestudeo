# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projestudeo/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t1-pmv-ads-2024-1-e1-projestudeo/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>.

Os requisitos para realização dos testes de software são:

* Site publicado na internet;
* Navegador da internet: Chrome, Firefox ou Edge.
* Responsividade
 
Os testes funcionais a serem realizados na aplicação são descritos a seguir:

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Login</td>
  <td>
   <ul>
   <li>RF-02: A aplicação deve permitir que o usuário faça login em sua conta.</li>
   <li>RF-01:  A aplicação deve permitir que o usuário crie uma conta.</li>
   <li>RF-08:  A aplicação deverá possibilitar ao estudante redefinir sua senha.</li>
    
   </ul>
  </td>
  <td>Verificar se os links na página inicial estão levando corretamente para as páginas correspondentes.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Login</li>
    <li>Clicar nos links da página Login</li>
   </ol>
   </td>
  <td>Todos os links da página Login devem encaminhar os usuários para as páginas "Home", "Casdastro" e "Recuperar senha"</td>
  <td>Carolina</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o cadastro de usuários </td>
  <td>
   <ul>
    <li>RF-01: A aplicação deve permitir que o usuário crie uma conta.</li>

   </ul>
  </td>
  <td>Realizar o cadastro com nome, sobrenome, data de nascimento, e-mail e senha </td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Login.</li>
    <li>Clicar no botão de "Criar conta".</li>
    <li>Iniciar o cadastro com nome, sobrenome, data de nascimento, e-mail e senha.</li>
    <li>Concluir o processo clicando no botão "Criar conta".</li>
   </ol>
   </td>
  <td>Ao terminar de preencher os dados, a informação de "cadastro realizado" aparecerá e o usuário será redirecionado a tela de login.</td>
  <td>Alberto</td></td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03: Verificar a recuperação da senha</td>
  <td>
   <ul>
   
   <li>RF-08: A aplicação deverá possibilitar ao estudante redefinir sua senha.</li>
  
   </ul>
  </td>
  <td>Verificar se a senha está sendo alterada</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links de login</li>
    <li>Digitar e-mail e senha </li>
    <li>Clicar no botão de "entrar"</li>
    
   </ol>
   </td>
  <td>Após a alteração, o usuário deverá ser redirecionado para a página Login.</td>
  <td>Álvaro</td>
 </tr>
</table>

<table>
    <tr>
     <th>Caso de teste</th>
     <th>Requisitos associados</th>
     <th>Objetivo do teste</th>
     <th>Passos</th>
     <th>Critérios de êxito</th>
     <th>Responsável</th>
    </tr>
    <tr>
     <td>CT-04: Verificar o funcionamento dos links da página Home</td>
     <td>
      <ul>
       <li>RF-03:  A aplicação deve permitir que o usuário faça o cadastro de cursos e/ou disciplinas que está cursando em diferentes ‘cadernos’.</li>
       <li>RF-04:  A aplicação deve permitir que o usuário tenha controle do progresso de suas disciplinas.</li>
       <li>RF-05:  A aplicação deve oferecer ao usuário uma interface com calendário para se atentar aos prazos de entrega..</li>
       <li>RF-10: A aplicação deve permitir que o usuário crie lembretes.</li>
      </ul>
     </td>
     <td>Verificar se os links estão redirecionando para as páginas corretas "Cadastro de disciplinas" e "Progresso de disciplinas".</td>
     <td>
      <ol>
       <li>Acessar o navegador.</li>
       <li>Informar o endereço do site.</li>
       <li>Realizar o login.</li>
       <li>Clicar nos links da página de "Cadastro de disciplinas" e no card para a página "Progresso de disciplinas".</li>
       <li>Criar lembretes.</li>
      </ol>
      </td>
     <td>A página deve estar integrada com todas as outras disponíveis como link.</td>
     <td>Ryan</td>
    </tr>
   </table>

   <table>
    <tr>
     <th>Caso de teste</th>
     <th>Requisitos associados</th>
     <th>Objetivo do teste</th>
     <th>Passos</th>
     <th>Critérios de êxito</th>
     <th>Responsável</th>
    </tr>
    <tr>
     <td>CT-05: Verificar o funcionamento da página Cadastro de Disciplinas</td>
     <td>
      <ul>
       <li>RF-03:  A aplicação deve permitir que o usuário faça o cadastro de cursos e/ou disciplinas que está cursando em diferentes ‘cadernos’.</li>
       <li>RF-09: A aplicação deve permitir que o usuário customize os cadernos, mudando a cor, nome e etapas concluídas.</li>
      </ul>
     </td>
     <td>Verificar se as disciplinas e atividades estão sendo criadas e personalizadas.</td>
     <td>
      <ol>
       <li>Acessar o navegador.</li>
       <li>Informar o endereço do site.</li>
       <li>Fazer login.</li>
       <li>Na página home ir até o menu e acessar a página "Cadastro de disciplinas".</li>
      </ol>
      </td>
     <td>A página deve permiter o usuário a criar suas disciplinas e atividades e customizar a cor do seus cadernos.</td>
     <td>Carolina</td>
    </tr>
   </table>

   <table>
    <tr>
     <th>Caso de teste</th>
     <th>Requisitos associados</th>
     <th>Objetivo do teste</th>
     <th>Passos</th>
     <th>Critérios de êxito</th>
     <th>Responsável</th>
    </tr>
    <tr>
     <td>CT-06: Verificar a página de Progresso de Disciplina</td>
     <td>
      <ul>
        <li>RF-04:A aplicação deve permitir que o usuário tenha controle do progresso de suas disciplinas.</li>
        <li>RF-06:A aplicação deve oferecer ao usuário controle de tempo de estudo com base nos cursos e/ou disciplinas que está cursando.</li>
       <li>RF-09: A aplicação deve permitir que o usuário customize os cadernos, mudando a cor, nome e etapas concluídas.</li>
      </ul>
     </td>
     <td>Verificar a página de relatório.</td>
     <td>
      <ol>
       <li>Acessar o navegador.</li>
       <li>Informar o endereço do site.</li>
       <li>Relizar o login.</li>
       <li>Clicar no card da disciplina.</li>
      </ol>
      </td>
     <td>A página deve armazenar as informações de tempo e texto , permitir modificar a cor e nome do caderno e adicionar atividades.</td>
     <td>Alberto</td>
    </tr>
   </table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-07: Verificar página de perfil</td>
  <td>
   <ul>
    <li>RF-11:		A aplicação deve permitir que o tenha acesso ao seu perfil.</li>
   </ul>
  </td>
  <td>Verificar se todas as informações referentes aos dados do usuário estão sendo salvas.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link de perfil no canto superior direito.</li>
   </ol>
   </td>
  <td>Verificar se todas as informações dos usuários foram salvas.</td>
  <td>Gilson</td>
 </tr>
</table>


 

