//1
// function showMessage() {
//     const selectElement = document.getElementById("beverageSelect");
//     const messageElement = document.getElementById("message");
//     const selectedOption = selectElement.value;

//     switch (selectedOption) {
//         case "coffee":
//             messageElement.innerText = "Ваш вибір кава";
//             break;
//         case "tea":
//             messageElement.innerText = "Ваш вибір чай";
//             break;
//         case "juice":
//             messageElement.innerText = "Ваш вибір сік";
//             break;
//         default:
//             messageElement.innerText = "Такого напою немає";
//     }
// }
//2
// function checkDay() {
//     const input = document.getElementById('day').value.toLowerCase();
//     const workdays = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'П^ятниця'];
//     const weekends = ['Субота', 'Неділя '];

//     if (workdays.includes(input)) {
//       document.getElementById('result').innerText = `${input} це робочий день`;
//     } else if (weekends.includes(input)) {
//       document.getElementById('result').innerText = `${input} це вихідний день`;
//     } else {
//       document.getElementById('result').innerText = `будь ласка ведіть день тижня`;
//     }
//   }
//3
function checkSeason() {
  const monthInput = document.getElementById("month").value;
  let season;

  switch (parseInt(monthInput)) {
    case 1:
    case 2:
    case 12:
      season = "Winter";
      break;
    case 3:
    case 4:
    case 5:
      season = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      season = "Summer";
      break;
    case 9:
    case 10:
    case 11:
      season = "Autumn";
      break;
    default:
      season = "Invalid month";
  }

  document.getElementById(
    "output"
  ).innerText = `The month number ${monthInput} is in the season of ${season}.`;
}
