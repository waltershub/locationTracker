import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Map from './components/map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: [],
      user: 'walter',
      displayed: [],
      filter: 'all',

    };

    this.getAllDevice = this.getAllDevice.bind(this);
    this.setDisplayed = this.setDisplayed.bind(this);
    this.filterDisplayed = this.filterDisplayed.bind(this);
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
  filterDisplayed(event) {
    const newfilter = event.target.value;
    this.setState({ filter: newfilter }, () => {
      this.setDisplayed(this.state.filter);
    });
  }

  render() {
    return (<div>
      <h1>Location Tracker</h1>
      <div>
        devices

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
        </div>
        <div />
        <div>
          <Map
            containerElement={<div style={{ height: `${100}%` }} />}
            mapElement={<div style={{ height: `${100}%` }} />}
            displayed={this.state.displayed}
          />
        </div>
      </div>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
