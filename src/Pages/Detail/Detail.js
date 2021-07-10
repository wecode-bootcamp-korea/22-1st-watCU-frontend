import React, { Component } from 'react';
import CategoryImage from './CategoryImage/CategoryImage';
import Slider from './Slider/Slider';
import SimilarItem from './SimilarItem/SimilarItem';
import WantEatContainer from './WantEatContainer/WantEatContainer';
import EvaluationContainer from './EvaluationContainer/EvaluationContainer';
import './Detail.scss';

export default class Detail extends Component {
  constructor() {
    super();
    this.sliderRef = React.createRef();
    this.itemRef = React.createRef();
    this.state = {
      eachDatalist: {
        sub_image_url: [1, 2, 3, 4, 5, 6, 7],
      },
      categoryDatalist: {
        category_image_url: [1, 2, 3, 4, 5, 6, 7, 8],
      },
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

  render() {
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

            <Slider
              title="상품의 다른이미지"
              subImage={this.state.eachDatalist.sub_image_url}
            />

            <div className="similarItemContainer">
              <h2>비슷한 상품</h2>
              <div className="similarItemList">
                {this.state.categoryDatalist.category_image_url &&
                  this.state.categoryDatalist.category_image_url.map(
                    (similar, index) => {
                      return <SimilarItem key={index} />;
                    }
                  )}
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
