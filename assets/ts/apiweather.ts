import  {getGeolocation} from './geolocation'
import Geolocations from './classes/geolocation';
import dotenv from 'dotenv';
dotenv.config();

const addDaysDate = (days:number):Date =>{
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

export async function validateRequest(){
    const token: any = process.env.TOKEN;
    try{
        const data = await fetch("https://login.meteomatics.com/api/v1/token", {
        method: "GET",
        headers:{
            Authorization:`Basic ${btoa(token)}`
        }
    })
    const response = await data.json();
    return response;
    }catch(err){
        return ''
    }
    
}

export async function requestWeather(weatherDiff:string){
    const params:string = "t_2m:C,t_max_2m_24h:C,t_min_2m_24h:C,weather_symbol_24h:idx"
    const geolocation:Geolocations = await getGeolocation();
    const token:Object = await validateRequest();
    let initialDate = new Date();
    let finalDate;
    switch (weatherDiff){
        case '3':{
         finalDate = addDaysDate(3).toISOString();
        }
        case '7':{
            finalDate = addDaysDate(7).toISOString();
        }
        case '14':{
            finalDate = addDaysDate(14).toISOString();
        }
        case '21':{
            finalDate = addDaysDate(21).toISOString();
        }
        let apiDate = `${initialDate.toISOString()}--${finalDate}:P1D`

    }
}


