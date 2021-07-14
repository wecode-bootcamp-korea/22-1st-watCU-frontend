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

// const TAB_LIST = {
//   먹거리: 0,
//   음료: 1,
//   디저트: 2,
// };

// const TAB_NAME = {
//   foods: '먹거리',
//   drinks: '음료',
//   deserts: '디저트',
// };

class Evaluating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // toggleState: TAB_LIST[this.props.location.search.split('=')[1]],
      toggleState: '',
      tabLists: ['먹거리', '음료', '디저트'],
      contents: [],
      count: 0,
      ratingCount: '',
      isLoading: true,
    };
  }

  componentDidMount = () => {
    this.setState({
      isLoading: true,
    });
    // const defaultQueryString = this.props.location.search || '?category=먹거리';
    // console.log(`defaultQueryString`, defaultQueryString);
    const query = `limit=${LIMIT}&offset=0`;
    // fetch(`${BASE_URL2}${defaultQueryString}&${query}`)
    fetch(`${BASE_URL2}?category=먹거리&${query}`)
      .then(res => res.json())
      .then(res => {
        this.props.history.push('/evaluating?category=먹거리');
        console.log(`res`, res);
        this.setState({
          // toggleState: TAB_LIST[this.props.location.search.split('=')[1]],
          isLoading: false,
          toggleState: '먹거리',
          contents: res.results,
          ratingCount: res.rating_count,
        });
      });
  };

  handleClick = (tabList, i) => {
    const query = `limit=${LIMIT}&offset=0`;
    this.props.history.push(`/evaluating?category=${tabList}`);
    this.setState({
      count: 0,
    });

    // this.setState({
    //   toggleState: i,
    // });
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
    // const checkHeigth = scrollHeight - clientHeight;
    // console.log(`scrolltop`, scrollTop);
    // console.log(`clientHeight`, clientHeight);
    // console.log(`scrollHeight`, scrollHeight);

    // const category = this.props.location.search.split('=')[1];
    const query = `limit=${LIMIT}&offset=${count}`;

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log(`this.props.loaction.search`, this.props.location.search);
      this.setState({
        count: count + 1,
      });
      this.setState({
        isLoading: true,
      });
      //지금위치랑 탭 의 위치를 파악해서 페이지 이동을 하고 이동을 하면 fetch 해야한다. componentDidUpdate 에서
      // fetch 할때 조건문을 줘야하는데 이전 프롭스와 같을때만 해줘야한다는 뭔가 조건을 줘야한다.
      // this.props.history.push(
      //   `/evaluating${this.props.history.location.search}`
      // );
      // fetch(`${BASE_URL2}${this.props.location.search}&${query}`)
      fetch(`${BASE_URL2}${this.props.location.search}&${query}`)
        .then(res => res.json())
        .then(res => {
          console.log(`res`, res);
          this.setState({
            // toggleState: TAB_LIST[category],
            isLoading: false,
            contents: [...this.state.contents, res.results],
            // contents: [...this.state.contents, res.results],
          });
        });
    }
  };
  // };

  componentDidUpdate = (prevProps, _) => {
    // const { count } = this.state;
    // const category = this.props.location.search.split('=')[1];
    // const query = `limit=${LIMIT}&offset=${0}`;

    if (prevProps.location.search !== this.props.location.search) {
      this.setState({
        toggleState: this.props.location.search.split('=')[1],
      });
    }

    // if (prevProps.location.search !== this.props.location.search) {
    //   // this.setState({
    //   //   toggleState: TAB_LIST[category],
    //   // });
    //   console.log(`${BASE_URL2}${this.props.location.search}&${query}`);
    //   fetch(`${BASE_URL2}${this.props.location.search}&${query}`)
    //     .then(res => res.json())
    //     .then(res => {
    //       console.log(`res.results`, res);
    //       this.setState({
    //         toggleState: TAB_LIST[category],
    //         contents: res.results,
    //       });
    //     });
    // }
  };

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
              return (
                <Contents
                  contents={content}
                  key={content.product_id}
                  isLoading={this.state.isLoading}
                />
              );
            })}
            {this.state.isLoading ? <h3>Loading...</h3> : null}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Evaluating);
