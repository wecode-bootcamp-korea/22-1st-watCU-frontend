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
    };
  }

  componentDidMount = () => {
    this.props.history.push(`/evaluating?음료`);

    fetch(`${BASE_URL2}?category=음료`)
      .then(res => res.json())
      .then(res => console.log(`res`, res));
    // .then(res =>
    //   this.setState({
    //     contents: res.results,
    //   })
    // );
  };

  handleClick = (tabList, i) => {
    const query = `?limit=5&offset=5`;

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
          })
        );
    }
  };
  handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    const checkHeigth = scrollHeight - clientHeight;
    // const query = `?limit=${LIMIT}`;
    let count = 1;
    const query = `?limit=5&offset=${count * 5}`;

    if (checkHeigth === scrollTop) {
      //지금위치랑 탭 의 위치를 파악해서 페이지 이동을 하고 이동을 하면 fetch 해야한다. componentDidUpdate 에서
      // fetch 할때 조건문을 줘야하는데 이전 프롭스와 같을때만 해줘야한다는 뭔가 조건을 줘야한다.

      // this.props.history.push(`/evaluating${query}`);

      // this.props.history.push(`/evaluating/${tabList}?limit=5&offset=5`);
      // let category = this.state.contents[0].category_name;
      // console.log(`category`, category);
      count++;
    }
    console.log(`count`, count);
  };

  componentDidUpdate = (prevProps, _) => {
    if (prevProps.location.search !== this.props.location.search) {
      fetch(`${BASE_URL2}?category=${this.props.location.search}`)
        .then(res => res.json())
        .then(res => console.log(`res`, res));
    }

    // console.log(`this.props.history.location`, this.props.history.location);
    // console.log(`this.props.location`, this.props.location.search);
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
