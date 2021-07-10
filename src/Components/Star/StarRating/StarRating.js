import React, { Component } from 'react';
import Star from './EachStar/EachStar';
import StarGraph from '../StarGraph/StarGraph';
import './StarRating.scss';

export default class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rateValue: [false, false, false, false, false],
      hoverRateValue: [false, false, false, false, false],
      isHover: false,
    };
  }

  handleStarClick = clickedIndex => {
    const prevRateValue = [...this.state.rateValue];
    const isClickedStarActive = prevRateValue[clickedIndex];
    const isNextStarActive = prevRateValue[clickedIndex + 1];

    if (isClickedStarActive && isNextStarActive) {
      prevRateValue.fill(false, clickedIndex + 1);

      this.setState({
        isHover: false,
        hoverRateValue: [false, false, false, false, false],
        rateValue: prevRateValue,
      });

      return;
    }

    if (isClickedStarActive) {
      prevRateValue.fill(false, 0, clickedIndex + 1);

      this.setState({
        isHover: false,
        hoverRateValue: [false, false, false, false, false],
        rateValue: prevRateValue,
      });

      return;
    }

    if (!isClickedStarActive) {
      prevRateValue.fill(true, 0, clickedIndex + 1);

      this.setState({
        isHover: false,
        hoverRateValue: [false, false, false, false, false],
        rateValue: prevRateValue,
      });

      return;
    }
  };

  handleStarMousehover = hoveredIndex => {
    // console.log('MOUSE hover');
    const prevRateValue = [...this.state.hoverRateValue];
    const isClickedStarActive = prevRateValue[hoveredIndex];
    const isNextStarActive = prevRateValue[hoveredIndex + 1];

    if (isClickedStarActive && isNextStarActive) {
      prevRateValue.fill(false, hoveredIndex + 1);

      this.setState({
        isHover: true,
        hoverRateValue: prevRateValue,
      });

      return;
    }

    if (isClickedStarActive) {
      prevRateValue.fill(false, 0, hoveredIndex + 1);

      this.setState({
        isHover: true,
        hoverRateValue: prevRateValue,
      });

      return;
    }

    if (!isClickedStarActive) {
      prevRateValue.fill(true, 0, hoveredIndex + 1);

      this.setState({
        isHover: true,
        hoverRateValue: prevRateValue,
      });

      return;
    }
  };

  handleStarMouseout = () => {
    // console.log('MOUSE OUT');

    this.setState({
      isHover: false,
      hoverRateValue: [false, false, false, false, false],
    });
  };

  checkIsActive = star => {
    if (this.state.isHover) {
      if (this.state.hoverRateValue[star]) {
        return 'activeStar';
      }

      return 'inactiveStar';
    }

    if (this.state.rateValue[star]) {
      return 'activeStar';
    }

    return 'inactiveStar';
  };

  render() {
    const starArray = [0, 1, 2, 3, 4];
    // console.log(this.state);

    return (
      <>
        <div className="starList">
          {starArray.map((star, index) => {
            return (
              <button
                key={index}
                onClick={() => this.handleStarClick(star)}
                onMouseEnter={() => this.handleStarMousehover(star)}
                onMouseLeave={() => this.handleStarMouseout()}
              >
                <Star size={this.props.size} name={this.checkIsActive(star)} />
              </button>
            );
          })}
        </div>
      </>
    );
  }
}
