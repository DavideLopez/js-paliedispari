console.log('pariedispari')

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function isEven(num) {
    return num % 2 === 0
}

function isOdd(num) {
    return num % 2 === 1 
}

const scelta = prompt('scegli pari o dispari').toLowerCase()
// console.log(scelta)

const numeroUtente = parseInt(prompt('scrivi un numero da 1 a 5'))
// console.log(numeroUtente)

const numeroPC = getRandomIntInclusive(1,5)
// console.log(numeroPC)

const somma = numeroPC + numeroUtente

console.log(somma,scelta)

if(
    (scelta === 'pari' && isEven(somma)) || 
    (scelta === 'dispari' && isOdd(somma)) 
){
console.log('hai vinto')
} else {
    console.log('hai perso')
}

