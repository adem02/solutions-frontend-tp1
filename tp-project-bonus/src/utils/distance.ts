import {Geo} from "../models/User";

export const getDistance = (coord1: Geo, coord2: Geo) => {
        const radius = 6371;
        const lat1 = Number(coord1.lat) * Math.PI / 180;
        const lat2 = Number(coord2.lat) * Math.PI / 180;
        const deltaLat = (Number(coord2.lat) - Number(coord1.lat)) * Math.PI / 180;
        const deltaLng = (Number(coord2.lng) - Number(coord1.lng)) * Math.PI / 180;

        const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return (radius * c).toFixed(2);
}