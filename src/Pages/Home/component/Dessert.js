import React, { Component } from 'react';
import CardList from './Card/CardList';

const CARD_WIDTH = 234;

class Dessert extends Component {
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
          <p>디저트</p>
        </div>
        <div className="slideContainer">
          <div
            className="pdCardList"
            style={{
              transform: `translateX(${this.state.transLateX}px)`,
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
                    transLateX={this.state.transLateX}
                    badge={dessert.badge}
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
