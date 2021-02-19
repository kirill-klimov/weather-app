// Celsius to Fahrenheit
// (0°C × 9/5) + 32 = 32°F

export const toFahrenheit = (temp) => ((temp * 9 / 5) + 32);

export const getUserGeo = () => {

  function success(position) {
    const {latitude, longitude}  = position.coords;
    return {lat: latitude, long: longitude};
  }

  function error() {
    return {
      error: true,
      message: 'Unable to retrieve your location'
    };
  }

  if(!navigator.geolocation) {
    return {
      error: true,
      message: 'Geolocation is not supported by your browser',
    };
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

}
