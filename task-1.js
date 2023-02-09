// Завдання 1
// Створіть програму, яка обчислює факторіал натурального числа n, яке користувач введе з клавіатури.

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

let userNum = +prompt("Введіть число для обчислення факторіалу");
alert(factorial(userNum));
