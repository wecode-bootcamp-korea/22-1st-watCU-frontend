import React, { Component } from 'react';
import DrinksCard from './Card/DrinksCard';
import '../Home.scss';

class Drinks extends Component {
  render() {
    return (
      <div className="categoryContainer">
        <div className="categoryTitle">
          <p>음료</p>
        </div>
        <div className="pdCardList">
          <DrinksCard />
        </div>
      </div>
    );
  }
}

export default Drinks;
