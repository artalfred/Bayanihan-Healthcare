function clientHistory() {
  let appointments = document.querySelector("#client_list");

  let data = JSON.parse(localStorage.getItem("history"));
  let history_display = document.querySelector("#history_display");

  let items = data.map(function (client, index) {
    const name = client.Name;
    const email = client.Email;
    const number = client.number;

    return `
            <div class="col-12 col-md-6 col-lg-3">
              <div class="card rounded-0 py-4 px-3 rounded-2 position-relative border-0">
                <div class="card-body p-1">
                <div class="py-1 px-3 position-absolute top-0 start-0 vio-green-bg text-light rounded-2">${index}</div>
                  <h6 class="card-title fw-semibold mt-3">${name}</h6>
                  <p class="footer_link text-muted fw-lighter">Email: <br> <span class="text-dark">${email}</span> </p>
                  <p class="footer_link text-muted fw-lighter">Contact <br> <span class="text-dark">${number}</span> </p>
                </div>
              </div>
            </div>
          `;
  });

  appointments.innerHTML = items.join("");
}

clientHistory();
