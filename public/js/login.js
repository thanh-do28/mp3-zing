let form = document.getElementById("form-login");


const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
form.addEventListener("submit", (e) => {
  // console.log(e);
  e.preventDefault();

  let inputEmail = form.emaillogin.value;
  let inputPass = form.passwordlogin.value;
  // console.log(inputEmail, inputPass);
  fetch("http://127.0.0.1:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: inputEmail,
      password: inputPass,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      
      if (data.status == "success") {
        alert(data.message);
        // window.location.href = "/users";
      }else{
        alert(data.message)
      }
    })
    .catch((err) => alert(err));
});
