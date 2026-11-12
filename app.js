const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const message = document.getElementById("message");
const registerLink = document.getElementById("registerLink");


// Сыр сөздү көрсөтүү жана жашыруу
showPassword.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    showPassword.textContent = "🙈";
  } else {
    password.type = "password";
    showPassword.textContent = "👁";
  }
});



// Форманы текшерүү
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (email.value.trim() === "" || password.value === "") {
    message.style.color = "red";
    message.textContent = "Бардык талааларды толтуруңуз!";
    return;
  }

  message.style.color = "green";
  message.textContent =
    "Форма толтурулду! Бул азырынча демо версия.";
});


// Катталуу шилтемеси
registerLink.addEventListener("click", function (event) {
  event.preventDefault();
  message.style.color = "#850b25";
  message.textContent =
    "Катталуу баракчасын кийинки кадамда жасайбыз.";
});