import React, { Component } from 'react';
import './AnotherItem.scss';

export default class AnotherItem extends Component {
  render() {
    return (
      <div className="anotherItem" ref={this.props.itemRef}>
        <img src="https://images.unsplash.com/photo-1554866585-cd94860890b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80" />
      </div>
    );
  }
}
