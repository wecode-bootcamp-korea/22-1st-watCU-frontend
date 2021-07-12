import React, { Component } from 'react';
import DrinksCard from './Card/DrinksCard';

class Drinks extends Component {
  render() {
    return (
      <div className="categoryContainer">
        <button className="slideBtnLeft" onClick={this.handleSlideLeft}>
          prev
        </button>
        <button className="slideBtnRight" onClick={this.handleSlideRight}>
          next
        </button>
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
