export default class Geolocations{ 

    public constructor(private latitude:number, private longitude:number){
        this.latitude = latitude
        this.longitude = longitude
    }
    public getLatitude(): number {
        return this.latitude
    }
    public setLatitude(value: number): void {
        this.latitude = value
    }
    public getLongitude(): number {
        return this.longitude
    }
    public setLongitude(value: number): void {
        this.longitude = value
    }
}