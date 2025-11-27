// Array di partenza
let playlist = ["Heat", "Sunrise", "Echo"];

console.log("Stato iniziale:", playlist);
// Output: Stato iniziale: [ 'Heat', 'Sunrise', 'Echo' ]

// --- 1. Aggiungi due brani insieme in fondo ---
// Usiamo push() per aggiungere elementi alla fine dell'array.
playlist.push("Starlight", "Ocean Drive");

console.log("Dopo l'aggiunta di due brani:", playlist);
// Output: Dopo l'aggiunta di due brani: [ 'Heat', 'Sunrise', 'Echo', 'Starlight', 'Ocean Drive' ]


// --- 2. Sposta il primo brano in ultima posizione (rimuovilo e reinseriscilo) ---
// Usiamo shift() per rimuovere il primo elemento dall'inizio e catturarlo in una variabile.
const primoBrano = playlist.shift();

// Usiamo push() per aggiungere il brano precedentemente rimosso alla fine dell'array.
playlist.push(primoBrano);

console.log("Dopo lo spostamento del primo brano in fondo:", playlist);
// Output: Dopo lo spostamento del primo brano in fondo: [ 'Sunrise', 'Echo', 'Starlight', 'Ocean Drive', 'Heat' ]


// --- 3. Estrai una copia dei brani centrali (escluso primo e ultimo) senza modificare l'array originale ---
// Usiamo slice() per creare una copia superficiale. 
// L'indice 1 seleziona il secondo elemento (escluso il primo).
// L'indice -1 (o l'omissione del secondo parametro se si va fino alla fine) seleziona fino all'ultimo escluso.

// Nota: l'array playlist è attualmente: [ 'Sunrise', 'Echo', 'Starlight', 'Ocean Drive', 'Heat' ]
const braniCentrali = playlist.slice(1, -1);

console.log("Copia dei brani centrali (senza primo/ultimo):", braniCentrali);
// Output: Copia dei brani centrali (senza primo/ultimo): [ 'Echo', 'Starlight', 'Ocean Drive' ]

console.log("Stato finale della playlist originale (intatto):", playlist);
// Output: Stato finale della playlist originale (intatto): [ 'Sunrise', 'Echo', 'Starlight', 'Ocean Drive', 'Heat' ]
