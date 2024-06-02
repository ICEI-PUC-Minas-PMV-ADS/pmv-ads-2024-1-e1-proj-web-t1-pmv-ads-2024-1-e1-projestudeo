// Função para adicionar uma nova lembrete
function adicionarLembrete() {
  const listaLembrete = document.getElementById('listaLembrete'); // Seleciona a lista de lembretes

  const itemLembrete = document.createElement('div'); // Cria um novo elemento de lembrete
  itemLembrete.classList.add('itemLembrete'); // Adiciona a classe 'itemLembrete' ao elemento

  // Cria o container de texto da lembrete com um checkbox e um campo de texto
  const textoLembrete = document.createElement('div');
  textoLembrete.classList.add('texto');
  textoLembrete.innerHTML = `<input type="checkbox"><input type="text" placeholder="Nome do lembrete">`;

  // Cria o container para o ícone de lixeira, para deletar a lembrete
  const acaoDeletar = document.createElement('div');
  acaoDeletar.classList.add('acaoDeletar');
  acaoDeletar.innerHTML = `
      <i class='bx bx-trash-alt' onclick="deletarLembrete(this)"></i>
  `;

  // Adiciona os elementos de texto e container de lixeira ao item de lembrete
  itemLembrete.appendChild(textoLembrete);
  itemLembrete.appendChild(acaoDeletar);
  // Adiciona o item de lembrete à lista de lembretes
  listaLembrete.appendChild(itemLembrete);
}

// Função para deletar uma lembrete
function deletarLembrete(elemento) {
  const itemLembrete = elemento.closest('.itemLembrete'); // Seleciona o item de lembrete mais próximo
  itemLembrete.remove(); // Remove o item de lembrete da lista
}
