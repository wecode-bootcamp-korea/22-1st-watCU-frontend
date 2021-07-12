import React, { Component } from 'react';
// import AllCard from './Card/AllCard';
import CardList from './Card/CardList';

class All extends Component {
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
