import React, { Component } from 'react';
import FoodsCard from './Card/FoodsCard';

class Foods extends Component {
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
          <p>푸드</p>
        </div>
        <div className="pdCardList">
          <FoodsCard />
        </div>
      </div>
    );
  }
}

export default Foods;
