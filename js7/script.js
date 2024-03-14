//3
// Створити розмітку  з текстовим полем та кнопкою. 
// При натисканні на кнопку перевіряти, чи 
// введений текст містить слово "JavaScript", якщо так, 
// то виводити повідомлення "Текст містить слово JavaScript", 
// якщо ні - "Текст не містить слово JavaScript"
function checkText() {
    const userInput = document.getElementById("Input").value;
    const searchWord = "JavaScript";

    if (userInput.includes(searchWord)) {
        alert("Текст містить слово JavaScript");
    } else {
        alert("Текст не містить слово JavaScript");
    }
}