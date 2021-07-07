import React, { Component } from 'react';

class AllCard extends Component {
  render() {
    return (
      <>
        <div className="productInfo">
          <span className="pdBadge">
            <p>{this.props.productBadge}</p>
          </span>
          <img alt="Product_image" src={this.props.imageUrl} />
          <div className="pdNameText">{this.props.koreanName}</div>
          <div className="pdPrice">{this.props.price}</div>
          <div className="pdStar">별점 ★ 4.5</div>
        </div>
      </>
    );
  }
}

export default AllCard;
