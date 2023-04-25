function cancelHistory() {
  let clientListHistory = document.querySelector("#cancelHistoryData");

  let history = JSON.parse(localStorage.getItem("cancelHistory"));

  let items = history.map(function (client, index) {
    const name = client.Name;
    const email = client.Email;
    const number = client.number;
    const reason_appointment = client.reason_appointment;
    const date_month = client.dateMonth;
    const date_time = client.time;
    const message = client.healthCondition;

    return `
              <div class="col-12 col-md-6 col-lg-3">
                <div class="card rounded-0 py-3 px-3 rounded-2 border-0">
                  <div class="card-body p-1">
                    <h6      class="card-title fw-semibold">${name}</h6>
                    <p class="footer_link text-muted fw-lighter mb-0">Reason for cancellation: <br> <span class="vio-green">No-show</span></p>
                    <p class="footer_link text-muted fw-lighter d-flex align-items-center gap-2 mb-0 mt-2" 
                    data-bs-toggle="modal" data-bs-target="#cancelHistory-${index}"
                    style="cursor: pointer"
                    >Personal details 
                        <span class="text-dark history_icons d-flex"><ion-icon name="arrow-forward-outline"></ion-icon></span>
                    </p>
                    
                    <div class="modal fade" id="cancelHistory-${index}" tabindex="-1" aria-labelledby="cancelHistoryLabel" aria-hidden="true">
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
                </div>
              </div>
            `;
  });

  clientListHistory.innerHTML = items.join("");
}

cancelHistory();
