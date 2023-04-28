function usersDataAccount() {
  let usersDataAcc = document.querySelector("#usersDataAcc");

  let UsersData = JSON.parse(localStorage.getItem("UsersData"));

  let items = UsersData.map(function (users, index) {
    const name = users.Name;
    const reason_appointment = users.reason_appointment;
    const date_month = users.dateMonth;
    const date_time = users.time;
    const message = users.healthCondition;
    const city = users.city;

    return `
      <div
      class="row align-items-center p-3 rounded-2"
      style="box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
    >
      <div class="col-12 col-md-3 border-end p-0">
        <div class="d-grid gap-1">
          <h5 class="m-0 vio-green fw-semibold">${date_month}</h5>
          <p class="m-0 text-muted">${date_time}</p>
        </div>
      </div>
      <div class="col-12 col-md-3 px-3 border-end">
        <div class="d-grid gap-1">
          <h6 class="m-0 vio-green fw-semibold">${name}</h6>
          <p class="m-0 text-muted">${reason_appointment}</p>
        </div>
      </div>
      <div class="col-12 col-md-3 px-3">
        <div class="d-grid gap-1">
          <h6 class="m-0 vio-green fw-semibold">
            ${city}
          </h6>
        </div>
      </div>
      <div class="col-12 col-md-3 justify-content-end d-flex">
        <button class="btn btn-main text-light">Cancel</button>
      </div>
    </div>
          `;
  });

  usersDataAcc.innerHTML = items.join("");
}

usersDataAccount();
