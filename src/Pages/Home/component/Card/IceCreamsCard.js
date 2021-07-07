import React, { Component } from 'react';

class IceCreamsCard extends Component {
  render() {
    return (
      <>
        <div className="productInfo">
          <span className="pdBadge">
            <p>1</p>
          </span>
          <img alt="Product_image" src="images/test-image.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>2</p>
          </span>
          <img alt="Product_image" src="images/test-image.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>3</p>
          </span>
          <img alt="Product_image" src="images/test-image.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>4</p>
          </span>
          <img alt="Product_image" src="images/test-image.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>5</p>
          </span>
          <img alt="Product_image" src="images/test-image.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
      </>
    );
  }
}

export default IceCreamsCard;

// <ul className="productInfo">
//   <li>
//     <img alt="Product_image" src="images/test-image.jpg" />
//   </li>
//   <li>{this.props.productName}</li>
//   <li>{this.props.price}</li>
//   <li>{this.props.star}</li>
// </ul>
