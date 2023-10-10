// PER FAR FUNZIONARE QUESTO ESERCIZIO COMMENTA APP.JS ED ABILITA IL LINK AL MASTER.JS


// ESERCIZIO DI VERIFICA DI UN' EMAIL ALL' INTENRO DI UN ARRAY

let emailsArray = ['lorenzo.delre12@gmail.com', 'fizzassassin@gmail.com', 'buzmelee@gmail.com', 'fizzbuzz@gmail.com'];

let userEmailPrompt = prompt('Inserisci la tua email');

const lunghezzaArray = emailsArray.length;

let validation = false;

for (let i = 0; i < lunghezzaArray; i++) {
	const  emailCorrente = emailsArray[i];
	console.log(i, emailCorrente);
    if (userEmailPrompt === emailCorrente) {
        validation = true;
    }
}

if (validation === true) {
    alert('benvenuto nel nostro sito');
    
}

else {
    alert('email non valida / ricarica la pagina');
}
