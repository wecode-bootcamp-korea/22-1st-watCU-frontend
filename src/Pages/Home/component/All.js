import React, { Component } from 'react';
import CardList from './Card/CardList';

class All extends Component {
  constructor() {
    super();

    this.state = {
      transLate: 0,
      numArr: [0],
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

    if (transLate > -5000) {
      this.setState({
        transLate: transLate - 234 * 5,
      });
    }
  };

  badgeNum = () => {
    const badge = [];
    for (let i = 1; i <= this.props.allList.length; i++) {
      badge.push(i);
    }
    console.log('a', badge);
    this.setState({
      numArr: badge,
    });
  };

  render() {
    this.state.numArr[0] === 0 && this.badgeNum();

    return (
      <div className="categoryContainer">
        <button className="slideBtnLeft" onClick={this.handleSlideLeft}>
          prev
        </button>
        <button className="slideBtnRight" onClick={this.handleSlideRight}>
          next
        </button>
        <div className="categoryTitle">
          <p>전체 카테고리 순위</p>
        </div>
        <div className="slideContainer">
          <div
            className="pdCardList"
            style={{
              transform: `translateX(${this.state.transLate}px)`,
            }}
          >
            {this.props.allList &&
              this.props.allList.map(all => {
                return (
                  <CardList
                    key={all.product_id}
                    categoryName={all.category_name}
                    koreanName={all.korean_name}
                    englishName={all.english_name}
                    productId={all.product_id}
                    price={all.price}
                    imageUrl={all.image_url}
                    averageRating={all.average_rating}
                    transLate={this.state.transLate}
                    // numArr={this.state.numArr}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default All;
