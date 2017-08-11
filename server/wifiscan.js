const geocodeWifi = require('geocode-wifi');
const wifiScanner = require('node-wifiscanner');
const axios = require('axios');

const getLocation = () => {
  wifiScanner.scan((err, towers) => {
    if (err) throw err;

    geocodeWifi(towers, (err, loc) => {
      if (err) throw err;
      const msg = { User: 'walter', deviceName: 'cherry', locations: [{ latitude: loc.latitude, longitude: loc.longitude }] };
      axios.post('http://c41e3943.ngrok.io/location', msg)
        .then((res) => {
          console.log(res);
        });
    });
  });
};

setInterval(getLocation, 1000);
