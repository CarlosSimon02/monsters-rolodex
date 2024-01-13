import "./search-bar.styles.css";

const SearchBar = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBar;

// USING CLASS COMPONENTS

// import { Component } from "react";
// import "./search-bar.styles.css";

// class SearchBar extends Component {

//   render() {
//     const {className, placeholder, onChangeHandler} = this.props;

//     return (
//       <input
//         className={`search-box ${className}`}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

// export default SearchBar;
