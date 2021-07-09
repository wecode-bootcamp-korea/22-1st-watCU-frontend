import React, { Component } from 'react';
import AllCard from './Card/AllCard';

import '../Home.scss';

class All extends Component {
  constructor() {
    super();

    this.state = {
      // allList: [],
      transLate: 0,
    };
  }

  //   // componentDidMount() {
  //   //   fetch('http://10.58.6.205:8000/products?category=전체', {
  //   //     method: 'GET',
  //   //   })
  //   //     .then(res => res.json())
  //   //     .then(data => {
  //   //       this.setState({
  //   //         allList: data.results,
  //   //       });
  //   //     });
  //   }

  handleSlideLeft = () => {
    console.log('prev');
    const { transLate } = this.state;

    if (transLate !== 0) {
      this.setState({
        transLate: transLate + 720,
      });
    }
  };

  handleSlideRight = () => {
    console.log('next');
    const { transLate } = this.state;

    if (transLate > -1441) {
      this.setState({
        transLate: transLate - 720,
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
          <p>전체 카테고리 순위별</p>
        </div>
        <div className="slideContainer">
          <div>
            <AllCard transLate={this.state.transLate} />
            {/* {this.state.allList &&
            this.state.allList.map(all => {
              return (
                <>
                  <AllCard
                    key={all.product_id}
                    productBadge={all.product_badge}
                    categoryName={all.category_name}
                    koreanName={all.korean_name}
                    englishName={all.english_name}
                    productId={all.product_id}
                    price={all.price}
                    description={all.description}
                    imageUrl={all.image_url}
                    averageRating={all.average_rating}
                  />
                </>
              );
            })} */}
          </div>
        </div>
      </div>
    );
  }
}

export default All;
