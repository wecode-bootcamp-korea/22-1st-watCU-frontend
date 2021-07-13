import React, { Component } from 'react';
import './AnotherItem.scss';

export default class AnotherItem extends Component {
  render() {
    const { itemRef, anotherImage } = this.props;

    return (
      <div className="anotherItem" ref={itemRef}>
        <img src={anotherImage} />
      </div>
    );
  }
}
