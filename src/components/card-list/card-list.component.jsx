import { Component } from "react";
import "./card-list.style.css"

class CardList extends Component {
  render() {
    return (
      <div className="card-wrapper">
        {this.props.monsters.map((monster) => {
          const { id, name,email } = monster;
          return (
            <div key={id} className="card-container">
              <img
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
                alt={`monster ${name}`}
              />
              <h1>{name}</h1>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
