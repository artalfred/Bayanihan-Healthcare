// MENU
function myFunction(x) {
  x.classList.toggle("change");
}

// APPOINTMENT
function date() {
  const date_time = document.querySelector("#date_time");
  const form = document.querySelector("#form");
  const appointment_two = document.querySelector("#appointment_two");

  date_time.style.display = "none";
  form.style.display = "block";

  appointment_two.classList.add("active");
  appointment_two.classList.add("text-light");
}

function backtodate() {
  const date_time = document.querySelector("#date_time");
  const form = document.querySelector("#form");
  const appointment_two = document.querySelector("#appointment_two");

  date_time.style.display = "block";
  form.style.display = "none";

  appointment_two.classList.remove("active");
  appointment_two.classList.remove("text-light");
}

function confirmed() {
  const date_time = document.querySelector("#date_time");
  const form = document.querySelector("#form");
  const appointment_success = document.querySelector("#appointment_success");
  const appointment_three = document.querySelector("#appointment_three");
  const check = document.querySelector(".check");
  const three = document.querySelector(".three");

  date_time.style.display = "none";
  form.style.display = "none";
  appointment_success.style.display = "block";
  check.style.display = "block";
  three.style.display = "none";

  appointment_three.classList.add("active");
  appointment_three.classList.add("text-light");
}

function makeAnotherAppointment() {
  const date_time = document.querySelector("#date_time");
  const form = document.querySelector("#form");
  const appointment_success = document.querySelector("#appointment_success");
  const appointment_three = document.querySelector("#appointment_three");
  const check = document.querySelector(".check");
  const three = document.querySelector(".three");

  let date = document.querySelector("#date");
  let time = document.querySelector("#time");
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let number = document.querySelector("#number");
  let reason_appointment = document.querySelector("#reason_appointment");
  let city = document.querySelector("#city");
  let message = document.querySelector("#message");

  date_time.style.display = "block";
  form.style.display = "none";
  appointment_success.style.display = "none";
  check.style.display = "none";
  three.style.display = "block";

  date.value = "";
  time.value = "";
  name.value = "";
  email.value = "";
  number.value = "";
  reason_appointment.value = "";
  city.value = "";
  message.value = "";

  appointment_three.classList.remove("active");
  appointment_three.classList.remove("text-light");

  appointment_two.classList.remove("active");
  appointment_two.classList.remove("text-light");
}
