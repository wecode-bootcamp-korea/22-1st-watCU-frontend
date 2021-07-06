import React, { Component } from 'react';

class Contents extends Component {
  render() {
    return (
      <ul className="productInfo">
        <li>
          <img alt="Product_image" src="images/test-image.jpg" />
        </li>
        <li>{this.props.productName}</li>
        <li>{this.props.price}</li>
        <li>{this.props.star}</li>
      </ul>
    );
  }
}

export default Contents;
