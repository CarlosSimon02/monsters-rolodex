import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";
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
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBar
          onChangeHandler={onSearchChange}
          placeholder="Search monster"
          className="search-bar"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
