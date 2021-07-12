import React, { Component } from 'react';

// ##LIBRARY
import { RiArrowDownSFill } from 'react-icons/ri';
import { withRouter } from 'react-router-dom';

// ##APIKEY(DEFAULT)
import { CATEGORY_FOODS_APIKEY } from '../../Config';

// ##COMPONENTS
import TabList from './TabList/TabList';
import Contents from './Contents/Contents';

// ##STYLES
import './Evaluating.scss';

const LIMIT = 9;

class Evaluating extends Component {
  constructor() {
    super();

    this.state = {
      toggleState: 0,
      tabLists: ['먹거리', '음료', '디저트'],
      contents: [],
    };
  }

  componentDidMount = () => {
    fetch(CATEGORY_FOODS_APIKEY)
      .then(res => res.json())
      // .then(res => console.log(`res`, res));
      .then(res =>
        this.setState({
          contents: res.results,
        })
      );
  };

  handleClick = (tabList, i) => {
    this.setState({
      toggleState: i,
    });
    if (tabList === this.state.tabLists[i]) {
      fetch(`http://10.58.6.40:8000/products?category=${tabList}`)
        .then(res => res.json())
        .then(res =>
          this.setState({
            contents: res.results,
          })
        );
    }
  };
  handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    const checkHeigth = scrollHeight - clientHeight;
    const query = `limit=${LIMIT}`;

    if (checkHeigth === scrollTop) {
      // this.props.history.push(`/evaluating/${query}`);
      // let category = this.state.contents[0].category_name;
      // console.log(`category`, category);
    }
  };

  componentDidUpdate = () => {
    // console.log(`this.props.history.location`, this.props.history.location);
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
          <div className="contentsBox" onScroll={this.handleScroll}>
            {contents.map((content, i) => {
              return <Contents contents={content} key={content.product_id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Evaluating);
