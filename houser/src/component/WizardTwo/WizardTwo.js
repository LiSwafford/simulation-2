import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
// import axios from "axios";
import WizardThree from "../WizardThree/WizardThree";
import WizardOne from "../WizardOne/WizardOne";
import { connect } from "react-redux";
import { updateImg } from "../../ducks/reducer";

class WizardTwo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // console.log(this.props);
    return (
      <div className="wizbody">
        <div className="wizInput longInput">
          <p>Image URL</p>
          <input
            onChange={e => this.props.updateImg(e.target.value)}
            type="text"
            value={this.props.img}
          />
        </div>
        <Switch>
          <Route path="/wizard/step1" component={WizardOne} />
          <Route path="/wizard/step3" component={WizardThree} />
        </Switch>
        <Link to="/wizard/step1">
          <button className="wizBtn" id="prBtn">
            Previous Step
          </button>
        </Link>
        <Link to="/wizard/step3">
          <button className="wizBtn"> Next Step </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  img: state.img,
  ...state
});

//------------------why does this return has to be in ()?---------------------

// function mapStateToProps(state) {
//   const { img } = state;
//   return {
//     img
//   };
// }

export default connect(mapStateToProps, { updateImg })(WizardTwo);
