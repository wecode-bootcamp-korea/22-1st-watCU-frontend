import React, { Component } from 'react';

class AllCard extends Component {
  render() {
    console.log('자식 컴포넌트에서 >>>', this.props.transLate);
    return (
      <div
        style={{ transform: `translateX(${this.props.transLate}px)` }}
        className="pdCardList"
      >
        {/* <div className="productInfo">
          <span className="pdBadge">
            <p>{this.props.productBadge}</p>
          </span>d
          <img alt="Product_image" src={this.props.imageUrl} />
          <div className="pdNameText">{this.props.koreanName}</div>
          <div className="pdPrice">{this.props.price}</div>
          <div className="pdStar">별점 ★ 4.5</div>
        </div> */}
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
          <img alt="Product_image" src="images/test-image2.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>3</p>
          </span>
          <img alt="Product_image" src="images/test-image3.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>4</p>
          </span>
          <img alt="Product_image" src="images/test-image4.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>5</p>
          </span>
          <img alt="Product_image" src="images/test-image5.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>6</p>
          </span>
          <img alt="Product_image" src="images/test-image6.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>7</p>
          </span>
          <img alt="Product_image" src="images/test-image7.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>8</p>
          </span>
          <img alt="Product_image" src="images/test-image8.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>9</p>
          </span>
          <img alt="Product_image" src="images/test-image9.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>10</p>
          </span>
          <img alt="Product_image" src="images/test-image.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>11</p>
          </span>
          <img alt="Product_image" src="images/test-image.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>12</p>
          </span>
          <img alt="Product_image" src="images/test-image.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
        <div className="productInfo">
          <span className="pdBadge">
            <p>13</p>
          </span>
          <img alt="Product_image" src="images/test-image.jpg" />
          <div className="pdNameText">상품명</div>
          <div className="pdPrice">가격</div>
          <div className="pdStar">평점</div>
        </div>
      </div>
    );
  }
}

export default AllCard;
