export class Occurrence {

    private result: Map<number, number> = new Map<number, number>();

    constructor(private values: number[]) {
    }

    mapOccurrences() {
        this.values.forEach(value => this.setOccurrence(value));
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