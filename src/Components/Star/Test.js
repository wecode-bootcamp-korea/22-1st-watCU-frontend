import React, { Component } from 'react';
import StarRating from './StarRating/StarRating';

export default class Test extends Component {
  render() {
    return (
      <>
        <div>Hello react!</div>
        <div>
          <StarRating size="60" />
        </div>
      </>
    );
  }
}
