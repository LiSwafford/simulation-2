import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
// import axios from "axios";
import WizardTwo from "../WizardTwo/WizardTwo";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZip
} from "../../ducks/reducer";

class WizardOne extends Component {
  constructor() {
    super();
    this.state = {
      // name: "",
      // address: "",
      // city: "",
      // state: "",
      // zip: 0
    };
  }

  // handleNamechange(value) {
  //   this.setState({ name: value });
  //   // console.log(value);
  // }
  // handleAddresschange(value) {
  //   this.setState({ address: value });
  // }
  // handleCitychange(value) {
  //   this.setState({ city: value });
  // }
  // handleStatechange(value) {
  //   this.setState({ state: value });
  // }
  // handleZipchange(value) {
  //   this.setState({ zip: value });
  // }

  render() {
    console.log(this.props);
    return (
      <div className="wizOne wizbody">
        <div className="wizInput">
          <p>Property Name</p>
          <input
            onChange={e => this.props.updateName(e.target.value)}
            type="text"
            value={this.props.name}
          />
        </div>
        <div className="wizInput longInput">
          <p>Address</p>
          <input
            onChange={e => this.props.updateAddress(e.target.value)}
            type="text"
            value={this.props.address}
          />
        </div>
        <div className="wizInput">
          <p>City</p>
          <input
            onChange={e => this.props.updateCity(e.target.value)}
            type="text"
            value={this.props.city}
          />
        </div>
        <div className="wizInput">
          <p> State</p>
          <input
            onChange={e => this.props.updateState(e.target.value)}
            type="text"
            value={this.props.state}
          />
        </div>
        <div className="wizInput">
          <p> Zip</p>

          <input
            onChange={e => this.props.updateZip(e.target.value)}
            type="text"
            value={this.props.zip}
          />
        </div>
        <Route path="/wizard/step2" component={WizardTwo} />
        <Link to="/wizard/step2">
          <button className="wizBtn"> Next Step</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  address: state.address,
  city: state.city,
  ...state.state,
  ...state.zip
});

export default connect(mapStateToProps, {
  updateName,
  updateAddress,
  updateCity,
  updateState,
  updateZip
})(WizardOne);

// handleInput(e, key){
//   let newState = {};
//   newState[key] = e.target.value;
//   this.setState(newState)
//   }

//   <input onChange={(e) => this.handleInput(e, "name")} />
