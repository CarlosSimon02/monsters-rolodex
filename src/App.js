import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.allMonsters = [];

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.allMonsters = users;
        this.setState(() => ({ monsters: this.allMonsters }));
      });
  }

  filterMonsters(value) {
    const filteredMonsters = this.allMonsters.filter((monster) => {
      return monster.name.toLowerCase().includes(value.toLowerCase());
    });

    this.setState(() => ({ monsters: filteredMonsters }));
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monster"
          onChange={(event) => {
            this.filterMonsters(event.target.value);
          }}
        />
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
