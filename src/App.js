import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster1: { name: "Balmond" },
      monster2: { name: "Terizla" },
      monster3: { name: "Barats" },
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{}</h1>
      </div>
    );
  }
}

export default App;
