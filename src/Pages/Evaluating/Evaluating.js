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
  constructor(props) {
    super(props);

    this.state = {
      toggleState: 0,
      tabLists: ['먹거리', '음료', '디저트'],
      contents: [],
      count: 0,
      ratingCount: '',
      // isLoading: false,
    };
  }

  componentDidMount = () => {
    console.log(`"comdima"`, 'comdima');
    // console.log(`this.props.locatasffion`, this.props.location);
    // console.log(`this.state.tabLists[0]`, this.state.tabLists[0]);

    // console.log(`${BASE_URL2}?category=${this.state.tabLists[0]}`);
    const query = `limit=${LIMIT}&offset=0`;

    // fetch(`${BASE_URL2}?category=${this.state.tabLists[0]}&${query}`)
    fetch(`${BASE_URL2}?category=${this.state.tabLists[0]}&${query}`)
      .then(res => res.json())
      .then(res => {
        // ##############################################
        // ################여기 1번 문제 ###################
        // ##############################################
        // this.props.history.push('/evaluating?category=먹거리');
        this.setState({
          toggleState: 0,
          contents: res.results,
          ratingCount: res.rating_count,
        });
      });
  };

  handleClick = (tabList, i) => {
    console.log(`"handleClick"`, 'handleClick');
    // ##############################################
    // ################여기 2번 문제 ###################
    // ##############################################
    // console.log(`this.state.count`, this.state.count);
    const query = `limit=${LIMIT}&offset=0`;
    this.setState(
      {
        count: 0,
        contents: [],
        toggleState: i,
      },
      () => {
        // this.props.history.push(`/evaluating?category=${tabList}&${query}`);
      }
    );

    if (tabList === this.state.tabLists[i]) {
      fetch(`${BASE_URL2}?category=${tabList}&${query}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            contents: res.results,
            ratingCount: res.rating_count,
          });
        });
    }
  };

  handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    const { count } = this.state;
    // const qsObject = qsToObject(this.props.location.search);
    // qsObject.offset = count;
    // const newQuery = objectToQs(qsObject);
    const query = `limit=${LIMIT}&offset=${count + 1}`;

    if (scrollTop !== 0 && scrollTop + clientHeight === scrollHeight) {
      this.setState({
        count: count + 1,
      });
      // this.setState({
      //   isLoading: true,
      // });
      setTimeout(() => {
        // console.log(`${BASE_URL2}${this.props.location.search}&${query}`);
        // fetch(`${BASE_URL2}${newQuery}`)
        console.log(`this.state.count`, this.state.count);
        fetch(
          `${BASE_URL2}?category=${
            this.state.tabLists[this.state.toggleState]
          }&${query}`
        )
          .then(res => res.json())
          .then(res => {
            console.log(`this.state.count`, this.state.count);
            this.setState({
              // isLoading: false,
              contents: [...this.state.contents, ...res.results],
            });
          });
      }, 1000);
    }
  };

  // componentDidUpdate = (prevProps, _) => {
  //   if (prevProps.location.search !== this.props.location.search) {
  //     // console.log(`this.state.count`, this.state.count);
  //     // console.log(`this.state.contents`, this.state.contents);
  //     console.log('여기 호출됩ㄴ');

  //     fetch(`${BASE_URL2}${this.props.location.search}`)
  //       .then(res => res.json())
  //       .then(res =>
  //         this.setState({
  //           contents: res.results,
  //           ratingCount: res.rating_count,
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
            <ul className={`contents contentsActive`}>
              {contents.map((content, i) => {
                return (
                  <Contents
                    contents={content}
                    key={i}
                    // isLoading={this.state.isLoading}
                  />
                );
              })}
              {/* {this.state.isLoading ? <h3>Loading...</h3> : null} */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Evaluating);
