const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("input", function () {
  const inputLength = inputElement.value.length;
  const requiredLength = parseInt(inputElement.getAttribute("data-length"), 10);

  if (inputLength === requiredLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
