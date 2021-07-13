import React, { Component } from 'react';

class SlideBtn extends Component {
  handleSlideLeft = () => {
    const { transLate } = this.props;

    if (transLate !== 0) {
      this.setState({
        transLate: transLate + 704,
      });
    }
  };

  handleSlideRight = () => {
    const { transLate } = this.state;

    if (transLate > -3000) {
      this.setState({
        transLate: transLate - 704,
      });
    }
  };

  render() {
    return (
      <div>
        <button className="slideBtnLeft" onClick={this.handleSlideLeft}>
          prev
        </button>
        <button className="slideBtnRight" onClick={this.handleSlideRight}>
          next
        </button>
      </div>
    );
  }
}

export default SlideBtn;
