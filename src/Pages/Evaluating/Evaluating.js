import React, { Component } from 'react';

// ##LIBRARY
import { RiArrowDownSFill } from 'react-icons/ri';

// ##COMPONENTS
import Foods from './FoodsComponent/Foods';
import Drinks from './DrinksComponent/Drinks';
import Deserts from './DesertsComponent/Deserts';
import TabList from './TabList/TabList';

// ##STYLES
import './Evaluating.scss';

class Evaluating extends Component {
  constructor() {
    super();

    this.state = {
      toggleState: 1,
      tabLists: ['All', 'Foods', 'Drinks', 'Deserts'],
    };
  }

  toggleTab = idx => {
    this.setState({
      toggleState: idx,
    });
  };

  render() {
    const { toggleState, tabLists } = this.state;
    return (
      <div className="bg">
        <div className="container">
          <div className="top">
            <h2>3</h2>
            <p>조금씩 당신의 취향을 알아가는 중입니다.</p>
            <ul className="tabs">
              <TabList
                toggleState={toggleState}
                tabLists={tabLists}
                toggleTab={this.toggleTab}
              />
            </ul>
            <p className="category">
              <RiArrowDownSFill />
              카테고리
            </p>
          </div>
          <div className="contentsBox">
            <Foods toggleState={toggleState} />
            <Drinks toggleState={toggleState} />
            <Deserts toggleState={toggleState} />
          </div>
        </div>
      </div>
    );
  }
}
export default Evaluating;
