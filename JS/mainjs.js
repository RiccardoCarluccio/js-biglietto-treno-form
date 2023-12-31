const btnConfirm = document.querySelector(".btn-confirm");
const btnHide = document.querySelector(".btn-hide");

const currentYear = new Date().getFullYear();

const tripLengthInput = document.getElementById("trip-length");
const yearOfBirthInput = document.getElementById("year-of-birth");
const ageGroup = document.getElementById("age-select");
const ticket = document.getElementById("finalData");


btnConfirm.addEventListener("click", function getData() {
  ticket.classList.replace("d-none", "d-block");

  const tripLength = tripLengthInput.value;
  const yearOfBirth = yearOfBirthInput.value;

  const ticketPrice = 0.21 * parseInt(tripLength);

  let discount = 1;
  const userAge = currentYear - parseInt(yearOfBirth);
  const userAgeAlt = ageGroup.value;

  if (userAge < 18 || userAgeAlt === 'underage') {
    discount = 0.8;
  } else if (userAge > 65 || userAgeAlt === 'overage') {
    discount = 0.6;
  }

  const finalPrice = Math.round((ticketPrice * discount) * 100) / 100;

  document.getElementById('testAge').innerHTML = `You are ${userAge} years old`;
  document.getElementById('priceResult').innerHTML = `Your ${tripLength}km trip costs ${finalPrice}€`;
})

// btnHide.addEventListener("click", function hide() {
//   ticket.classList.replace("d-block", "d-none");    //non funziona
//   // ticket.classList.add("d-none");   //non funziona
// })