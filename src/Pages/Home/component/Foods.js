import React, { Component } from 'react';
import CardList from './Card/CardList';

class Foods extends Component {
  constructor() {
    super();

    this.state = {
      transLate: 0,
    };
  }

  handleSlideLeft = () => {
    const { transLate } = this.state;

    if (transLate !== 0) {
      this.setState({
        transLate: transLate + 704,
      });
    }
  };

  handleSlideRight = () => {
    const { transLate } = this.state;

    if (transLate > -3000) {
      this.setState({
        transLate: transLate - 704,
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
              transform: `translateX(${this.state.transLate}px)`,
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
                    transLate={this.state.transLate}
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
