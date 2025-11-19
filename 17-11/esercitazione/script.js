// ========================================
// GENERATORE DI SCHEDE UTENTE
// ========================================

// Array globale per salvare tutti gli utenti
let utenti = [];

// ========================================
// 1. FUNZIONE: creaUtente (con default parameter)
// ========================================
function creaUtente(nome, eta, professione = "non specificata") {
  console.log("📝 Creazione nuovo utente...");

  // Classificazione con SWITCH
  let categoria;

  switch (professione.toLowerCase()) {
    case "studente":
      categoria = "studente";
      break;
    case "developer":
    case "programmatore":
    case "sviluppatore":
      categoria = "developer";
      break;
    case "designer":
    case "grafico":
      categoria = "designer";
      break;
    default:
      categoria = "altro";
  }

  // Ritorna l'oggetto utente
  return {
    nome: nome,
    eta: eta,
    professione: professione,
    categoria: categoria,
  };
}

// ========================================
// 2. ARROW FUNCTION: generaMessaggio
// ========================================
const generaMessaggio = (utente) => {
  // Template literals per creare il messaggio
  return `${utente.nome} ha ${utente.eta} anni ed è classificato come ${utente.categoria}`;
};

// ========================================
// 3. FUNZIONE: mostraUtenti
// ========================================
function mostraUtenti() {
  console.log("🎨 Aggiornamento lista utenti...");

  // Seleziona il contenitore
  const lista = document.getElementById("lista");

  // Svuota il contenitore
  lista.innerHTML = "";

  // Verifica se l'array è vuoto (truthy/falsy)
  if (!utenti.length) {
    lista.innerHTML =
      '<div class="empty-state">Nessun utente presente. Aggiungi il primo utente!</div>';
    return;
  }

  // Ciclo for...of per iterare sull'array
  for (const utente of utenti) {
    // Genera messaggio per l'utente
    const messaggio = generaMessaggio(utente);

    // Crea HTML con template literals
    const userHTML = `
            <div class="user-card">
                <h3>👤 ${utente.nome}</h3>
                <p><strong>Età:</strong> ${utente.eta} anni</p>
                <p><strong>Professione:</strong> ${utente.professione}</p>
                <p><strong>Messaggio:</strong> ${messaggio}</p>
                <span class="categoria ${
                  utente.categoria
                }">${utente.categoria.toUpperCase()}</span>
            </div>
        `;

    // Aggiungi al contenitore
    lista.innerHTML += userHTML;
  }
}

// ========================================
// 4. FUNZIONE: debugUtenti
// ========================================
function debugUtenti() {
  console.log("🐛 DEBUG: Inizio analisi utenti...");

  // Usa console.table per mostrare l'intero array
  console.table(utenti);

  // Ciclo for...in per analizzare le proprietà di ogni utente
  for (const index in utenti) {
    console.log(`--- Utente #${parseInt(index) + 1} ---`);
    const utente = utenti[index];

    for (const proprieta in utente) {
      console.log(`${proprieta}: ${utente[proprieta]}`);
    }
  }

  console.log("✅ DEBUG completato!");
}

