function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (name.length < 3) {
    alert(" ім'я має містити не менше 3 символів");
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert(" email має містити символ @ та крапку після неї");
  } else if (password.length < 6) {
    alert("пароль має містити не менше 6 символів");
  } else {
    window.location.href = "https://www.instagram.com/odsambofederation/";
  }
}
