import './style.css'
import { type Operator } from '@/types/types'
import { Calculator } from '@/components/calculator.js'


// creates a new instance of calculator and waits for a click event to update
// the calculator display based off of what was clicked
const calculator = new Calculator();
document.getElementById('buttons')!.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('number')) {
    calculator.appendNumber(target.innerText);
  } else if (target.classList.contains('operator')) {
    calculator.chooseOperator(target.innerText as Operator);
  } else if (target.classList.contains('equals')) {
    calculator.compute();
  } else if (target.classList.contains('clear')) {
    calculator.clear();
  } else if (target.classList.contains('decimal')) {
    calculator.handleDecimal();
  }
});

