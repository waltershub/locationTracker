const db = require('../../database-mongo');

const socketInstance = (io) => {
  io.on('connection', (socket) => {
    console.log('user contected');
    socket.on('location', (location) => {
      db.location.findOne({ deviceName: location.deviceName }, (err, device) => {
      // console.log(req.body.deviceName);
        if (!device) {
          location.locations[0].timeStamp = new Date();
          db.location.create(location);
          console.log('created');
        } else {
          console.log('updating');
          location.locations[0].timeStamp = new Date();
          device.locations.unshift(location.locations[0]);
          device.save((error, updatedDevice) => {
            if (error) throw error;
            if (updatedDevice.lost) {
              socket.emit('lost');
            } else {
              console.log('updated');
            }
          });
        }
      });
    });
    socket.on('lost', (data) => {
      console.log('socker says hi', data);
      io.sockets.emit('lost', data);
    });
  });
};

module.exports = socketInstance;
