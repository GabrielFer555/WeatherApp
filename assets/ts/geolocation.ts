import Geolocations from "./classes/geolocation"

export const getGeolocation = (): Promise<Geolocations> => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position.coords);
            const geolocate = new Geolocations(
              position.coords.latitude,
              position.coords.longitude
            );
            resolve(geolocate);
          },
          (error) => {
            reject(error.message);
          }
        );
      } else {
        reject("Navigator doesn't support geolocation");
      }
    });
  }

export const getDetailsfromGeolocation = () =>{
    
}



