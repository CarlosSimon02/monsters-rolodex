import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";
import "./App.css";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [stringValue, setStringValue] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) => {
        console.log("new");
        return monster.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [searchValue, monsters]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchValue(searchFieldString);
  };

  const onStringChange = (event) => {
    setStringValue(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBar
        onChangeHandler={onSearchChange}
        placeholder="Search monster"
        className="search-bar"
      />
      <SearchBar
        onChangeHandler={onStringChange}
        placeholder="set String"
        className="search-bar"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;

// USING CLASS COMPONENTS

// import { Component } from "react";
// import CardList from "./components/card-list/card-list.component";
// import SearchBar from "./components/search-bar/search-bar.component";
// import "./App.css";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchValue: "",
//     };
//   }

//   componentDidMount() {
//     fetch("http://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         return response.json();
//       })
//       .then((users) => {
//         this.setState(() => ({ monsters: users }));
//       });
//   }

//   onSearchChange = (event) => {
//     this.setState(() => ({ searchValue: event.target.value }));
//   };

//   render() {
//     const { monsters, searchValue } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchValue.toLowerCase());
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBar
//           onChangeHandler={onSearchChange}
//           placeholder="Search monster"
//           className="search-bar"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;
