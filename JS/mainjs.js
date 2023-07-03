const btnConfirm = document.querySelector('btn.confirm');

btnConfirm.addEventListener("Click", function getData() {
  const tripLength = document.getElementById("trip-length").value;
  const yearOfBirth = document.getElementById("year-of-birth").value;
})
//da inserire nella funzione stessa i richiami delle variabili

const currentYear = new Date().getFullYear();
const userAge = currentYear - parseInt(yearOfBirth);

document.getElementById('testAge').innerHTML = `You are ${userAge} years old`;

let ticketPrice = 0.21 * parseInt(tripLength);

let discount = 1;

if (userAge < 18) {
  discount = 0.8;
} else if (userAge > 65) {
  discount = 0.6;
}

const finalPrice = Math.round((ticketPrice *= discount) * 100) / 100;
//alternativa
//const finalPrice = (ticketPrice *= discount).toFixed(2);
//il parseInt che wrappa tutto, non funziona. Da capire poi perchè

document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${finalPrice}€`;