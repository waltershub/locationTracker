const gps = require('wifi-location');

const axios = require('axios');

// function location() {
//   gps.getTowers((err, towers) => {
//   // return wifi network info
//     if (err) throw err;
//     console.log(towers);
//     // console.log('towers', towers);
//     gps.getLocation(towers, (error, loc) => {
//       console.log(error);
//       console.log('location', loc);
//       const msg = { User: 'walter', deviceName: 'cherry', locations: [{ latitude: loc.latitude, longitude: loc.longitude }] };
//       axios.post('http://e6c66fa6.ngrok.io/location', msg)
//         .then((res) => {
//           console.log(res);
//         });
//     });
//   });
// }
//
// setInterval(location, 1000);
// var gps = require('wifi-location');

gps.getTowers((err, towers) => {
  // return wifi network info

  gps.getLocation(towers, (err, loc) => {
    // return geolocation
    /*
    {
      accuracy: 22,
      latitude: 34.3427546,
      longitude: -112.1004261
    }
    */
    console.log(loc);
  });
});
