export const getOccurrenceOf = (letter: string, sentence: string) => {
    const regex = new RegExp(letter, 'g');
    const matches = sentence.match(regex);
    return matches ? matches.length : 0;
}

export const getAverage = () => {

}