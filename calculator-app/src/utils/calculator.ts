import type {Operator} from '@/types/types.js'

export class Calculator {
    private currentInput: string = '';
    private previousInput: string = '';
    private operator: Operator | null = null;
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

    public chooseOperator(operator: Operator): void {
        if (this.currentInput === '') return;
        if (this.previousInput !== '') {
            this.compute();
        }
        this.operator = operator;
        this.previousInput = this.currentInput;
        this.currentInput = '';
    }

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
                computation = prev + current;
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

    public updateDisplay(): void {
        const display = document.getElementById('display') as HTMLInputElement;
        display.value = this.currentInput;
    }

    public clear(): void {
        this.currentInput = '';
        this.previousInput = '';
        this.operator = null;
        this.updateDisplay();
    }
}