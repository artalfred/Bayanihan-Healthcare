// MENU
function myFunction(x) {
  x.classList.toggle("change");
}

const date_time = document.querySelector("#date_time");
const form = document.querySelector("#form");
const appointment_success = document.querySelector("#appointment_success");
const check = document.querySelector(".check");
const three = document.querySelector(".three");
const appointment_two = document.querySelector("#appointment_two");

let dateMonth = document.querySelector("#date");
let time = document.querySelector("#time");
let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let reason_appointment = document.querySelector("#reasonForAppointment");
let city = document.querySelector("#city_hospital");
let message = document.querySelector("#message");

const appointmentForm = document.querySelector("#appointmentForm");

let clientsData = JSON.parse(localStorage.getItem("clients"));

let appointment = clientsData ? clientsData : [];

appointmentForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission

  let name = document.querySelector("#fullName").value;
  let email = document.querySelector("#email").value;
  let dateMonth = document.querySelector("#date").value;
  let time = document.querySelector("#time").value;
  let number = document.querySelector("#number").value;
  let reason_appointment = document.querySelector(
    "#reasonForAppointment"
  ).value;
  let city = document.querySelector("#city_hospital").value;

  let dateValue = dateMonth;
  let formattedDate = new Date(dateValue).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  let timeValue = time;
  let formattedTime = new Date("1970-01-01T" + timeValue).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }
  );

  appointment.push({
    Name: name,
    Email: email,
    number: number,
    dateMonth: formattedDate,
    time: formattedTime,
    reason_appointment: reason_appointment,
    city: city,
  });

  localStorage.setItem("clients", JSON.stringify(appointment));

  window.location.href = "./successBooking.html";
});

// APPOINTMENT

function confirmed() {
  const dates = document.querySelector("#date").value;
  const time = document.querySelector("#time").value;
  const fullName = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const number = document.querySelector("#number").value;

  appointment.push({
    Name: fullName,
    email: email,
    phoneNumber: number,
    date: dates,
    time: time,
  });
}