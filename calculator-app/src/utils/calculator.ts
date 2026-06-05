import type {Operator} from '@/types/types.js'

export class Calculator {
    private currentInput: string = '';
    private previousInput: string = '';
    private operator: Operator | null = null;
    // Adjusts the value of the number variable by taking whatever value is stored
    // in currentInput
    public appendNumber(number: string): void {
        if (this.currentInput === '0' && !this.currentInput.includes('.')) {
            this.currentInput = number;
        } else if (number === '.' && !this.currentInput.includes('.')) {
            this.currentInput += number;
        } else {
            this.currentInput += number;
        }
        this.updateDisplay();
    }
    // Assigns an Operator to the equation based off user input
    public chooseOperator(operator: Operator): void {
        if (this.currentInput === '') return;
        if (this.previousInput !== '') {
            this.compute();
        }
        this.operator = operator;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    }
    // Takes the two values stored in previousInput and currentInput and performs
    // a calculation based off of which operator was determined in chooseOperator()
    // then stores the result in currentInput
    public compute(): void {
        let computation: number;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operator) {
            case '+':
                computation = prev + current;
                break;
            
            case '-':
                computation = prev - current;
                break;

            case '*':
                computation = prev * current;
                break;

            case '/':
                computation = prev / current;
                break;
            
            default:
                break;
        }
        this.currentInput = computation.toString();
        this.operator = null;
        this.previousInput = '';
        this.updateDisplay();
    }
    // Updates the calculator display to show whatever value is currently stored
    // in currentInput
    public updateDisplay(): void {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = this.currentInput;
    }
    // Clears all stored values from all variables when user clicks the clear button
    public clear(): void {
        this.currentInput = '';
        this.previousInput = '';
        this.operator = null;
        this.updateDisplay();
    }
}