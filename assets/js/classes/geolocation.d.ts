import { IGeoLocations } from '../interfaces/IGeolocations';
export declare class Geolocations implements IGeoLocations {
    private latitude;
    private longitude;
    constructor(latitude: number, longitude: number);
    getLatitude(): number;
    setLatitude(value: number): void;
    getLongitude(): number;
    setLongitude(value: number): void;
}
