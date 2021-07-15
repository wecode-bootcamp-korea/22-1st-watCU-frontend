import React, { Component } from 'react';

// ##LIBRARY
import { RiArrowDownSFill } from 'react-icons/ri';
import { withRouter } from 'react-router-dom';

// ##COMPONENTS
import TabList from './TabList/TabList';
import Contents from './Contents/Contents';
import ProductModal from '../../Components/ProductModal/ProductModal';

// ##STYLES
import './Evaluating.scss';

// ##APIKEY(DEFAULT)
import { BASE_URL } from '../../Config';
const privateAPIKEY = `${BASE_URL}/products/private`;

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
      isModalOpen: false,
      productId: '',
      currentSelectedIdx: 0,
    };
  }

  componentDidMount = () => {
    const query = `limit=${LIMIT}&offset=0`;
    fetch(`${privateAPIKEY}?category=${this.state.tabLists[0]}&${query}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          toggleState: 0,
          contents: res.results,
          ratingCount: res.rating_count,
        });
      });
  };

  // ## TAB 클릭시 그에 맞는 fetch 함수
  handleClick = (tabList, i) => {
    const query = `limit=${LIMIT}&offset=0`;

    this.setState({
      count: 0,
      contents: [],
      toggleState: i,
    });

    if (tabList === this.state.tabLists[i]) {
      fetch(`${privateAPIKEY}?category=${tabList}&${query}`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            contents: res.results,
            ratingCount: res.rating_count,
          });
        });
    }
  };

  // ## SCROLL이 바닥에 닿았을때 무한스크롤 함수
  handleScroll = e => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    const { count } = this.state;
    const query = `limit=${LIMIT}&offset=${count + 1}`;

    if (scrollTop !== 0 && scrollTop + clientHeight === scrollHeight) {
      this.setState({
        count: count + 1,
      });
      setTimeout(() => {
        fetch(
          `${privateAPIKEY}?category=${
            this.state.tabLists[this.state.toggleState]
          }&${query}`,
          {
            headers: {
              Authorization: localStorage.getItem('token'),
            },
          }
        )
          .then(res => res.json())
          .then(res => {
            this.setState({
              contents: [...this.state.contents, ...res.results],
            });
          });
      }, 1000);
    }
  };

  // ## THREEDOT 클릭시 모달창 열고닫기 함수
  modalOpen = e => {
    console.log(`e`, e);
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  selectItem = idx => {
    this.setState({ currentSelectedIdx: idx });
  };

  render() {
    const { toggleState, tabLists, contents, ratingCount, currentSelectedIdx } =
      this.state;

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
            <p className="category" onClick={() => alert('준비중입니다.')}>
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
                    idx={i}
                    key={i}
                    modalOpen={this.modalOpen}
                    product_id={contents[currentSelectedIdx].product_id}
                  />
                );
              })}
            </ul>
            {this.state.isModalOpen && (
              <ProductModal
                src={contents[currentSelectedIdx].image_url}
                korean_name={contents[currentSelectedIdx].korean_name}
                price={contents[currentSelectedIdx].price}
                closeModal={this.closeModal}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Evaluating);
