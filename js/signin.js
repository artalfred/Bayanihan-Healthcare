// INSTITUTION DEMO ACCOUNT
let loginForm = document.querySelector("#loginForm");

const accounts = [{ email: "ManilaCenter@gmail.com", password: "111111" }];

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let accountEmail = document.querySelector("#email").value;
  let accountpassword = document.querySelector("#password").value;

  const account = accounts.find(
    (account) =>
      account.email === accountEmail && account.password === accountpassword
  );

  if (account) {
    window.location.href = "./Manila.html";
  } else {
    // Otherwise, display error message
    alert("error email & password");
  }
});
