import React, { Component } from 'react';
import './CategoryImage.scss';

export default class CategoryImage extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="categoryImageBox">
        <div className="blackBlock">block</div>
        <div className="categoryImageEffectBox">
          <div className="blurEffectLeft"></div>
          <img alt="drink" src={this.props.image} />
          <div className="blurEffectRight"></div>
        </div>
        <div className="blackBlock">block</div>
      </div>
    );
  }
}
