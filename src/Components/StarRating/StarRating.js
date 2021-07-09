import React, { Component } from 'react';
import Star from './Star/Star';
import './StarRating.scss';

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rateValue: [false, false, false, false, false],
    };
  }

  handleStarClick = clickedIndex => {
    const prevRateValue = [...this.state.rateValue];
    const isClickedStarActive = prevRateValue[clickedIndex];
    const isNextStarActive = prevRateValue[clickedIndex + 1];

    if (isClickedStarActive && isNextStarActive) {
      prevRateValue.fill(false, clickedIndex + 1);

      this.setState({
        rateValue: prevRateValue,
      });

      return;
    }

    if (isClickedStarActive) {
      prevRateValue.fill(false, 0, clickedIndex + 1);

      this.setState({
        rateValue: prevRateValue,
      });

      return;
    }

    if (!isClickedStarActive) {
      prevRateValue.fill(true, 0, clickedIndex + 1);

      this.setState({
        rateValue: prevRateValue,
      });

      return;
    }
  };

  render() {
    const starArray = [0, 1, 2, 3, 4];

    return (
      <>
        <div className="starList">
          {starArray.map((star, index) => {
            return (
              <button onClick={() => this.handleStarClick(star)}>
                <Star
                  key={index}
                  size="50"
                  name={this.state.rateValue[star] ? 'yesStar' : 'noStar'}
                />
              </button>
            );
          })}
        </div>
      </>
    );
  }
}
