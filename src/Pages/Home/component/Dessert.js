import React, { Component } from 'react';

import CardList from './Card/CardList';

class Dessert extends Component {
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
          <p>디저트</p>
        </div>
        <div className="slideContainer">
          <div
            className="pdCardList"
            style={{
              transform: `translateX(${this.state.transLate}px)`,
            }}
          >
            {this.props.dessertList &&
              this.props.dessertList.map(dessert => {
                return (
                  <CardList
                    key={dessert.product_id}
                    categoryName={dessert.category_name}
                    koreanName={dessert.korean_name}
                    englishName={dessert.english_name}
                    productId={dessert.product_id}
                    price={dessert.price}
                    imageUrl={dessert.image_url}
                    averageRating={dessert.average_rating}
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

export default Dessert;
