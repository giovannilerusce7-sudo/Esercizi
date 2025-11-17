function calcola(operazione) {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let risultato;
  switch (operazione) {
    case "somma":
      risultato = n1 + n2;
      break;
    case "moltiplicazione":
      risultato = n1 * n2;
      break;
    case "divisione":
      risultato = n1 / n2;
      break;
    case "sottrazione":
      risultato = n1 - n2;
      break;
  }
  document.getElementById("risultato").textContent = "Risultato: " + risultato;
}
