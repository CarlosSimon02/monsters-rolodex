import React, { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";
import "./App.css";
import { getData } from "./utils/fetch.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [titleValue, setTitleValue] = useState("");

  useEffect(() => {
    // fetch("http://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((users) => {
    //     setMonsters(users);
    //   });
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "http://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
  }, [searchValue, monsters]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchValue(searchFieldString);
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitleValue(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{titleValue}</h1>
      <SearchBar
        onChangeHandler={onSearchChange}
        placeholder="Search monster"
        className="search-bar"
      />
      <br />
      <SearchBar
        onChangeHandler={onTitleChange}
        placeholder="Set Title"
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
