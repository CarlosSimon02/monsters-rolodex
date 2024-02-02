import React, { ChangeEvent } from "react";
import "./search-bar.styles.css";

type SearchBarProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBarProps) => {
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
