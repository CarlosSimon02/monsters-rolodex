import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.allMonsters = [];

    this.state = {
      monsters: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.allMonsters = users;
        this.setState(() => ({ monsters: this.allMonsters }));
      });
  }

  render() {
    const filteredMonsters = this.allMonsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monster"
          onChange={(event) => {
            this.setState(() => ({searchValue: event.target.value}))
          }}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
