import React, { Component } from 'react';
import './SimilarItem.scss';

export default class SimilarItem extends Component {
  render() {
    const { image, koreanName, price, categoryName } = this.props;

    return (
      <div className="similarItem">
        <div className="imageEffectWarpper">
          <img src={image} />
        </div>
        <h3>{koreanName}</h3>
        <h4>{price}</h4>
        <h4 className="smallCategoryText">{categoryName}</h4>
      </div>
    );
  }
}
