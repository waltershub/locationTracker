const db = require('../../database-mongo');

exports.postLocation = (req, res) => {
  db.location.findOne({ deviceName: req.body.deviceName }, (err, device) => {
    // console.log(req.body.deviceName);

    if (!device) {
      req.body.locations[0].timeStamp = new Date();
      db.location.create(req.body);
      res.send('new device created');
    } else {
      console.log('updating');
      req.body.locations[0].timeStamp = new Date();
      device.locations.push(req.body.locations[0]);
      device.save((error, updatedDevice) => {
        if (error) throw error;
        res.send('updated');
      });
    }
  });
};

exports.getDeviceLocations = (req, res) => {
  console.log(req.headers);
  db.location.find({ User: req.headers.user })
    .then((data) => {
      res.send(data);
    });
};
