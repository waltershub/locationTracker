const triangulate = require('wifi-triangulate');
const axios = require('axios');

const location = () => {
  triangulate((err, loc) => {
    if (err) throw err;
    const msg = { User: 'walter', deviceName: 'cherry', locations: [{ latitude: loc.latitude, longitude: loc.longitude }] };
    axios.post('http://c41e3943.ngrok.io/location', msg)
      .then((res) => {
        console.log(res);
      });
  });
};

setInterval(location, 1000);
