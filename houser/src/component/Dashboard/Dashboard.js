import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      homeList: [
        {
          propertyName: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          mortgage: 0,
          rent: 0
        }
      ]
    };
    this.deleteHouse = this.deleteHouse.bind(this);
  }
  getHouses() {
    axios.get("/api/houses").then(response => {
      // console.log(response);
      this.setState({ homeList: response.data });
    });
    // axios.get("/api/houses").then(results => {
    //   console.log(results);
    // });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.homeList.length === prevState.homeList.length) {
  //     this.getHouses();
  //   }
  // }
  componentDidMount() {
    // console.log(`Dashboard is mounting...`);
    this.getHouses();
  }

  deleteHouse(id) {
    axios.delete(`/api/house/${id}`).then(results => {
      this.getHouses();
    });
  }

  render() {
    let homeList = this.state.homeList.map((element, i) => {
      // console.log(element);
      return (
        <House
          key={i}
          id={element.id}
          propertyName={element.name}
          address={element.address}
          city={element.city}
          state={element.state}
          zip={element.zip}
          img={element.img}
          deleteHouse={this.deleteHouse}
          mortgage={element.mortgage}
          rent={element.rent}
        />
      );
    });
    return (
      <div className="dash">
        <div className="dash-header">
          <h2 className="dash-text">Dashboard</h2>
          <Link to="/wizard/step1">
            <button className="dash-btn"> Add New Property</button>
          </Link>
        </div>
        <div className="dash_prop_container">
          <h3 className="dash_prop_heading"> Home Listings</h3>
          {homeList}
        </div>
      </div>
    );
  }
}

export default Dashboard;
