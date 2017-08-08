const db = require('../../database-mongo');

exports.postLocation = (req, res) => {
  db.location.findOne({ deviceName: req.body.deviceName }, (err, device) => {
    console.log(req.body);
    // console.log(req.body.deviceName);
    console.log(device);
    if (!device) {
      req.body.locations[0].timeStamp = new Date();
      db.location.create(req.body);
      res.send('new device created');
    } else {
      req.body.locations[0].timeStamp = new Date();
      device.locations.push(req.body.locations[0]);
      device.save((error, updatedDevice) => {
        if (error) throw error;
        res.send(updatedDevice);
      });
    }
  });
};

exports.getDeviceLocations = (req, res) => {
  db.locations.findOne({ deviceName: req.body.deviceName })
    .then((device) => {
      res.send(device.locations);
    });
};
