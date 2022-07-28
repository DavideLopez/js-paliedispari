console.log('adasfsd')

function random() {
    Math.floor(Math.random() * 5) + 1
}

do {
    var giocatore = prompt("inserisci un num pari o dispari")
    var numero = parseInt(prompt("inserisci un numero"))   
}  while(isNaN(numero) || numero > 5 || numero <= 0)
numeroComputer = random()

function isEven(num1, num2) {
    var checkEven = num1 + num2
if((num1 + num2) % 2 == 0) {
    return 1
}

}

var isEvenResult;
var isEvenResult
if(isEven(giocatore, numeroComputer) == 1) {
    isEvenResult = "pari"

} else {
    isEvenResult = "dispari"
}

result = utente.localecompare(isEvenResult)
if (result == 0) {
    document.write("hai vinto!!!")
} else {
    document.write("hai perso....")
}