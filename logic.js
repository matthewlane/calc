let buttons = document.querySelectorAll('td');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', event => calculator(event.target.innerText));
  buttons[i].addEventListener('mousedown', function() {this.classList.add('clicked')});
  buttons[i].addEventListener('mouseup', function() {
    setTimeout(() => this.classList.remove('clicked'), 100);
  });
};

let firstNumber;
let secondNumber;
let operator;
function calculator(buttonValue) {
  let display = document.getElementById('display');

  if ('+-×÷'.indexOf(buttonValue) !== -1) {
    if (firstNumber && secondNumber) {
      display.value = firstNumber = calculate(firstNumber, secondNumber);
    }
    operator = buttonValue;
    firstNumber = display.value;
    secondNumber = null;
  }

  else if (buttonValue === '=') {
    display.value = firstNumber = calculate(firstNumber, secondNumber);
  }

  else {
    if (!secondNumber) {display.value = buttonValue;}
    else {display.value += buttonValue;}
    secondNumber = display.value;
  }
}

function calculate(firstNumber, secondNumber) {
  let result;
  firstNumber = parseFloat(firstNumber, 10);
  secondNumber = parseFloat(secondNumber, 10);

  switch (operator) {
    case '+':
      result = firstNumber += secondNumber;
      break;
    case '-':
      result = firstNumber -= secondNumber;
      break;
    case '×':
      result = firstNumber *= secondNumber;
      break;
    case '÷':
      result = firstNumber /= secondNumber;
      break;
  }

  return result;
}
