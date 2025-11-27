
const inputAttivita = document.querySelector("#nuovaAttivita");
const bottoneAggiungi = document.querySelector("#bottoneAggiungi");
const listaAttivita = document.querySelector(".lista");
const messaggioVuoto = document.querySelector("#messaggio"); 
const bottoneSvuota = document.querySelector("#bottoneSvuota"); 

function aggiornaMessaggio() {
  const numeroLi = document.querySelectorAll("li").length;
  if (numeroLi === 0) {
    messaggioVuoto.textContent = "Nessuna attività inserita";
  } else {
    messaggioVuoto.textContent = "";
  }
}


function aggiungiAttivita() {
  const testoAttivita = inputAttivita.value.trim();

  if (testoAttivita !== "") {
    const nuovoLi = document.createElement("li");
    nuovoLi.textContent = testoAttivita;

    // --- STEP 3: Aggiungere un pulsante "Rimuovi" ---
    const bottoneRimuovi = document.createElement("button");
    bottoneRimuovi.textContent = "X";
    bottoneRimuovi.classList.add("bottone-rimuovi");

    bottoneRimuovi.addEventListener("click", function (event) {
      event.stopPropagation();
      nuovoLi.remove();
      aggiornaMessaggio(); /
    });

    nuovoLi.appendChild(bottoneRimuovi);


    nuovoLi.addEventListener("click", function (event) {
      if (event.target !== bottoneRimuovi) {
        nuovoLi.classList.toggle("completata");
      }
    });


    nuovoLi.addEventListener("dblclick", function () {
      nuovoLi.classList.toggle("evidenziata");
    });

    listaAttivita.appendChild(nuovoLi);
    inputAttivita.value = "";
    inputAttivita.focus();
    aggiornaMessaggio(); 
  }
}


bottoneAggiungi.addEventListener("click", aggiungiAttivita);


inputAttivita.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    aggiungiAttivita();
  }
});


bottoneSvuota.addEventListener("click", function () {
  listaAttivita.innerHTML = ""; // Cancella tutto il contenuto interno di <ul>
  aggiornaMessaggio(); // Aggiorna il messaggio
});

aggiornaMessaggio();
