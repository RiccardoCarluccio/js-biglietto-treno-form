const tripLength = prompt('How many kilometres do you want to travel?');
const yearOfBirth = prompt('In what year were you born?');

const currentYear = new Date().getFullYear();
const userAge = currentYear - parseInt(yearOfBirth);

document.getElementById('testAge').innerHTML = `You are ${userAge} years old`;

let ticketPrice = 0.21 * parseInt(tripLength);

// if (userAge < 18) {
//   const finalPrice = Math.round((ticketPrice *= 0.8) * 100) / 100;
//   document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${finalPrice}€`;
// } else if (userAge > 65) {
//   const finalPrice = Math.round((ticketPrice *= 0.6) * 100) / 100;
//   document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${finalPrice}€`;
// } else {
//   const finalPrice = Math.round(ticketPrice * 100) / 100;
//   document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${ticketPrice}€`;
// }

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