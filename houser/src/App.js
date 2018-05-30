import React, { Component } from "react";
import routes from "./route";
import Header from "./component/Header/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
