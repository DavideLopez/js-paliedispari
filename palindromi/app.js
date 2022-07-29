console.log('palindroma')
    
function isPalindroma(parola) {
    parola = parola.toLowerCase() // fà in modo che ignori eventuali lettere maiuscole
    const parolaInvertita = invertiparola(parola)
  
   return parola === parolaInvertita
}

function invertiparola(testo) {
 const parolaInvertita = testo.split('').reverse().join('')

   return parolaInvertita
 }
 // chiedi all'utente una parola
const p = prompt('Inserisci una parola, e ti dirò se è palindroma')

console.log(isPalindroma(p))