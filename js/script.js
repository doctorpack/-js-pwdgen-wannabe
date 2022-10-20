let richiestanome =prompt("qual'è il tuo nome?");
let richiestacognome = prompt("qual'è il tuo cognome?");
let richiestacolore = prompt("qualè il tuo colore preferito?");
document.getElementById("rispostanome").innerHTML = richiestanome;
document.getElementById("rispostacognome").innerHTML = richiestacognome;
document.getElementById("rispostacolore").innerHTML = richiestacolore;
document.getElementById ("somma").innerHTML = rispostanome + rispostacognome + richiestacolore + 22;