import React, { Component } from 'react';
import FoodsCard from './Card/FoodsCard';
import '../Home.scss';

class Foods extends Component {
  render() {
    return (
      <div className="categoryContainer">
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
