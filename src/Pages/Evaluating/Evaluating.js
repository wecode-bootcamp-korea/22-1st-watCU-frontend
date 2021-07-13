import React, { Component } from 'react';

// ##LIBRARY
import { RiArrowDownSFill } from 'react-icons/ri';
import { withRouter } from 'react-router-dom';

// ##APIKEY(DEFAULT)
import { BASE_URL2 } from '../../Config';

// ##COMPONENTS
import TabList from './TabList/TabList';
import Contents from './Contents/Contents';

// ##STYLES
import './Evaluating.scss';

const LIMIT = 5;

class Evaluating extends Component {
  constructor() {
    super();

    this.state = {
      toggleState: 0,
      tabLists: ['먹거리', '음료', '디저트'],
      contents: [],
      count: 1,
      ratingCount: '',
    };
  }

  componentDidMount = () => {
    const query = `limit=${LIMIT}&offset=0`;
    this.props.history.push(`/evaluating?먹거리`);
    fetch(`${BASE_URL2}?category=먹거리&${query}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          contents: res.results,
          ratingCount: res.rating_count,
        })
      );
  };

  handleClick = (tabList, i) => {
    const query = `limit=${LIMIT}&offset=0`;

    this.props.history.push(`/evaluating?${tabList}`);

    this.setState({
      toggleState: i,
    });
    if (tabList === this.state.tabLists[i]) {
      fetch(`${BASE_URL2}?category=${tabList}&${query}`)
        .then(res => res.json())
        .then(res =>
          this.setState({
            contents: res.results,
            ratingCount: res.rating_count,
          })
        );
    }
  };
  handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    const { count } = this.state;

    const checkHeigth = scrollHeight - clientHeight;

    if (checkHeigth === scrollTop) {
      //지금위치랑 탭 의 위치를 파악해서 페이지 이동을 하고 이동을 하면 fetch 해야한다. componentDidUpdate 에서
      // fetch 할때 조건문을 줘야하는데 이전 프롭스와 같을때만 해줘야한다는 뭔가 조건을 줘야한다.

      this.props.history.push(
        `/evaluating${this.props.history.location.search}`
      );

      this.setState({
        count: count + 1,
      });
    }
  };

  // componentDidUpdate = (prevProps, _) => {
  //   const { count } = this.state;
  //   const query = `limit=${LIMIT}&offset=${count * 5}`;

  //   if (prevProps.location.search !== this.props.location.search) {
  //     fetch(`${BASE_URL2}?category=&${this.props.location.search}&${query}`)
  //       .then(res => res.json())
  //       .then(res =>
  //         this.setState({
  //           contents: res.results,
  //         })
  //       );
  //   }
  // };

  render() {
    const { toggleState, tabLists, contents, ratingCount } = this.state;
    return (
      <div className="bg">
        <div className="container">
          <div className="top">
            <h2>{ratingCount}</h2>
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
