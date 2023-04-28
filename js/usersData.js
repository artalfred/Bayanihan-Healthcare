function usersDataAccount() {
  let usersDataAcc = document.querySelector("#usersDataAcc");

  let UsersHistoryData = JSON.parse(localStorage.getItem("UsersHistory")) || [];

  let UsersData = JSON.parse(localStorage.getItem("UsersData"));

  let items = UsersData.map(function (users, index) {
    const name = users.Name;
    const reason_appointment = users.reason_appointment;
    const date_month = users.dateMonth;
    const date_time = users.time;
    const message = users.healthCondition;
    const city = users.city;
    const email = users.email;
    const number = users.number;

    return `
    <div class="col-12 col-md-6 col-lg-3">
    <div class="card rounded-0 py-4 px-3 rounded-2 position-relative border-0">
      <div class="card-body p-1">
        <p class="footer_link text-muted fw-lighter">Booked for <br> <span class="text-dark">${date_month} - ${date_time}</span> </p>
        <div class="d-flex align-items-center justify-content-between">
        
        <p class="footer_link text-muted fw-lighter d-flex align-items-center gap-2 mb-0 m-0" 
            data-bs-toggle="modal" data-bs-target="#clientInformation-${index}"
            style="cursor: pointer"
            >Personal details 
                <span class="text-dark history_icons d-flex"><ion-icon name="arrow-forward-outline"></ion-icon></span>
            </p>
                    
            <div class="modal fade" id="clientInformation-${index}" tabindex="-1" aria-labelledby="clientInformationLabel" aria-hidden="true">
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
            </div>
            <button class="btn btn-sub text-light delete" data-index='${index}'>Cancel</button>
        </div>
        
      </div>
    </div>
  </div>
          `;
  });

  usersDataAcc.innerHTML = items.join("");

  let deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      let client = UsersData[index];
      UsersHistoryData.push(client);
      UsersData.splice(index, 1);
      localStorage.setItem("UsersData", JSON.stringify(UsersData));
      localStorage.setItem("UsersHistory", JSON.stringify(UsersHistoryData));
      usersDataAccount();
    });
  });
}

usersDataAccount();
