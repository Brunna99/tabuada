const botao = document.getElementById("button");

botao.addEventListener("click", function () {
  const numero = document.getElementById("numero").value;
  const resultado = document.getElementById("resultado");
  resultado.classList.remove("inativo");

  const tabela = document.createElement("table");
  tabela.classList.add("tabela");
  const cabecalho = document.createElement("thead");
  const tituloCabecalho = document.createElement("tr");
  tituloCabecalho.innerText = "Resultado";
  cabecalho.appendChild(tituloCabecalho);

  const corpo = document.createElement("tbody");

  tabela.appendChild(cabecalho);
  tabela.appendChild(corpo);

  resultado.appendChild(tabela);

  for (let i = numero; i <= numero; i++) {
    for (let y = 1; y <= 10; y++) {
      const linha = document.createElement("tr");
      linha.innerText = i + " * " + y + " = " + i * y;
      corpo.appendChild(linha);
    }
  }
});

function limparAoClicar() {
  tabela.remove();
}
