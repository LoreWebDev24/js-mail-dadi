
// ESERCIZIO DI VERIFICA DI UN' EMAIL ALL' INTENRO DI UN ARRAY

let emailsArray = ['lorenzo.delre12@gmail.com', 'fizzassassin@gmail.com', 'buzmelee@gmail.com', 'fizzbuzz@gmail.com']

let userEmailPrompt = prompt('Inserisci la tua email')

const lunghezzaArray = emailsArray.length

for (let i = 0; i < lunghezzaArray; i++) {
	const  emailCorrente = emailsArray[i]
	console.log(i, emailCorrente)

    if (userEmailPrompt != emailsArray[i]) {
        alert('email non valida / ricarica la pagina')
    }

    else {
        alert('benvenuto nel nostro sito')
    }
}


// ESERCIZIO: GIOCO DEI DADI
