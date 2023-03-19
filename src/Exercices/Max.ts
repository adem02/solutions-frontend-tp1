export class Max {

    readonly numbers: number[];

    constructor(...numbers: number[]) {
        this.numbers = numbers;
    }

    getMax(): number | string {
        if (this.isCorrectValueProvided() === false) {
            return "Incorrect value provided";
        }

        console.log('Will calculate max of: ' + this.numbers);
        return this.numbers.reduce((max, current) => {
            if (current > max) {
                return current;
            } else {
                return max;
            }
        });
    }

    private isCorrectValueProvided(): boolean {
        if (this.numbers.length <= 0) {
            console.log("No value provided");
            return false;
        }

        this.numbers.forEach(value => {
            if (isNaN(value) || typeof value === "string") {
                console.log("Incorrect value provided");
                return false;
            }
        })
    }
}