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
    }
}