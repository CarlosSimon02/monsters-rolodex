import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Simon",
    };
  }

  render() {
    return (
      <div className="App">
        <button></button>
      </div>
    );
  }
}

export default App;
