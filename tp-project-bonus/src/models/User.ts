export interface Geo {
    lat: string;
    lng: string;
}

export interface User {
    id: number|string;
    name: string;
    username: string
    geo: Geo
}