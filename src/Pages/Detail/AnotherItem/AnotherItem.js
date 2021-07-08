import React, { Component } from 'react';
import './AnotherItem.scss';

export default class AnotherItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="anotherItem" ref={this.props.itemRef}>
        <img src={this.props.anotherImage} />
      </div>
    );
  }
}
