import {Post} from "../models/Post";

export const getOccurrences = (posts: Post[]) => {
    let arrayed: string[] = [];
    posts.forEach(post => {
        let titles = post.title.split(' ');
        let bodies = post.body.split(' ');
        arrayed.push(...titles);
        arrayed.push(...bodies);
    })
    return arrayed;
}

export const getMostUsedWords = (posts: Post[]) => {
    const map: Map<string, number> = new OccurrenceClass(getOccurrences(posts)).mapOccurrences()
    const entries = Array.from(map.entries());
    entries.sort((a, b) => b[1] - a[1])

    return entries.slice(1, 10)
}


export class OccurrenceClass {

    private result: Map<string, number> = new Map<string, number>();

    constructor(private values: string[]) {
    }

    mapOccurrences() {
        this.values.forEach(value => this.setOccurrence(value));
        return this.result;
    }

    setOccurrence(currentValue: string) {
        let currentValueOccurrence = this.result.get(currentValue);
        if (currentValueOccurrence === undefined) {
            this.result.set(currentValue, 1);
        } else {
            this.result.set(currentValue, ++currentValueOccurrence);
        }
    }
}