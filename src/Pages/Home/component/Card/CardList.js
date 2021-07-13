import React, { Component } from 'react';
import { withRouter } from 'react-router';

class CardList extends Component {
  goToDetail = () => {
    this.props.history.push(`/detail/${this.props.productId}`);
  };

  render() {
    return (
      <div className="pdCardList">
        <div className="productInfo" onClick={this.goToDetail}>
          <span className="pdBadge">
            <p>1</p>
          </span>
          <div className="pdImg">
            <img alt="Product_image" src={this.props.imageUrl} />
          </div>
          <div className="pdNameText">{this.props.koreanName}</div>
          <div className="pdPrice">{this.props.price}</div>
          <div className="pdStar">별점 ★ {this.props.averageRating}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardList);
