import React, { Component } from 'react';

// ##LIBRARY
import { RiArrowDownSFill } from 'react-icons/ri';
import { withRouter } from 'react-router-dom';

// ##APIKEY
import { CATEGORY_FOODS_APIKEY } from '../../Config';

// ##COMPONENTS
import All from './AllComponent/All';
import TabList from './TabList/TabList';

// ##STYLES
import './Evaluating.scss';

class Evaluating extends Component {
  constructor() {
    super();

    this.state = {
      toggleState: 0,
      tabLists: ['식사', '음료', '디저트'],
      contents: [],
    };
  }

  componentDidMount = () => {
    fetch(CATEGORY_FOODS_APIKEY)
      .then(res => res.json())
      .then(res =>
        this.setState({
          contents: res.results[0],
        })
      );
  };

  handleClick = (tabList, i) => {
    if (tabList === this.state.tabLists[i]) {
      fetch(`http://172.16.20.115:8000/products?category=${tabList}`)
        .then(res => res.json())
        .then(res =>
          this.setState({
            contents: res.results[0],
          })
        );
    }
  };

  render() {
    const { toggleState, tabLists, contents } = this.state;
    return (
      <div className="bg">
        <div className="container">
          <div className="top">
            <h2>3</h2>
            <p>조금씩 당신의 취향을 알아가는 중입니다.</p>
            <ul className="tabs">
              <TabList
                toggleState={toggleState}
                handleClick={this.handleClick}
                tabLists={tabLists}
              />
            </ul>
            <p className="category">
              <RiArrowDownSFill />
              카테고리
            </p>
          </div>
          <div className="contentsBox">
            <All contents={contents} />
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Evaluating);
