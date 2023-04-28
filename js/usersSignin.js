// USERS DEMO ACCOUNT
let usersLoginForm = document.querySelector("#usersLoginForm");

const userAccount = [{ email: "miguel@gmail.com", password: "222222" }];

usersLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let usersAccountEmail = document.querySelector("#usersEmail").value;
  let usersAccountpassword = document.querySelector("#usersPassword").value;

  const usersAccount = userAccount.find(
    (usersAccount) =>
      usersAccount.email === usersAccountEmail &&
      usersAccount.password === usersAccountpassword
  );

  if (usersAccount) {
    window.location.href = "./usersAcc.html";
  } else {
    // Otherwise, display error message
    alert("error email & password");
  }
});
