//1
const bankAccount = {
  ownerName: "Kosovskiy Sasha",
  accountNumber: "244466666",
  balance: 333,

  deposit: function (amount) {
    this.balance += amount;
    console.log(
      `Успішно внесено ${amount} на рахунок. Поточний баланс: ${this.balance}`
    );
  },

  withdraw: function (amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(
        `Успішно вилучено ${amount} з рахунку. Поточний баланс: ${this.balance}`
      );
    } else {
      console.log("Недостатньо коштів для зняття.");
    }
  },
};

bankAccount.deposit(600);

bankAccount.withdraw(100);

//2

const weather = {
  temperature: null,
  humidity: null,
  windSpeed: null,
  checkTemperature: function () {
    if (this.temperature < 0) {
      return true;
    } else {
      return false;
    }
  },
};

let inputTemperature = prompt("Введіть температуру в градусах Цельсія:");

weather.temperature = parseFloat(inputTemperature);

if (weather.checkTemperature()) {
  console.log("Температура нижче 0 градусів Цельсія");
} else {
  console.log("Температура 0 градусів Цельсія або вище");
}

//3

let user = {
  name: "",
  email: "",
  password: "",

  login: function (inputEmail, inputPassword) {
    if (inputEmail === this.email && inputPassword === this.password) {
      console.log("Вхід успішний! Ласкаво просимо, " + this.name);
    } else {
      console.log(
        "Неправильна адреса електронної пошти або пароль. Будь ласка спробуйте ще раз."
      );
    }
  },
};

user.name = prompt("Ведіть ваше ім'я:");
user.email = prompt("Ведіть вашу електрону адресу:");
user.password = prompt("Ведіть ваш пароль:");

let inputEmail = prompt("Введіть свою електронну адресу для входу:");
let inputPassword = prompt("Введіть свій пароль для входу:");

user.login(inputEmail, inputPassword);

//4

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,
  checkRating: function () {
    if (this.rating > 8) {
      document.getElementById("title").style.color = "green";
      return true;
    } else {
      return false;
    }
  },
};

document.getElementById("title").innerText = `Title: ${movie.title}`;
document.getElementById("director").innerText = `Director: ${movie.director}`;
document.getElementById("year").innerText = `Year: ${movie.year}`;
document.getElementById("rating").innerText = `Rating: ${movie.rating}`;

const isRatingAbove8 = movie.checkRating();
