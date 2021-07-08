import React, { Component } from 'react';
import Star from './Star/Star';
import './StarRating.scss';

export default class StarRating extends Component {
  constructor(props) {
    super(props);
  }

  handleStarClick = () => {};

  render() {
    const starArray = [0, 1, 2, 3, 4];

    return (
      <>
        <div className="starList">
          {starArray.map((star, index) => {
            return (
              <Star
                key={index}
                size="50"
                onClick={this.handleStarClick(star)}
              />
            );
          })}
        </div>
      </>
    );
  }
}
