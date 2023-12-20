import IWeatherSymbol from "../interfaces/iWeatherSymbol";

export default class WeatherSymbol implements IWeatherSymbol {

    private _weatherPath: Array<string> = ['../assets/img/weatherSimbols/wsymbol_0001_sunny.png',
    '../assets/img/weatherSimbols/wsymbol_0002_sunny_intervals.png',
    '../assets/img/weatherSimbols/wsymbol_0003_white_cloud.png',
    '../assets/img/weatherSimbols/wsymbol_0006_mist.png',
    '../assets/img/weatherSimbols/wsymbol_0007_fog.png',
    '../assets/img/weatherSimbols/wsymbol_0008_clear_sky_night.png',
    '../assets/img/weatherSimbols/wsymbol_0009_light_rain_showers.png',
    '../assets/img/weatherSimbols/wsymbol_0011_light_snow_showers.png',
    '../assets/img/weatherSimbols/wsymbol_0013_sleet_showers.png',
    '../assets/img/weatherSimbols/wsymbol_0018_cloudy_with_heavy_rain.png',
    '../assets/img/weatherSimbols/wsymbol_0020_cloudy_with_heavy_snow.png',
    '../assets/img/weatherSimbols/wsymbol_0021_cloudy_with_sleet.png',
    '../assets/img/weatherSimbols/wsymbol_0024_thunderstorms.png',
    '../assets/img/weatherSimbols/wsymbol_0025_light_rain_showers_night.png',
    '../assets/img/weatherSimbols/wsymbol_0027_light_snow_showers_night.png',
    '../assets/img/weatherSimbols/wsymbol_0029_sleet_showers_night.png',
    '../assets/img/weatherSimbols/wsymbol_0034_cloudy_with_heavy_rain_night.png',
    '../assets/img/weatherSimbols/wsymbol_0036_cloudy_with_heavy_snow_night.png',
    '../assets/img/weatherSimbols/wsymbol_0037_cloudy_with_sleet_night.png',
    '../assets/img/weatherSimbols/wsymbol_0040_thunderstorms_night.png',
    '../assets/img/weatherSimbols/wsymbol_0041_partly_cloudy_night.png',
    '../assets/img/weatherSimbols/wsymbol_0042_cloudy_night.png',
    '../assets/img/weatherSimbols/wsymbol_0043_mostly_cloudy.png',
    '../assets/img/weatherSimbols/wsymbol_0044_mostly_cloudy_night.png',
    '../assets/img/weatherSimbols/wsymbol_0048_drizzle.png',
    '../assets/img/weatherSimbols/wsymbol_0050_freezing_rain.png',
    '../assets/img/weatherSimbols/wsymbol_0056_dust_sand.png',
    '../assets/img/weatherSimbols/wsymbol_0063_mist_night.png',
    '../assets/img/weatherSimbols/wsymbol_0064_fog_night.png',
    '../assets/img/weatherSimbols/wsymbol_0066_drizzle_night.png',
    '../assets/img/weatherSimbols/wsymbol_0068_freezing_rain_night.png',
    '../assets/img/weatherSimbols/wsymbol_0074_dust_sand_night.png',
    '../assets/img/weatherSimbols/wsymbol_0999_unknown.png'];

    public constructor(private _symbolValue: number){
        this._symbolValue = _symbolValue -1;
    }
    
    public getSymbolValue(): number{
        return this._symbolValue;
    }
    public setSymbolValue(value: number): void{
        this._symbolValue = value;
    }

    public getStringSymbol(): string {
        return this._weatherPath[this._symbolValue]
    }
    
}
