import React, { Component } from 'react';
import './AnotherItem.scss';

export default class AnotherItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="anotherItem" ref={this.props.itemRef}>
        <img src="https://images.unsplash.com/photo-1622708862830-a026e3ef60bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80" />
      </div>
    );
  }
}
