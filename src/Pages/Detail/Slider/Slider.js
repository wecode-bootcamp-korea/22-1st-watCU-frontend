import React, { Component } from 'react';
import AnotherItem from './AnotherItem/AnotherItem';
import './Slider.scss';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.itemRef = React.createRef();
    this.state = {
      currentIndex: 0,
      subImage: this.props.subImage,
    };
  }

  handleNextSlider = () => {
    const sliderElement = this.sliderRef.current;
    const { subImage, currentIndex } = this.state;

    if (this.itemRef.current) {
      const itemWidth = Math.ceil(
        this.itemRef.current.getBoundingClientRect().width
      );
      if (currentIndex === subImage - 4) {
        return;
      }

      this.setState(
        {
          currentIndex: currentIndex + 1,
        },
        () => {
          sliderElement.style.transform = `translate(-${
            this.state.currentIndex * itemWidth
          }px)`;
        }
      );
    }
  };

  handlePrevSlider = () => {
    const sliderElement = this.sliderRef.current;
    const { currentIndex } = this.state;

    if (this.itemRef.current) {
      const itemWidth = Math.ceil(
        this.itemRef.current.getBoundingClientRect().width
      );

      if (currentIndex === 0) {
        return;
      }

      this.setState(
        {
          currentIndex: currentIndex - 1,
        },
        () => {
          sliderElement.style.transform = `translate(-${
            this.state.currentIndex * itemWidth
          }px)`;
        }
      );
    }
  };

  render() {
    const { subImage, currentIndex } = this.state;

    return (
      <div className="anotherItemContainer">
        <h2>{this.props.title}</h2>
        <div className="anotherItemWrapper">
          <div className="anotherItemList" ref={this.sliderRef}>
            {subImage &&
              subImage.map((another, key) => {
                return (
                  <AnotherItem
                    key={key}
                    anotherImage={another}
                    itemRef={this.itemRef}
                  />
                );
              })}
          </div>
        </div>
        {currentIndex !== 0 && (
          <button onClick={this.handlePrevSlider}>
            <div className="prevButton">
              <img src="/images/detail/left_arrow_angle.png" />
            </div>
          </button>
        )}

        {currentIndex !== subImage.length - 4 && (
          <button onClick={this.handleNextSlider}>
            <div className="nextButton">
              <img src="/images/detail/right_arrow_angle.png" />
            </div>
          </button>
        )}
      </div>
    );
  }
}
