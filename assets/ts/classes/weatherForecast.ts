import IWeatherForecast from "../interfaces/iweatherForecast";
import WeatherSymbol from "./weatherSymbol";

export default class WeatherForecast implements IWeatherForecast {

    public constructor(private _temperature: number, private _maxTemp: number, private _minTemp: number, private _precipitation: number, private _symbol: WeatherSymbol){
        this._temperature = _temperature;
        this._maxTemp = _maxTemp;
        this._minTemp = _minTemp;
        this._precipitation = _precipitation;
        this._symbol = _symbol;
    };

    public getTemperature(): number {
        return this._temperature;
    }

    public setTemperature(value: number):void{
        this._temperature = value;
    }

    public getMaxTemperature(): number {
        return this._maxTemp;
    }

    public setMaxTemperature(value: number):void{
        this._maxTemp = value;
    }

    public getMinTemperature(): number {
        return this._minTemp;
    }

    public setMinTemperature(value:number){
        this._minTemp = value;
    }
    
    public getPrecipitation(): number {
        return this._precipitation;
    }
    
    public setPrecipitation(value:number):void{
        this._precipitation = value;
    }

    public getWeatherSymbol():string{
        return this._symbol.getStringSymbol();
    }

    public setWeatherSymbol(obj:WeatherSymbol):void{
        this._symbol = obj;
    }

    public returnHTML(): string {
        throw new Error("Method not implemented.");
    }


}