// ========================================
// 5. FUNZIONE: aggiungiUtente (principale)
// ========================================
function aggiungiUtente() {
  console.log("🚀 Tentativo di aggiungere un nuovo utente...");

  // Ottieni i valori dagli input
  const inputNome = document.getElementById("nome");
  const inputEta = document.getElementById("eta");
  const inputProfessione = document.getElementById("professione");

  const nome = inputNome.value.trim();
  const eta = parseInt(inputEta.value);
  const professione = inputProfessione.value.trim();

  // VALIDAZIONE con IF e operatori logici

  // Verifica nome (truthy/falsy)
  if (!nome) {
    console.error("❌ ERRORE: Nome mancante!");
    alert("Per favore, inserisci il nome!");
    return;
  }

  // Verifica età (operatori logici e validazione)
  if (!eta || eta <= 0 || isNaN(eta)) {
    console.warn("⚠️ ATTENZIONE: Età non valida");
    alert("Per favore, inserisci un'età valida!");
    return;
  }

  // Se la validazione è OK, prosegui
  console.log("✅ Validazione superata!");

  // Dimostrazione SCOPE - variabile locale
  let messaggio = "Utente aggiunto!";
  console.log(`📢 ${messaggio}`); // Funziona qui dentro

  // Crea l'oggetto utente
  const nuovoUtente = creaUtente(nome, eta, professione);

  // Aggiungi all'array
  utenti.push(nuovoUtente);

  // Log di conferma
  console.log("✅ Utente aggiunto con successo:", nuovoUtente);

  // Aggiorna la visualizzazione
  mostraUtenti();

  // Debug degli utenti
  debugUtenti();

  // Pulisci i campi input
  inputNome.value = "";
  inputEta.value = "";
  inputProfessione.value = "";

  // Mostra alert di conferma
  alert(`${messaggio}\n${generaMessaggio(nuovoUtente)}`);
}

// Prova a loggare messaggio fuori dalla funzione (genererà errore se decommentato)
// console.log(messaggio); // ReferenceError: messaggio is not defined

// ========================================
// 6. ARROW FUNCTION: filtraMaggiorenni (EXTRA)
// ========================================
const filtraMaggiorenni = () => {
  console.log("Filtro maggiorenni attivato...");

  // Filtra utenti con età >= 18
  const maggiorenni = utenti.filter((utente) => utente.eta >= 18);

  // Verifica se ci sono maggiorenni
  if (maggiorenni.length === 0) {
    console.warn("Nessun maggiorenne trovato!");
    alert("Non ci sono utenti maggiorenni nella lista.");
    return;
  }

  console.log(`Trovati ${maggiorenni.length} maggiorenni`);
  console.table(maggiorenni);

  // Mostra solo i maggiorenni
  mostraFiltro(maggiorenni);
};

// ========================================
// 7. FUNZIONE: mostraFiltro (per visualizzare lista filtrata)
// ========================================
function mostraFiltro(listaFiltrata) {
  console.log("Visualizzazione lista filtrata...");

  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  // Aggiungi intestazione
  lista.innerHTML =
    '<h3 style="color: #f5576c; margin-bottom: 15px;">🔞 Solo Maggiorenni</h3>';

  // Ciclo for...of sulla lista filtrata
  for (const utente of listaFiltrata) {
    const messaggio = generaMessaggio(utente);

    const userHTML = `
            <div class="user-card">
                <h3> ${utente.nome}</h3>
                <p><strong>Età:</strong> ${utente.eta} anni</p>
                <p><strong>Professione:</strong> ${utente.professione}</p>
                <p><strong>Messaggio:</strong> ${messaggio}</p>
                <span class="categoria ${
                  utente.categoria
                }">${utente.categoria.toUpperCase()}</span>
            </div>
        `;

    lista.innerHTML += userHTML;
  }

  // Aggiungi bottone per tornare alla lista completa
  lista.innerHTML += `
        <button onclick="mostraUtenti()" style="margin-top: 15px; background: #667eea; color: white; padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer;">
             Mostra tutti gli utenti
        </button>
    `;
}

// ========================================
// EVENT LISTENERS
// ========================================

// Collegamento bottone "Aggiungi utente"
document
  .getElementById("btnAggiungi")
  .addEventListener("click", aggiungiUtente);

// Collegamento bottone "Filtra maggiorenni"
document
  .getElementById("btnFiltra")
  .addEventListener("click", filtraMaggiorenni);

// Possibilità di premere Enter nell'input professione per aggiungere
document.getElementById("professione").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    aggiungiUtente();
  }
});

// ========================================
// INIZIALIZZAZIONE
// ========================================

console.log(" App inizializzata correttamente!");
console.log(" Stato iniziale array utenti:", utenti);

// Mostra stato vuoto iniziale
mostraUtenti();
