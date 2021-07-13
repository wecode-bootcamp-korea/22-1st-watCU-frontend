import React, { Component } from 'react';
import CategoryImage from './CategoryImage/CategoryImage';
import Slider from './Slider/Slider';
import SimilarItem from './SimilarItem/SimilarItem';
import WantEatContainer from './WantEatContainer/WantEatContainer';
import EvaluationContainer from './EvaluationContainer/EvaluationContainer';
import './Detail.scss';

export default class Detail extends Component {
  maxWidth = 990;

  constructor() {
    super();
    this.sliderRef = React.createRef();
    this.itemRef = React.createRef();
    this.state = {
      eachDatalist: {},
      categoryDatalist: [],
      eachDatalist: {},
      isSmallerThanMaxWidth: this.maxWidth > window.innerWidth,
    };
  }

  callEachDataApi = () => {
    fetch('http://10.58.1.82:8000/products/1')
      .then(res => res.json())
      .then(data =>
        this.setState({
          eachDatalist: data.result,
        })
      );
  };

  callCategoryDataApi = () => {
    fetch('http://10.58.1.82:8000/products?category=음료&product_id=1')
      .then(res => res.json())
      .then(data =>
        this.setState({
          categoryDatalist: data.results,
        })
      );
  };

  resizeWindow = e => {
    // console.log(e.target.innerWidth);
    this.setState({
      isSmallerThanMaxWidth: this.maxWidth > e.target.innerWidth,
    });
  };

  componentDidMount = () => {
    this.callEachDataApi();
    this.callCategoryDataApi();

    window.addEventListener('resize', this.resizeWindow, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.resizeWindow, false);
  };

  render() {
    const { categoryDatalist, isSmallerThanMaxWidth } = this.state;

    const {
      category_image_url,
      korean_name,
      english_name,
      category_name,
      average_rating,
      price,
      main_image_url,
      sub_image_url,
      description,
    } = this.state.eachDatalist;

    return (
      <>
        <CategoryImage image={category_image_url} />

        <div className="introContainer">
          <div className="introContents">
            <div className="introText">
              <h1>
                {korean_name}
                {`(${english_name})`}
              </h1>
              <div className="classification">
                {`${category_name} 평점${average_rating}`}
              </div>
              <div className="buttons">
                <WantEatContainer />
                <EvaluationContainer />
              </div>
            </div>
            <img className="postImage" alt="drink" src={main_image_url} />
          </div>
        </div>

        <div className="main">
          <div className="itemIntroduce">
            {isSmallerThanMaxWidth && (
              <div className="itemInfo">
                <h2>상품 정보</h2>
                <h3>{description}</h3>
              </div>
            )}

            <div className="itemPrice">
              <h2>상품 가격</h2>
              <h3>{`${price}원`}</h3>
            </div>
            <Slider title="상품의 다른이미지" subImage={sub_image_url} />
            <div className="similarItemContainer">
              <h2>비슷한 상품</h2>
              <div className="similarItemList">
                {categoryDatalist.map((similar, index) => {
                  return (
                    <SimilarItem
                      key={index}
                      image={similar.image_url}
                      koreanName={similar.korean_name}
                      englishName={similar.english_name}
                      categoryName={similar.category_name}
                      price={similar.price}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {!isSmallerThanMaxWidth && (
            <div className="itemEtc">
              <div className="itemInfo">
                <h2>상품 정보</h2>
                <p>{description}</p>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}
