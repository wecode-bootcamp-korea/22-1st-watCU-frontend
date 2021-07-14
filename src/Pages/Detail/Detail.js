import React, { Component } from 'react';
import CategoryImage from './CategoryImage/CategoryImage';
import Slider from './Slider/Slider';
import SimilarItem from './SimilarItem/SimilarItem';
import WantEatContainer from './WantEatContainer/WantEatContainer';
import EvaluationContainer from './EvaluationContainer/EvaluationContainer';
import StarRating from '../../Components/Star/StarRating/StarRating';
import StarGraph from '../../Components/Star/StarGraph/StarGraph';
import ProductModal from '../../Components/ProductModal/ProductModal';
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
      userInfo: [],
      isModalOn: false,
      isSmallerThanMaxWidth: this.maxWidth > window.innerWidth,
    };
  }

  callEachDataApi = () => {
    fetch(
      `http://10.58.3.228:8000/products/${this.props.match.params.productId}`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          eachDatalist: data.result,
        })
      )
      .then(() =>
        fetch(
          `http://10.58.3.228:8000/products?category=${this.state.eachDatalist.category_name}&product_id=${this.props.match.params.productId}`
        )
          .then(res => res.json())
          .then(data =>
            this.setState({
              categoryDatalist: data.results,
            })
          )
      );
  };

  callStarGraphApi = () => {
    fetch('http://10.58.3.228:8000/ratings/products/1/graph')
      .then(res => res.json())
      .then(data =>
        this.setState({
          userInfo: data.results,
        })
      );
  };

  resizeWindow = e => {
    // console.log(e.target.innerWidth);
    this.setState({
      isSmallerThanMaxWidth: this.maxWidth > e.target.innerWidth,
    });
  };

  goToModal = () => {
    this.setState({
      isModalOn: true,
    });

    // setTimeout(() => {
    //   this.setState({ isModalOn: false });
    // }, 3000);
  };
  closeModal = () => {
    this.setState({
      isModalOn: false,
    });
  };

  componentDidMount = () => {
    this.callEachDataApi();
    this.callCategoryDataApi();
    this.callStarGraphApi();

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

    console.log(this.state.isModalOn);

    return (
      <>
        {this.state.isModalOn && (
          <ProductModal
            src={main_image_url}
            korean_name={korean_name}
            price={price}
            closeModal={this.closeModal}
          />
        )}

        <CategoryImage image={category_image_url} />

        <div className="introContainer">
          <div className="introContents">
            <div className="introText">
              <h1>
                {korean_name}
                {`(${english_name})`}
              </h1>
              <div className="classification">
                {`${category_name} / 평균 ★${average_rating}`}
              </div>

              <div className="starRatingContainer">
                <StarRating
                  size="60"
                  callStarGraphApi={this.callStarGraphApi}
                  callEachDataApi={this.callEachDataApi}
                />
              </div>

              <div className="buttons">
                <div className="want" onClick={this.goToModal}>
                  <WantEatContainer />
                </div>
                <div className="evaluation">
                  <EvaluationContainer />
                </div>
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

            <div className="starGraphContainer">
              <h2>별점 그래프</h2>
              <h3>{`평균 ★${average_rating}`}</h3>
              <div className="starGraph">
                <StarGraph userInfo={this.state.userInfo} />
              </div>
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
