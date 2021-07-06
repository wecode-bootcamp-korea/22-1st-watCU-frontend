import React, { Component } from 'react';
import './Detail.scss';

export default class Detail extends Component {
  render() {
    return (
      <>
        <div className="categoryImageBox">
          <div className="blurEffect">blur</div>
          <img
            alt="drink"
            src="https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80"
          />
          <div className="blurEffect">blur</div>
        </div>

        <div className="introContainer">
          <div className="introContents">
            <div className="introText">
              <h1>코카콜라(Cocacola)</h1>
              <div className="classification">음료/탄산음료 평점:5점</div>

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
              <div className="anotherItemList">
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

            <div className="similarItemContainer">
              <h2>비슷한 상품</h2>
              <div className="similarItemList">
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
                </div>
                <div className="similarItem">
                  <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
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
