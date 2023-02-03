export class Max {
    getMax(a, b, c) {
        const values = [a, b, c];
        this.checkValue(values);
        return Math.max(...values);
    }

    private checkValue(values: any[]) {
        values.forEach(value => {
            if(isNaN(value) || typeof value === "string") {
                throw new Error(`${value} is not a number !`);
            }
        })
    }
}