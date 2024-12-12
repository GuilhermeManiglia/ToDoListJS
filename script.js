let lista = document.getElementsByClassName("tarefas-lista")[0];
let listaCompleta = [];

function adicionar() {
  let textInput = document.getElementsByClassName("input-adicionar")[0].value;

  if (!textInput.trim()) {
    alert("Por favor, insira um texto válido.");
    return;
  }

  lista.innerHTML += `<li class="new-element-list">
                        <div class="novas-tarefas-total">
                            <p>${textInput}</p>
                            <div class="bot-divs-new">
                                <button class="botao-concluido-lista">+</button>
                                <button class="botao-remover-lista">-</button>
                            </div>
                        </div>
                      </li>`;

  listaCompleta.push(textInput);

  // Atualiza eventos dos botões de remover
  configurarBotoesRemover();
}

function configurarBotoesRemover() {
  // Seleciona todos os botões de remover
  const botoesRemover = document.querySelectorAll(".botao-remover-lista");

  // Adiciona evento de clique para cada botão
  botoesRemover.forEach((botao) => {
    botao.onclick = function () {
      const li = this.closest("li"); // Encontra o <li> mais próximo do botão
      if (li) {
        li.remove(); // Remove o <li>
        // Remove o texto do array listaCompleta
        const texto = li.querySelector("p").textContent;
        listaCompleta = listaCompleta.filter((item) => item !== texto);
        console.log(listaCompleta);
      }
    };
  });
}
