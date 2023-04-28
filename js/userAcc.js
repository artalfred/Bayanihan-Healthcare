// FOOTER
fetch("./footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
  });

let UsersAppointmentForm = document.querySelector("#UsersAppointmentForm");

let usersData = JSON.parse(localStorage.getItem("UsersData"));

let usersAppointment = usersData ? usersData : [];

UsersAppointmentForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission

  let UsersName = document.querySelector("#usersFullName").value;
  let UsersDateMonth = document.querySelector("#UsersDate").value;
  let UsersTime = document.querySelector("#UsersTime").value;
  let UsersReason_appointment = document.querySelector(
    "#UsersReasonForAppointment"
  ).value;
  let UsersCity = document.querySelector("#Users_city_hospital").value;
  let UsersMessage = document.querySelector("#UsersMessage").value;

  let dateValue = UsersDateMonth;
  let formattedDate = new Date(dateValue).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  let timeValue = UsersTime;
  let formattedTime = new Date("1970-01-01T" + timeValue).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }
  );

  usersAppointment.push({
    Name: UsersName,
    dateMonth: formattedDate,
    time: formattedTime,
    reason_appointment: UsersReason_appointment,
    city: UsersCity,
    healthCondition: UsersMessage,
  });

  localStorage.setItem("UsersData", JSON.stringify(usersAppointment));

  window.location.href = "./usersAcc.html";
});
