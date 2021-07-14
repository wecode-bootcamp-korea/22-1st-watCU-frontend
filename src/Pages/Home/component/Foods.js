import React, { Component } from 'react';
import CardList from './Card/CardList';

const CARD_WIDTH = 234;

class Foods extends Component {
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

    if (transLateX > -3000) {
      this.setState({
        transLateX: transLateX - CARD_WIDTH * 5,
      });
    }
  };

  render() {
    return (
      <div className="categoryContainer">
        <button className="slideBtnLeft" onClick={this.handleSlideLeft}>
          prev
        </button>
        <button className="slideBtnRight" onClick={this.handleSlideRight}>
          next
        </button>
        <div className="categoryTitle">
          <p>음식</p>
        </div>
        <div className="slideContainer">
          <div
            className="pdCardList"
            style={{
              transform: `translateX(${this.state.transLateX}px)`,
            }}
          >
            {this.props.foodList &&
              this.props.foodList.map(food => {
                return (
                  <CardList
                    key={food.product_id}
                    categoryName={food.category_name}
                    koreanName={food.korean_name}
                    englishName={food.english_name}
                    productId={food.product_id}
                    price={food.price}
                    imageUrl={food.image_url}
                    averageRating={food.average_rating}
                    transLateX={this.state.transLateX}
                    badge={food.badge}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Foods;
