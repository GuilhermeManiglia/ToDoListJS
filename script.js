let botAdd = document.getElementsByClassName("botao-acrescentar")[0];
let lista = document.getElementsByClassName("tarefas-lista")[0];

function adicionarTexto() {
  let texto = document.getElementsByClassName("input-adicionar")[0].value;
  let novaLista = document.createElement("div");
  novaLista.className = "div-lista"; // Define a classe do contêiner
  novaLista.innerHTML = `
    <li class="lista-elemento">
      <p>${texto}</p>
      <div>
        <button class="botao-concluido-lista">Concluído</button>
        <button class="botao-remover-lista">Remover</button>
      </div>
    </li>`;

  lista.appendChild(novaLista);

  texto.value = "";

  // Vincula o evento ao botão criado dinamicamente
  let botaoConcluido = novaLista.querySelector(".botao-concluido-lista");
  botaoConcluido.addEventListener("click", (event) => {
    mudarFundo(event.target);
  });

  let botaoRemover = novaLista.querySelector(".botao-remover-lista");
  botaoRemover.addEventListener("click", (event) => {
    removerDiv(event.target);
  });
}

botAdd.addEventListener("click", () => {
  adicionarTexto();
});

function mudarFundo(botao) {
  // Encontra o contêiner pai mais próximo com a classe "div-lista"
  let elementoPai = botao.closest(".div-lista");
  if (elementoPai) {
    elementoPai.style.backgroundColor = "rgb(23, 131, 2)"; // Altera o fundo apenas do contêiner correspondente
  }
}

function removerDiv(remover) {
  let elementoPaiRemover = remover.closest(".div-lista");
  if (elementoPaiRemover) {
    elementoPaiRemover.style.display = "none";
  }
}
