function checkNumber() {
    const number = document.getElementById("Input").value;
    if (number > 10 && number < 20) {
      document.getElementById("resultat").innerText = "Число входить в діапазон від 10 до 20";
    } else {
      document.getElementById("resultat").innerText = "Число не входить в діапазон від 10 до 20";
    }
  }