import { Component } from "react";
import "./search-bar.style.css";

class SearchBar extends Component {
    
  render() {
    const {className, placeholder, onChangeHandler} = this.props;

    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBar;
