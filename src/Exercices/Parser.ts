export class Parser {

    private parsedValue: string;

    constructor(private separator: string) {
    }

    parse(valueToParse: string) {
        let splitedValue: string[] = valueToParse.split(this.separator).map(s => s.trim());
        let filteredValueNumbers: string[] = splitedValue.filter(s => !isNaN(Number(s)));
        this.parsedValue = filteredValueNumbers.join(' ');
    }

    getValue(): string {
        return this.parsedValue;
    }
}