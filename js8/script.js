function checkNumber() {
  var number = document.getElementById("numberInput").value;
  if (number > 10 && number < 20) {
    document.getElementById("result").innerText =
      "Number is within the range of 10 to 20";
  } else {
    document.getElementById("result").innerText =
      "Number is not within the range of 10 to 20";
  }
}
