let formCreate = document.getElementById("form_create");

formCreate.onsubmit = (e) => {
  e.preventDefault();
  let nameInput = formCreate.name.value;
  let emailInput = formCreate.email.value;
  let passInput = formCreate.password.value;
  fetch("http://127.0.0.1:3000/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameInput,
      email: emailInput,
      password: passInput,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.message2) {
        alert(data.message2);
        return data.message2
      }else if (data.message){
        alert(data.message)
      }
    })
    .then((data1) => {
      console.log(data1);
      window.location.href = "/auth/login";
    })
    .catch((err) => console.log(err));
};
