
//create an object to help us keep track of values
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  function updateDisplay() {
    // select the element with class of `display`
    const display = document.querySelector('.button');
    // update the value of the element with the contents of `displayValue`
    display.value = calculator.displayValue;
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
    console.log('operator', target.value);
    return;
  }
  if (target.classList.contains('function')) {
    console.log('function', target.value);
    return;
  }
  if (target.classList.contains('number')) {
    console.log('number', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  console.log('digit', target.value);
});
