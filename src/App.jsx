import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

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
        this.setState(() => ({ monsters: users }));
      });
  }

  onSearchChange = (event) => {
    this.setState(() => ({ searchValue: event.target.value }));
  };

  render() {
    const { monsters, searchValue } = this.state;
    const { onSearchChange: w } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monster"
          onChange={w}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
