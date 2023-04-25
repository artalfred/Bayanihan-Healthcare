function clientHistory() {
  let clientListHistory = document.querySelector("#clientHistoryData");

  let history = JSON.parse(localStorage.getItem("history"));

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
        <h6 class="card-title fw-semibold">${name}</h6>
        <p class="footer_link text-muted fw-lighter mb-0">Appointment Date: <br> <span class="vio-green">${date_month}</span></p>
        <p class="footer_link text-muted fw-lighter d-flex align-items-center gap-2 mb-0 mt-2" 
        data-bs-toggle="modal" data-bs-target="#clientHistory-${index}"
        style="cursor: pointer"
        >Personal details 
            <span class="text-dark history_icons d-flex"><ion-icon name="arrow-forward-outline"></ion-icon></span>
        </p>
        
        <div class="modal fade" id="clientHistory-${index}" tabindex="-1" aria-labelledby="clientHistoryLabel" aria-hidden="true">
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

clientHistory();

// DOM CLIENT HISTORY AND CANCEL HISTORY
function client() {
  let clientHistory = document.querySelector(".client_History");
  let cancelHistoryData = document.querySelector(".cancel_history");

  let btn_client = document.querySelector(".btn_client");
  let btn_cancel = document.querySelector(".btn_cancel");

  cancelHistoryData.style.display = "none";
  clientHistory.style.display = "block";

  btn_client.classList.add("active_dashboard");
  btn_cancel.classList.remove("active_dashboard");
}

function clientCancel() {
  let clientHistory = document.querySelector(".client_History");
  let cancelHistoryData = document.querySelector(".cancel_history");

  let btn_client = document.querySelector(".btn_client");
  let btn_cancel = document.querySelector(".btn_cancel");

  cancelHistoryData.style.display = "block";
  clientHistory.style.display = "none";

  btn_client.classList.remove("active_dashboard");
  btn_cancel.classList.add("active_dashboard");
}
