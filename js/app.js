// PER FAR FUNZIONARE QUESTO ESERCIZIO COMMENTA IL MASTER.JS ED ABILITA IL LINK AD APP.JS

// ESERCIZIO: GIOCO DEI DADI


let punteggioUser = prompt ('inserisci un numero da 1 a 6');
punteggioUser = parseInt(punteggioUser);

let punteggioBot = Math.floor(Math.random() * 6) + 1;
// Math.random() * (max - min) + min; ESTENDED VERSION

if (punteggioUser > punteggioBot) {
    alert('Booleaner, hai vinto!!!');
  }else if (punteggioUser === punteggioBot) {
    alert('Pareggio tenta nuovamente');
  }else {
    alert('Hai perso :(');
  }
