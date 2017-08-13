import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Map from './components/map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      thisDeviceName: 'Pi',
      user: 'walter',
      displayed: [],
      filter: 'all',

    };

    this.getAllDevice = this.getAllDevice.bind(this);
    this.setDisplayed = this.setDisplayed.bind(this);
    this.filterDisplayed = this.filterDisplayed.bind(this);
    this.addDevice = this.addDevice.bind(this);
    this.setDeviceName = this.setDeviceName.bind(this);
    this.getAllDevice();
  }

  getAllDevice() {
    // const alldevices = [];
    // const user = this.state.user;
    axios.get('/locations',
      { headers: { user: this.state.user } })
      .then((data) => {
        this.setState({ devices: data.data });
        this.setDisplayed();
      });
  }


  setDisplayed(filter = 'all') {
    if (filter === 'all') {
      this.setState({ displayed: this.state.devices });
    } else {
      const tempDisplayed = this.state.devices.filter(device => device.deviceName === filter);

      this.setState({ displayed: tempDisplayed }, () => {
        console.log('with filter', this.state.displayed);
      });
    }
  }


  setDeviceName(event) {
    this.setState({ thisDeviceName: event.target.value });
  }

  addDevice() {
    console.log('clicked');
    navigator.geolocation.getCurrentPosition((loc) => {
      console.log(loc.coords.latitude);
      const msg = { User: this.state.user, deviceName: this.state.thisDeviceName, locations: [{ latitude: loc.coords.latitude, longitude: loc.coords.longitude }] };
      console.log(msg);
      axios.post('/location', msg)
        .then((res) => {
          console.log(res);
        });
    });
  }
  filterDisplayed(event) {
    const newfilter = event.target.value;
    this.setState({ filter: newfilter }, () => {
      this.setDisplayed(this.state.filter);
    });
  }
  render() {
    return (<div>
      <h1>Find My devices</h1>
      <div>
      this device
        <forrm>
          <input placeholder="enter this device name" onChange={this.setDeviceName} />
        </forrm>
      </div>
      <div>
        my devices

        <select value={this.state.filter} onChange={this.filterDisplayed}>

          <option value="all" >all</option>
          {this.state.devices.map(device =>
            <option key={device._id} value={device.deviceName}>{device.deviceName}</option>,
          )}
        </select>
        <div>
          <button onClick={this.getAllDevice}>
            update locations
          </button>
          <button onClick={() => { setInterval(this.addDevice, 1000); }}>
            add this device
          </button>
        </div>
        <div />
        <div className="mapBox" >
          <div className="subMapBox">
            <Map
              containerElement={<div style={{ height: `${100}%` }} />}
              mapElement={<div style={{ height: `${100}%` }} />}
              displayed={this.state.displayed}
            />
          </div>
        </div>
      </div>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
