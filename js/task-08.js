const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value && password.value) {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    evt.currentTarget.reset();
  } else {
    alert("Усі поля мають бути заповнені!");
  }
}
