import React, { Component } from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
import WizardTwo from "../WizardTwo/WizardTwo";
import { connect } from "react-redux";
import { cancle } from "../../ducks/reducer";

class WizardThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: 0,
      rent: 0
    };
  }

  handleMortgagechange(value) {
    this.setState({ mortgage: value });
    console.log(value);
  }
  handleRentchange(value) {
    this.setState({ rent: value });
  }

  createHouse() {
    const { name, address, city, state, zip, img } = this.props;
    const { mortgage, rent } = this.state;
    let houseInfo = {
      name,
      address,
      city,
      state,
      zip,
      img,
      mortgage,
      rent
    };
    console.log(houseInfo);
    axios
      .post("/api/house", houseInfo)
      .then(this.props.cancle)
      // .then(this.props.history.push(`/`))
      // .then(results => {
      //   console.log(results);
      //   this.setState({
      //     homeList: results.data
      //   });
      // })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    return (
      <div className="wizbody">
        <p className="intro"> Recommended Rent: $0 </p>
        <div className="wizInput longInput">
          <p>Montly Mortgage Amount</p>
          <input
            onChange={e => this.handleMortgagechange(e.target.value)}
            type="text"
            value={this.props.mortgage}
          />
        </div>
        <div className="wizInput longInput">
          <p>Desired Monthly Rent</p>
          <input
            onChange={e => this.handleRentchange(e.target.value)}
            type="text"
            value={this.props.rent}
          />
        </div>
        <Switch>
          <Route path="/wizard/step2" component={WizardTwo} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
        <Link to="/wizard/step2">
          <button className="wizBtn" id="preBtn">
            {" "}
            Previous Step{" "}
          </button>
        </Link>
        <Link to="/">
          <button
            className="wizBtn"
            id="comBtn"
            onClick={() => this.createHouse()}
          >
            {" "}
            Complete{" "}
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  address: state.address,
  city: state.city,
  state: state.state,
  zip: state.zip,
  img: state.img
});

export default connect(mapStateToProps, { cancle })(WizardThree);
// did not use withRouter
