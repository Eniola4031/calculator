
//create an object to help us keep track of values
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  function updateDisplay() {
    // select the element with class of `display`
    const display = document.querySelector('.display');
    // update the value of the element with the contents of `displayValue`
    display.value = button.displayValue;
  }
  updateDisplay();
  
  const keys = document.querySelector('.button');
keys.addEventListener('click', (event) => {
  // Access the clicked element
  const { target } = event;

  // Check if the clicked element is a button.
  // If not, exit from the function
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
  //  console.log('operator', target.value);
    return;
  }
  if (target.classList.contains('function')) {
   // console.log('function', target.value);
    return;
  }
  if (target.classList.contains('number')) {
    //console.log('number', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    //console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    //console.log('clear', target.value);
    return;
  }

 // console.log('digit', target.value);
});
const { target } = event;
// is equivalent to
const target = event.target;

// function inputDigit(digit) {
//     const { displayValue } = calculator;
//     // Overwrite `displayValue` if the current value is '0' otherwise append to it
//     calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
//   }
//  // console.log('digit', target.value);
//   inputDigit(target.value);
// updateDisplay();
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  
    console.log(calculator);
  }
  
function inputDecimal(dot) {
    // If the `displayValue` property does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
      // Append the decimal point
      calculator.displayValue += dot;
    }
  }
  //console.log('decimal', target.value);
  inputDecimal(target.value);
  updateDisplay();
  function handleOperator(nextOperator) {
    // Destructure the properties on the calculator object
    const { firstOperand, displayValue, operator } = calculator
    // `parseFloat` converts the string contents of `displayValue`
    // to a floating-point number
    const inputValue = parseFloat(displayValue);
  
    // verify that `firstOperand` is null and that the `inputValue`
    // is not a `NaN` value
    if (firstOperand === null && !isNaN(inputValue)) {
      // Update the firstOperand property
      calculator.firstOperand = inputValue;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
