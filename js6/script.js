//2
// Створити розмітку  з двома числовими полями та кнопкою. 
// При натисканні на кнопку перевіряти, чи сума значень
//  полів більша за 10, якщо так, то виводити 
// повідомлення "Сума більша за 10", якщо ні - "Сума менша або дорівнює 10".
function checkSum() {
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var sum = num1 + num2;

    if (sum > 10) {
        document.getElementById("resultat").innerText = "Сума більша за 10";
    } else {
        document.getElementById("resultat").innerText = "Сума менша або дорівнює 10";
    }
}