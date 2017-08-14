const db = require('../../database-mongo');

exports.postLocation = (req, res) => {
  db.location.findOne({ deviceName: req.body.deviceName }, (err, device) => {
    // console.log(req.body.deviceName);
    console.log(req.body);
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
        if (updatedDevice.lost) {
          res.send('lost');
        } else {
          res.send('updated');
        }
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

exports.lost = (req, res) => {
  db.location.findOne({ deviceName: req.body.deviceName }, (err, device) => {
    if (device) {
      device.lost = true;
      device.save((error, updatedDevice) => {
        if (error) throw err;
        res.send(updatedDevice);
      });
    } else {
      res.send('not such device');
    }
  });
};

exports.found = (req, res) => {
  db.location.findOne({ deviceName: req.body.deviceName }, (err, device) => {
    if (device) {
      device.lost = false;
      device.save((error, updatedDevice) => {
        if (error) throw err;
        res.send(updatedDevice);
      });
    } else {
      res.send('not such device');
    }
  });
};
