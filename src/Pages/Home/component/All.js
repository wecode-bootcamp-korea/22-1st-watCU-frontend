import React, { Component } from 'react';
import AllCard from './Card/AllCard';
import '../Home.scss';

class All extends Component {
  constructor() {
    super();

    this.state = {
      allList: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.2.238:8000/products?category=전체', {
      method: 'GET',
    })
      .then(res => res.json())
      // .then(results => console.log(results))
      .then(data => {
        this.setState({
          allList: data.results,
        });
      });
  }

  render() {
    console.log(this.state.allList);

    return (
      <div className="categoryContainer">
        <div className="categoryTitle">
          <p>전체 카테고리 순위별</p>
        </div>
        <div className="pdCardList">
          {this.state.allList &&
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
            })}
        </div>
      </div>
    );
  }
}

export default All;
