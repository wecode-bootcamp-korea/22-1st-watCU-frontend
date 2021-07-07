import React, { Component } from 'react';
import Contents from './Contents';
import './Category.scss';

class Category extends Component {
  constructor() {
    super();

    this.state = {
      contentsList: [],
    };
  }

  componentDidMount() {
    fetch('/data/productData.json', {
      method: 'GET',
    })
      .then(red => red.json())
      .then(data => {
        this.setState({
          contentsList: data,
        });
      });
  }

  render() {
    return (
      <div className="categoryContainer">
        <div className="categoryTitle">
          <p>전체 인기 순위</p>
        </div>
        <div className="contentsList">
          {this.state.contentsList.map(content => {
            return (
              <Contents
                key={content.id}
                productName={content.productName}
                price={content.price}
                star={content.star}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Category;
