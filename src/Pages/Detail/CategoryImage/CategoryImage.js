import React, { Component } from 'react';
import './CategoryImage.scss';

export default class CategoryImage extends Component {
  render() {
    return (
      <div className="categoryImageBox">
        <div className="blackBlock">block</div>
        <div className="categoryImageEffectBox">
          <div className="blurEffectLeft"></div>
          <img
            alt="drink"
            src="https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80"
          />
          <div className="blurEffectRight"></div>
        </div>
        <div className="blackBlock">block</div>
      </div>
    );
  }
}
