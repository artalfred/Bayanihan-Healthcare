function clientInfo() {
  let appointments = document.querySelector("#client_list");
  let searchId = document.querySelector("#searchId");

  let data = JSON.parse(localStorage.getItem("clients"));

  let items = data.map(function (client, index) {
    const name = client.Name;
    const email = client.Email;
    const number = client.number;

    console.log(index);

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

  searchId.addEventListener("input", () => {
    let searchTerm = searchId.value;
    console.log(searchTerm);

    let filteredData = data.filter(function (client) {
      const number = client.number;
      return number.includes(searchTerm);
    });

    let filteredItems = filteredData.map(function (client, index) {
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

    appointments.innerHTML = filteredItems.join("");
  });
}

clientInfo();
