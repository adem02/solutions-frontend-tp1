export class Occurrence {
    readonly numbers: number[]
    private result: Map<number, number> = new Map<number, number>();

    constructor(...numbers: number[]) {
        this.numbers = numbers;
    }

    mapOccurrences() {
        this.numbers.forEach(value => this.setOccurrence(value));
        return this.result;
    }

    setOccurrence(currentValue: number) {
        if (!this.result.has(currentValue)) {
            this.result.set(currentValue, 1);
        } else {
            let currentValueOccurrence = this.result.get(currentValue);
            this.result.set(currentValue, ++currentValueOccurrence);
        }
    }
}