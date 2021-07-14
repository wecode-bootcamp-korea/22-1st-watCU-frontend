import React, { Component } from 'react';
import CardList from './Card/CardList';

const CARD_WIDTH = 234;

class Drinks extends Component {
  constructor() {
    super();

    this.state = {
      transLateX: 0,
    };
  }

  handleSlideLeft = () => {
    const { transLateX } = this.state;

    if (transLateX !== 0) {
      this.setState({
        transLateX: transLateX + CARD_WIDTH * 5,
      });
    }
  };

  handleSlideRight = () => {
    const { transLateX } = this.state;

    if (transLateX > -CARD_WIDTH * 5) {
      this.setState({
        transLateX: transLateX - CARD_WIDTH * 5,
      });
    }
  };

  render() {
    return (
      <div className="categoryContainer">
        <div className="slideBtnLeft" onClick={this.handleSlideLeft}>
          <img
            className="arrowLeft"
            alt="slide_arrow_btn_left.svg"
            src={
              process.env.PUBLIC_URL + 'images/slide/slide_arrow_btn_left.svg'
            }
          />
        </div>
        <div className="slideBtnRight" onClick={this.handleSlideRight}>
          <img
            className="arrowRight"
            alt="slide_arrow_btn_right.svg"
            src={
              process.env.PUBLIC_URL + 'images/slide/slide_arrow_btn_right.svg'
            }
          />
        </div>
        <div className="categoryTitle">
          <p>음료</p>
        </div>
        <div className="slideContainer">
          <div
            className="pdCardList"
            style={{
              transform: `translateX(${this.state.transLateX}px)`,
            }}
          >
            {this.props.drinkList &&
              this.props.drinkList.map(drink => {
                return (
                  <CardList
                    key={drink.product_id}
                    categoryName={drink.category_name}
                    koreanName={drink.korean_name}
                    englishName={drink.english_name}
                    productId={drink.product_id}
                    price={drink.price}
                    imageUrl={drink.image_url}
                    averageRating={drink.average_rating}
                    transLateX={this.state.transLateX}
                    badge={drink.badge}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Drinks;
