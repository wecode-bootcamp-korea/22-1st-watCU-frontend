import React, { Component } from 'react';
// import ProductModal from '../../../Components/ProductModal/ProductModal';
import './WantEatContainer.scss';

export default class WantEatContainer extends Component {
  render() {
    return (
      <>
        <div className="wantEatContainer">
          <button className="eatButton">
            <img alt="plus" src="/images/detail/plus.png" />
            <span>먹고싶어요</span>
          </button>
          <button className="moreButton">
            <img alt="arrow_down" src="/images/detail/arrow_down.png" />
          </button>
        </div>
      </>
    );
  }
}
