const axios = require('axios');

const getWifi = () => {
  navigator.geolocation.getCurrentPosition((loc) => {
    console.log(loc);
    const msg = { User: 'walter', deviceName: 'cherry', locations: [{ latitude: loc.latitude, longitude: loc.longitude }] };
    axios.post('http://e6c66fa6.ngrok.io/location', msg)
      .then((res) => {
        console.log(res);
      });
  });
};
setInterval(getWifi, 1000);
