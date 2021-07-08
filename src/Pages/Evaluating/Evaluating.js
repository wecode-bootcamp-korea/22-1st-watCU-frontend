import React, { Component } from 'react';
import './Evaluating.scss';

import { RiArrowDownSFill } from 'react-icons/ri';

import Foods from './FoodsComponent/Foods';
import Drinks from './DrinksComponent/Drinks';
import Deserts from './DesertsComponent/Deserts';

class Evaluating extends Component {
  constructor() {
    super();

    this.state = {
      toggleState: 1,
    };
  }

  toggleTab = idx => {
    this.setState({
      toggleState: idx,
    });
  };

  render() {
    const { toggleState } = this.state;
    return (
      <div className="bg">
        <div className="container">
          <div className="top">
            <h2>3</h2>
            <p>조금씩 당신의 취향을 알아가는 중입니다.</p>
            <ul className="tabs">
              <li
                className={
                  this.state.toggleState === 1 ? `tab tabActive` : `tab`
                }
                onClick={() => {
                  this.toggleTab(1);
                }}
              >
                식사
              </li>
              <li
                className={
                  this.state.toggleState === 2 ? `tab tabActive` : `tab`
                }
                onClick={() => {
                  this.toggleTab(2);
                }}
              >
                음료
              </li>
              <li
                className={
                  this.state.toggleState === 3 ? `tab tabActive` : `tab`
                }
                onClick={() => {
                  this.toggleTab(3);
                }}
              >
                디저트
              </li>
            </ul>
            <p className="category">
              <RiArrowDownSFill />
              카테고리
            </p>
          </div>
          <div className="contentsBox">
            <Foods toggleState={toggleState} />
            {/* <Drinks toggleState={toggleState} /> */}
            {/* <Deserts toggleState={toggleState} /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Evaluating;
