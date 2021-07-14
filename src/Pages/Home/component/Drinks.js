import React, { Component } from 'react';

import CardList from './Card/CardList';

class Drinks extends Component {
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
        transLate: transLate + 234 * 5,
      });
    }
  };

  handleSlideRight = () => {
    const { transLate } = this.state;

    if (transLate > -3000) {
      this.setState({
        transLate: transLate - 234 * 5,
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
          <p>음료</p>
        </div>
        <div className="slideContainer">
          <div
            className="pdCardList"
            style={{
              transform: `translateX(${this.state.transLate}px)`,
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

export default Drinks;
