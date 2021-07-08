import React, { Component } from 'react';
import IceCreamsCard from './Card/IceCreamsCard';
import '../Home.scss';

class IceCreams extends Component {
  render() {
    return (
      <div className="categoryContainer">
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
