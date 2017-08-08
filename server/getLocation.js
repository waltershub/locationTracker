const gps = require('wifi-location');

const axios = require('axios');

function location() {
  gps.getTowers((err, towers) => {
  // return wifi network info

    gps.getLocation(towers, (error, loc) => {
      if (err) throw err;
      const msg = { deviceName: 'apple', locations: [{ latitude: loc.latitude, longitude: loc.longitude }] };
      axios.post('http://c41e3943.ngrok.io/location', msg)
        .then((res) => {
          console.log(res);
        });
    });
  });
}

setInterval(location, 1000);
