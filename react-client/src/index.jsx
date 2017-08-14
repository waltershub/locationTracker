import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Map from './components/map.jsx';
import Sound from 'react-sound';
import { Button, ButtonGroup, DropdownButton } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      thisDeviceName: 'Pi',
      user: 'walter',
      displayed: [],
      filter: 'all',
      centre: { lat: 40.751094, lng: -73.987597 },
      alarmStatus: 'PAUSED',

    };

    this.getAllDevice = this.getAllDevice.bind(this);
    this.setDisplayed = this.setDisplayed.bind(this);
    this.filterDisplayed = this.filterDisplayed.bind(this);
    this.addDevice = this.addDevice.bind(this);
    this.setDeviceName = this.setDeviceName.bind(this);
    this.lost = this.lost.bind(this);
    this.found = this.found.bind(this);
    this.setCentre = this.setCentre.bind(this);
    this.markerCentre = this.markerCentre.bind(this);
    this.getAllDevice();
    this.setCentre();
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

  setCentre() {
    navigator.geolocation.getCurrentPosition((loc) => {
      const position = { lat: loc.coords.latitude, lng: loc.coords.longitude };
      this.setState({ centre: position }, () => {
        console.log('new postion', this.state.centre);
      });
    });
  }

  markerCentre(postion) {
    const newPostion = { lat: postion.lat, lng: postion.lng };
    console.log('clicked new postion', newPostion);
    this.setState({ centre: newPostion });
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
          if (res.data === 'lost') {
            this.setState({ alarmStatus: 'PLAYING' });
          } else {
            this.setState({ alarmStatus: 'PAUSED' });
          }
          setInterval(this.addDevice, 10000);
        });
    });
  }
  filterDisplayed(event) {
    const newfilter = event.target.value;
    this.setState({ filter: newfilter }, () => {
      this.setDisplayed(this.state.filter);
    });
  }
  lost() {
    axios.post('/lost', { deviceName: this.state.filter })
      .then((res) => {
        console.log(res);
      });
  }
  found() {
    axios.post('/found', { deviceName: this.state.filter })
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <center>
        <div>
          <h1>Find My devices</h1>
          <div>
            <forrm>
              <input placeholder="enter this device name" onChange={this.setDeviceName} />
            </forrm>
            <Button onClick={this.addDevice}>
          add this device
            </Button>
          </div>
          <div>
            <h2>  my devices</h2>
            <select value={this.state.filter} onChange={this.filterDisplayed}>

              <option value="all" >all</option>
              {this.state.devices.map(device =>
                <option key={device._id} value={device.deviceName}>{device.deviceName}</option>,
              )}
            </select>
            <div>
              <Button onClick={this.getAllDevice}>
            update locations
              </Button>
              <Button onClick={this.lost}>
            lost
              </Button>
              <Button onClick={this.found}>
            found
              </Button>
              <Sound
                url="/alarm.mp3"
                playStatus={this.state.alarmStatus}
              />

            </div>
            <div />
            <div className="mapBox" >
              <div className="subMapBox">
                <Map
                  containerElement={<div style={{ height: `${100}%` }} />}
                  mapElement={<div style={{ height: `${100}%` }} />}
                  displayed={this.state.displayed}
                  centre={this.state.centre}
                  markerCentre={this.markerCentre}
                />
              </div>
            </div>
          </div>
        </div>
      </center>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
