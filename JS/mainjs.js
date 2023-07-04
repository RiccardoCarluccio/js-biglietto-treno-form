const btnConfirm = document.querySelector(".btn-confirm");

const currentYear = new Date().getFullYear();

const tripLengthInput = document.getElementById("trip-length");
const yearOfBirthInput = document.getElementById("year-of-birth");


btnConfirm.addEventListener("click", function getData() {
  const tripLength = tripLengthInput.value;
  const yearOfBirth = yearOfBirthInput.value;

  const ticketPrice = 0.21 * parseInt(tripLength);

  let discount = 1;
  const userAge = currentYear - parseInt(yearOfBirth);

  if (userAge < 18) {
    discount = 0.8;
  } else if (userAge > 65) {
    discount = 0.6;
  }

  const finalPrice = Math.round((ticketPrice * discount) * 100) / 100;

  document.getElementById('testAge').innerHTML = `You are ${userAge} years old`;
  document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${finalPrice}€`;
})