import React, { Component } from 'react';
import CategoryImage from './CategoryImage/CategoryImage';
import AnotherItem from './AnotherItem/AnotherItem';
import SimilarItem from './SimilarItem/SimilarItem';
import WantEatContainer from './WantEatContainer/WantEatContainer';
import EvaluationContainer from './EvaluationContainer/EvaluationContainer';
import './Detail.scss';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.itemRef = React.createRef();
    this.accrodionContent = [];
    this.state = {
      currentIndex: 0,
      transFormPosition: 0,
      eachDatalist: {
        sub_image_url: [1, 2, 3, 4, 5, 6],
      },
      categoryDatalist: {
        category_image_url: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      anotherItemLocation: null,
    };
  }

  // callApi = () => {
  //   fetch('http://10.58.6.205:8000/products/1?page=detail')
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         eachDatalist: data.result,
  //       })
  //     );
  // };

  // componentDidMount = () => {
  //   this.callApi();
  // };

  handleNextSlider = () => {
    const sliderElement = this.sliderRef.current;
    const itemElement = this.itemRef.current;
    if (itemElement) {
      const itemWidth = Math.ceil(itemElement.getBoundingClientRect().width);
      if (
        this.state.transFormPosition ===
        (sliderElement.getElementsByClassName('anotherItem').length - 4) *
          -itemWidth
      ) {
        return;
      }

      this.setState(
        {
          transFormPosition: this.state.transFormPosition - itemWidth,
          anotherItemLocation:
            (sliderElement.getElementsByClassName('anotherItem').length - 4) *
            -itemWidth,
        },
        () => {
          sliderElement.style.transform = `translate(${this.state.transFormPosition}px)`;
        }
      );
    }
  };

  handlePrevSlider = () => {
    const sliderElement = this.sliderRef.current;
    const itemElement = this.itemRef.current;
    if (itemElement) {
      const itemWidth = Math.ceil(itemElement.getBoundingClientRect().width);

      if (this.state.transFormPosition === 0) {
        return;
      }

      this.setState(
        {
          transFormPosition: this.state.transFormPosition + itemWidth,
        },
        () => {
          sliderElement.style.transform = `translate(${this.state.transFormPosition}px)`;
        }
      );
    }
  };

  render() {
    console.log(this.state);
    return (
      <>
        <CategoryImage />

        <div className="introContainer">
          <div className="introContents">
            <div className="introText">
              <h1>
                {this.state.eachDatalist.korean_name}
                {`(${this.state.eachDatalist.english_name})`}
              </h1>
              <div className="classification">
                {this.state.eachDatalist.category_name}
              </div>
              <div className="buttons">
                <WantEatContainer />
                <EvaluationContainer />
              </div>
            </div>
            <img
              className="postImage"
              alt="drink"
              src={this.state.eachDatalist.main_image_url}
            />
          </div>
        </div>

        <div className="main">
          <div className="itemIntroduce">
            <div className="itemPrice">
              <h2>상품 가격</h2>
              <h3>{`${this.state.eachDatalist.price}원`}</h3>
            </div>
            <div className="anotherItemContainer">
              <h2>상품의 다른이미지</h2>
              <div className="anotherItemWrapper">
                <div className="anotherItemList" ref={this.sliderRef}>
                  {this.state.eachDatalist.sub_image_url &&
                    this.state.eachDatalist.sub_image_url.map(
                      (another, key) => {
                        return (
                          <AnotherItem
                            key={key}
                            anotherImage={another}
                            itemRef={this.itemRef}
                          />
                        );
                      }
                    )}
                </div>
              </div>
              {this.state.transFormPosition !== 0 && (
                <button onClick={this.handlePrevSlider}>
                  <div className="prevButton">
                    <img src="/images/detail/left_arrow_angle.png" />
                  </div>
                </button>
              )}

              {this.state.transFormPosition !==
                this.state.anotherItemLocation && (
                <button onClick={this.handleNextSlider}>
                  <div className="nextButton">
                    <img src="/images/detail/right_arrow_angle.png" />
                  </div>
                </button>
              )}
            </div>

            <div className="similarItemContainer">
              <h2>비슷한 상품</h2>
              <div className="similarItemList">
                {this.state.categoryDatalist.category_image_url &&
                  this.state.categoryDatalist.category_image_url.map(() => {
                    return <SimilarItem />;
                  })}
              </div>
            </div>
          </div>
          <div className="itemEtc">
            <div className="itemInfo">
              <h2>상품 정보</h2>
              <p>
                1886년 미국에서 탄생 현재 일평균 10억 잔 이상 팔리고 있는 세계
                대표 청량음료
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
