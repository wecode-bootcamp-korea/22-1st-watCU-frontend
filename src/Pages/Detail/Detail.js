import React, { Component } from 'react';
import CategoryImage from './CategoryImage/CategoryImage';
import './Detail.scss';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.itemRef = React.createRef();
    this.state = {
      transFormPosition: 0,
    };
  }

  handleNextSlider = () => {
    const sliderElement = this.sliderRef.current;
    const itemElement = this.itemRef.current;
    const itemWidth = Math.ceil(itemElement.getBoundingClientRect().width);

    console.log(sliderElement.getElementsByClassName('anotherItem'));

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
      },
      () => {
        sliderElement.style.transform = `translate(${this.state.transFormPosition}px)`;
        console.log(this.state.transFormPosition);
      }
    );
  };

  handlePrevSlider = () => {
    const sliderElement = this.sliderRef.current;
    const itemElement = this.itemRef.current;
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
        console.log(this.state.transFormPosition);
      }
    );
  };

  render() {
    return (
      <>
        <CategoryImage />

        <div className="introContainer">
          <div className="introContents">
            <div className="introText">
              <h1>코카콜라(Cocacola)</h1>
              <div className="classification">음료/탄산음료</div>

              <div className="buttons">
                <div className="leftButton">
                  <button className="eatButton">
                    <img alt="plus" src="/images/detail/plus.png" />
                    <span>먹고싶어요</span>
                  </button>
                  <button className="moreButton">
                    <img alt="arrow_down" src="/images/detail/arrow_down.png" />
                  </button>
                </div>
                <div className="rightButton">
                  <button className="evaluationButton">평가하기</button>
                </div>
              </div>
            </div>
            <img
              className="postImage"
              alt="drink"
              src="https://images.unsplash.com/photo-1607929680208-0528b0039b43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>

        <div className="main">
          <div className="itemIntroduce">
            <div className="itemPrice">
              <h2>상품 가격</h2>
              <h3>가격 : 1,200원</h3>
            </div>
            <div className="anotherItemContainer">
              <h2>상품의 다른이미지</h2>
              <div className="anotherItemWrapper">
                <div className="anotherItemList" ref={this.sliderRef}>
                  <div className="anotherItem" ref={this.itemRef}>
                    <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                  </div>
                  <div className="anotherItem">
                    <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                  </div>
                  <div className="anotherItem">
                    <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                  </div>
                  <div className="anotherItem">
                    <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                  </div>
                  <div className="anotherItem">
                    <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                  </div>
                  <div className="anotherItem">
                    <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                  </div>
                  <div className="anotherItem">
                    <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                  </div>
                </div>
              </div>
              <div className="prevButton">
                <button onClick={this.handlePrevSlider}>
                  <img src="/images/detail/left_arrow_angle.png" />
                </button>
              </div>
              <div className="nextButton">
                <button onClick={this.handleNextSlider}>
                  <img src="/images/detail/right_arrow_angle.png" />
                </button>
              </div>
            </div>

            <div className="similarItemContainer">
              <h2>비슷한 상품</h2>
              <div className="similarItemList">
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1531384370597-8590413be50a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
                  <h3>펩시(pepsi)</h3>
                  <h4>가격:1,400원</h4>
                  <h4 className="smallCategoryText">음료</h4>
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1531384370597-8590413be50a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
                  <h3>펩시(pepsi)</h3>
                  <h4>가격:1,400원</h4>
                  <h4 className="smallCategoryText">음료</h4>
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1531384370597-8590413be50a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
                  <h3>펩시(pepsi)</h3>
                  <h4>가격:1,400원</h4>
                  <h4 className="smallCategoryText">음료</h4>
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1531384370597-8590413be50a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
                  <h3>펩시(pepsi)</h3>
                  <h4>가격:1,400원</h4>
                  <h4 className="smallCategoryText">음료</h4>
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1531384370597-8590413be50a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
                  <h3>펩시(pepsi)</h3>
                  <h4>가격:1,400원</h4>
                  <h4 className="smallCategoryText">음료</h4>
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1531384370597-8590413be50a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
                  <h3>펩시(pepsi)</h3>
                  <h4>가격:1,400원</h4>
                  <h4 className="smallCategoryText">음료</h4>
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1531384370597-8590413be50a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
                  <h3>펩시(pepsi)</h3>
                  <h4>가격:1,400원</h4>
                  <h4 className="smallCategoryText">음료</h4>
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1531384370597-8590413be50a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
                  <h3>펩시(pepsi)</h3>
                  <h4>가격:1,400원</h4>
                  <h4 className="smallCategoryText">음료</h4>
                </div>
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
