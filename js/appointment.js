function cards() {
  let appointments = document.querySelector("#client_list");

  let historyData = JSON.parse(localStorage.getItem("history")) || [];

  let cancelhistoryData =
    JSON.parse(localStorage.getItem("cancelHistory")) || [];

  let data = JSON.parse(localStorage.getItem("clients"));

  let items = data.map(function (client, index) {
    const name = client.Name;
    const reason_appointment = client.reason_appointment;
    const date_month = client.dateMonth;
    const date_time = client.time;
    const email = client.Email;
    const number = client.number;
    const message = client.healthCondition;

    return `
          <div class="col-12 col-md-6 col-lg-3">
            <div class="card rounded-0 py-4 px-3 rounded-2 position-relative border-0">
              <div class="card-body p-1">
                <h6 class="card-title fw-semibold">${name}</h6>
                <p class="footer_link text-muted fw-lighter">Booked for <br> <span class="text-dark">${date_month} - ${date_time}</span> </p>
                <p class="footer_link text-muted fw-lighter d-flex align-items-center gap-2 mb-0 mt-2" 
                data-bs-toggle="modal" data-bs-target="#non_Reg-${index}"
                style="cursor: pointer"
                >Personal details 
                    <span class="text-dark history_icons d-flex"><ion-icon name="arrow-forward-outline"></ion-icon></span>
                </p>
                
                <div class="modal fade" id="non_Reg-${index}" tabindex="-1" aria-labelledby="non_RegLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered border-0">
                        <div class="modal-content border-0 rounded-1">
                        <div class="modal-header border-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p class="m-0 text-muted">Name <br>  <h6 class="vio-green">${name}</h6></p>
                            <p class="m-0 text-muted">Email <br>  <h6 class="vio-green">${email}</h6></p>
                            <p class="m-0 text-muted">Phone number <br>  <h6 class="vio-green">${number}</h6></p>
                            <p class="m-0 text-muted">Reason for appointment <br>  <h6 class="vio-green">${reason_appointment}</h6></p>
                            <p class="m-0 text-muted">Appointment Date and Time <br>  <h6 class="vio-green">${date_month} - ${date_time}</h6></p>
                            <p class="m-0 text-muted">Health Condition Notes <br>  <h6 class="vio-green">${message}</h6></p>
                        </div>
                        </div>
                    </div>
                </div>          
              
                <div class="d-flex justify-content-between mt-4">
                  <button class="btn btn-main px-3 discarged text-light">Finish Visit</button>
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
  deleteButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      let client = data[index];
      cancelhistoryData.push(client);
      data.splice(index, 1);
      localStorage.setItem("clients", JSON.stringify(data));
      localStorage.setItem("cancelHistory", JSON.stringify(cancelhistoryData));
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

// DOM CLIENT HISTORY AND CANCEL HISTORY
function registered_users() {
  let registered_users = document.querySelector(".registered_users");
  let non_registered_users = document.querySelector(".non_registered_users");

  let registeredUsers = document.querySelector("#registered_users");
  let nonRegisteredUsers = document.querySelector("#non_registered_users");

  registered_users.style.display = "block";
  non_registered_users.style.display = "none";

  registeredUsers.classList.add("active_dashboard");
  nonRegisteredUsers.classList.remove("active_dashboard");
}

function nonRegisteredUsers() {
  let registered_users = document.querySelector(".registered_users");
  let non_registered_users = document.querySelector(".non_registered_users");

  let registeredUsers = document.querySelector("#registered_users");
  let nonRegisteredUsers = document.querySelector("#non_registered_users");

  registered_users.style.display = "none";
  non_registered_users.style.display = "block";

  registeredUsers.classList.remove("active_dashboard");
  nonRegisteredUsers.classList.add("active_dashboard");
}
