const IMMAGINNI_DESTRA = [
  "assets/carta-right.png",
  "assets/forbici-right.png",
  "assets/sasso-right.png",
];

const IMMAGINNI_SINISTRA = [
  "assets/carta-left.png",
  "assets/forbici-left.png",
  "assets/sasso-left.png",
  "assets/rock-paper-scissors-2.png",
];

const SCELTA_MANO = document.getElementById("sceltaMano");

const IMMAGINE_GIOCATORE = document.getElementById("immagineGiocatore");

const IMMAGINE_PC = document.getElementById("immaginePc");

const PULSANTE_VAI = document.getElementById("vai");

const PULSANTE_RIGIOCA = document.getElementById("rigioca");

const MESSAGGIO_VITTORIA = document.getElementById("messaggioVittoria");

const PUNTEGGIO_GIOCATORE = document.getElementById("punteggioGiocatore");

const PUNTEGGIO_PC = document.getElementById("punteggioPc");

let sceltaGiocatore = undefined;

let sceltaPC;

let giocoFinito = false;

SCELTA_MANO.addEventListener("change", () => {
  if (SCELTA_MANO.value === "carta") {
    IMMAGINE_GIOCATORE.src = IMMAGINNI_SINISTRA[0];
    sceltaGiocatore = SCELTA_MANO.value;
  } else if (SCELTA_MANO.value === "forbici") {
    IMMAGINE_GIOCATORE.src = IMMAGINNI_SINISTRA[1];
    sceltaGiocatore = SCELTA_MANO.value;
  } else if (SCELTA_MANO.value === "sasso") {
    IMMAGINE_GIOCATORE.src = IMMAGINNI_SINISTRA[2];
    sceltaGiocatore = SCELTA_MANO.value;
  } else if (SCELTA_MANO.value === "nulla") {
    IMMAGINE_GIOCATORE.src = IMMAGINNI_SINISTRA[3];
    sceltaGiocatore = undefined;
  }
});

PULSANTE_VAI.addEventListener("click", () => {
  if (sceltaGiocatore !== undefined && giocoFinito === false) {
    let numeroCasuale = daUnoADue();
    IMMAGINE_PC.src = IMMAGINNI_DESTRA[numeroCasuale];
    sceltaPC = IMMAGINNI_DESTRA[numeroCasuale];
    if (
      (sceltaGiocatore === "carta" && sceltaPC.includes("sasso") === true) ||
      (sceltaGiocatore === "forbici" && sceltaPC.includes("carta") === true) ||
      (sceltaGiocatore === "sasso" && sceltaPC.includes("forbici") === true)
    ) {
      MESSAGGIO_VITTORIA.classList.remove("hidden");
      MESSAGGIO_VITTORIA.textContent = "VINCE IL GIOCATORE";
      giocoFinito = true;
      PULSANTE_RIGIOCA.classList.remove("hidden");
      PUNTEGGIO_GIOCATORE.textContent = testoAnumero(PUNTEGGIO_GIOCATORE.textContent);
    } else if (
      (sceltaGiocatore === "forbici" && sceltaPC.includes("sasso") === true) ||
      (sceltaGiocatore === "sasso" && sceltaPC.includes("carta") === true) ||
      (sceltaGiocatore === "carta" && sceltaPC.includes("forbici") === true)
    ) {
      MESSAGGIO_VITTORIA.classList.remove("hidden");
      MESSAGGIO_VITTORIA.textContent = "VINCE IL PC";
      giocoFinito = true;
      PULSANTE_RIGIOCA.classList.remove("hidden");
      PUNTEGGIO_PC.textContent = testoAnumero(PUNTEGGIO_PC.textContent);
    } else {
      MESSAGGIO_VITTORIA.classList.remove("hidden");
      MESSAGGIO_VITTORIA.textContent = "PAREGGIO";
      giocoFinito = true;
      PULSANTE_RIGIOCA.classList.remove("hidden");
    }
  }
});

PULSANTE_RIGIOCA.addEventListener("click", () => {
  IMMAGINE_PC.src = IMMAGINNI_SINISTRA[3];
  IMMAGINE_GIOCATORE.src = IMMAGINNI_SINISTRA[3];
  PULSANTE_RIGIOCA.classList.add("hidden");
  MESSAGGIO_VITTORIA.classList.add("hidden");
  SCELTA_MANO.value = "nulla";
  giocoFinito = false;
});

function daUnoADue() {
  let numeroCasuale = parseInt(Math.random() * 3);
  return numeroCasuale;
}

function testoAnumero(testo) {
  let numero = parseInt(testo);
  numero++
  return numero;
}