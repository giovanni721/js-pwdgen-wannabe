var nome = prompt("Qual'è il tuo nome?")
var cognome = prompt("Qual'è il tuo cognome?")
var colore = prompt("Qual'è il tuo colore preferito?")
var passgen = nome + cognome + colore + 19
console.log(passgen);
document.getElementById('generator').innerHTML = passgen
document.getElementById('sentence').setAttribute('class', 'visible')
