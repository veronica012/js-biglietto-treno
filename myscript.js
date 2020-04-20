//chiedere quanti km si devono percorrere
var km_da_percorrere = prompt('Qanti km vuoi percorrere?');
console.log('questi sono i km da percorrere ' + km_da_percorrere);
//chiedere l'età
var eta_utente = prompt('Quanti anni hai?')
console.log(eta_utente);
//calcolo del costo del biglietto: 0.21 euro/km
var costo_biglietto = ( 0.21 * km_da_percorrere);
console.log(costo_biglietto);
//sconto 20%
var sconto_20 = ( (costo_biglietto * 20) / 100);
//sconto 40%
var sconto_40 = ((costo_biglietto * 40) / 100);
//costo del biglietto se l' età è < 18
var costo_biglietto_meno_venti = ( costo_biglietto - sconto_20);
//costo del biglietto se l' età > 65 sconto 40%
var costo_biglietto_meno_quaranta = ( costo_biglietto - sconto_40);

if(eta_utente >= 18 && eta_utente < 65){
    console.log (costo_biglietto);
} else if (eta_utente < 18){
   console.log(costo_biglietto_meno_venti);
} else {
    console.log(costo_biglietto_meno_quaranta);
}
