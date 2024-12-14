let botAdd = document.getElementsByClassName("botao-acrescentar")[0];
let lista = document.getElementsByClassName("tarefas-lista")[0];

function addText() {
  let textoInput = document.getElementsByClassName("input-adicionar")[0];
  let texto = textoInput.value;
  let novoElemento = document.createElement("li");
  novoElemento.className = "div-lista";
  novoElemento.innerHTML = `<p>${texto}</p>
  <div>
  <button class="botao-concluido-lista" onclick="bg(this)">Concluido</button>
  <button class="botao-remover-lista" onclick="remove(this)">Remover</button>
  </div>`;

  if (texto == "") {
    alert("Digite um texto válido");
  } else {
    lista.appendChild(novoElemento);
    textoInput.value = "";
  }
}

botAdd.addEventListener("click", function () {
  addText();
});

function bg(a) {
  let li = a.closest("li");
  li.style.backgroundColor = "#35b900";
}

function remove(b) {
  let li = b.closest("li");
  lista.removeChild(li);
}
