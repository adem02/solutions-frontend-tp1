export class Cesar {
    private static readonly ALPHABET_LENGTH = 26;

    private static charRot(n: number, char: string): string {
        const charCode = char.charCodeAt(0);
        const aCode = "a".charCodeAt(0);
        const zCode = "z".charCodeAt(0);

        if (charCode >= aCode && charCode <= zCode) {
            const newCharCode = ((charCode - aCode + n) % this.ALPHABET_LENGTH) + aCode;
            return String.fromCharCode(newCharCode);
        }

        return char;
    }

    static encrypt(n: number, message: string): string {
        return message
            .split("")
            .map((char) => this.charRot(n, char.toLowerCase()))
            .join("");
    }

    static decrypt(n: number, encryptedMessage: string): string {
        return this.encrypt(this.ALPHABET_LENGTH - n, encryptedMessage);
    }
}