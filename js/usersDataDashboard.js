function usersAccData() {
  let appointments = document.querySelector("#usersAccData");

  let historyData = JSON.parse(localStorage.getItem("history")) || [];

  let cancelhistoryData =
    JSON.parse(localStorage.getItem("cancelHistory")) || [];

  let recentHistory = JSON.parse(localStorage.getItem("recentHistory")) || [];

  let UsersData = JSON.parse(localStorage.getItem("UsersData"));

  let items = UsersData.map(function (client, index) {
    const name = client.Name;
    const reason_appointment = client.reason_appointment;
    const date_month = client.dateMonth;
    const date_time = client.time;
    const message = client.healthCondition;

    return `
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card rounded-0 py-4 px-3 rounded-2 position-relative border-0">
                <div class="card-body p-1">
                  <h6 class="card-title fw-semibold">${name}</h6>
                  <p class="footer_link text-muted fw-lighter">Booked for <br> <span class="text-dark">${date_month} - ${date_time}</span> </p>
                  <p class="footer_link text-muted fw-lighter d-flex align-items-center gap-2 mb-0 mt-2" 
        data-bs-toggle="modal" data-bs-target="#patientHistory-${index}"
        style="cursor: pointer"
        >Personal details 
            <span class="text-dark history_icons d-flex"><ion-icon name="arrow-forward-outline"></ion-icon></span>
        </p>
        
        <div class="modal fade" id="patientHistory-${index}" tabindex="-1" aria-labelledby="patientHistoryLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered border-0">
                <div class="modal-content border-0 rounded-1">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="m-0 text-muted">Name <br>  <h6 class="vio-green">${name}</h6></p>
                    <p class="m-0 text-muted">Email <br>  <h6 class="vio-green">miguelReyes@gmail.com</h6></p>
                    <p class="m-0 text-muted">Phone number <br>  <h6 class="vio-green">09567612014</h6></p>
                    <p class="m-0 text-muted">Reason for appointment <br>  <h6 class="vio-green">${reason_appointment}</h6></p>
                    <p class="m-0 text-muted">Appointment Date and Time <br>  <h6 class="vio-green">${date_month} - ${date_time}</h6></p>
                    <p class="m-0 text-muted">Health Condition Notes <br>  <h6 class="vio-green">${message}</h6></p>
                </div>
                </div>
            </div>
        </div>            
                  <div class="d-flex justify-content-between mt-4">
                    <button class="btn btn-main px-3 usersAccFinished text-light">Finish Visit</button>
                    <button class="btn btn-sub text-light cancelled" data-index='${index}'>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
        `;
  });

  appointments.innerHTML = items.join("");

  // Add event listeners to delete buttons

  let usersAccDelete = document.querySelectorAll(".cancelled");
  usersAccDelete.forEach(function (button, index) {
    button.addEventListener("click", function () {
      let UsersAcc = UsersData[index];
      cancelhistoryData.push(UsersAcc);
      recentHistory.push(UsersAcc);
      UsersData.splice(index, 1);
      localStorage.setItem("UsersData", JSON.stringify(UsersData));
      localStorage.setItem("cancelHistory", JSON.stringify(cancelhistoryData));
      localStorage.setItem("UsersHistory", JSON.stringify(recentHistory));
      usersAccData();
    });
  });

  let usersAccFinish = document.querySelectorAll(".usersAccFinished");
  usersAccFinish.forEach(function (button, index) {
    button.addEventListener("click", function () {
      let UsersAcc = UsersData[index];
      historyData.push(UsersAcc);
      recentHistory.push(UsersAcc);
      UsersData.splice(index, 1);
      localStorage.setItem("UsersData", JSON.stringify(UsersData));
      localStorage.setItem("history", JSON.stringify(historyData));
      localStorage.setItem("recentHistory", JSON.stringify(recentHistory));
      usersAccData();
    });
  });
}

usersAccData();
