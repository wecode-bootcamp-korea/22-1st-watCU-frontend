import React, { Component } from 'react';
import IceCreamsCard from './Card/IceCreamsCard';

class IceCreams extends Component {
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
          <p>디저트</p>
        </div>
        <div className="pdCardList">
          <IceCreamsCard />
        </div>
      </div>
    );
  }
}

export default IceCreams;
