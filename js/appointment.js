function cards() {
  let appointments = document.querySelector("#client_list");

  let historyData = JSON.parse(localStorage.getItem("history")) || [];

  let data = JSON.parse(localStorage.getItem("clients"));

  let items = data.map(function (client, index) {
    const name = client.Name;
    const email = client.Email;
    const reason_appointment = client.reason_appointment;
    const date_month = client.dateMonth;
    const date_time = client.time;

    return `
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card rounded-0 py-4 px-3 rounded-2 position-relative border-0">
              <div class="card-body p-1">
              <div class="py-1 px-3 position-absolute top-0 start-0 vio-green-bg text-light rounded-2">${index}</div>
                <h6 class="card-title fw-semibold mt-3">${name}</h6>
                <p class="footer_link text-muted fw-lighter">Reason for appointment: <br> <span class="text-dark">${reason_appointment}</span> </p>
                <p class="footer_link text-muted fw-lighter">Booked for <br> <span class="text-dark">${date_month} - ${date_time}</span> </p>
                <div class="d-flex justify-content-between mt-5">
                  <button class="btn btn-main discarged">Discharge</button>
                  <button class="btn btn-sub text-light delete" data-index='${index}'>Cancel</button>
                </div>
              </div>
            </div>
          </div>
      `;
  });

  appointments.innerHTML = items.join("");

  // Add event listeners to delete buttons
  let deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      let index = event.target.getAttribute("data-index");
      data.splice(index, 1);
      localStorage.setItem("clients", JSON.stringify(data));
      cards();
    });
  });

  let dischargeButtons = document.querySelectorAll(".discarged");
  dischargeButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      let client = data[index];
      historyData.push(client);
      data.splice(index, 1);
      localStorage.setItem("clients", JSON.stringify(data));
      localStorage.setItem("history", JSON.stringify(historyData));
      cards();
    });
  });
}

cards();
