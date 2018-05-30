import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
// import axios from "axios";
import WizardOne from "../WizardOne/WizardOne";
import WizardTwo from "../WizardTwo/WizardTwo";
import WizardThree from "../WizardThree/WizardThree";
import { cancle } from "../../ducks/reducer";
import { connect } from "react-redux";
import "./Wizard.css";

class Wizard extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="wiz">
        <div className="wiz_subheader">
          <h2 className="wiz_heading">Add New listing</h2>
          <Link to="/">
            <button
              className="wiz_subheader_button"
              onClick={() => this.props.cancle()}
            >
              Cancel
            </button>
          </Link>
        </div>
        <Route path="/wizard/step1" component={WizardOne} />
        <Route path="/wizard/step2" component={WizardTwo} />
        <Route path="/wizard/step3" component={WizardThree} />
      </div>
    );
  }
}

export default connect(null, { cancle })(Wizard);
