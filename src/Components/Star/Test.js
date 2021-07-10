import React, { Component } from 'react';
import StarRating from './StarRating/StarRating';
import StarGraph from './StarGraph/StarGraph';

export default class Test extends Component {
  callApi = () => {
    fetch('')
      .then(res => res.json())
      .then(data => console.log(data));
  };

  componentDidMount = () => {
    this.callApi();
  };

  render() {
    return (
      <>
        <div>Hello test!</div>
        <div>
          <StarRating size="60" />
        </div>
        <div>
          <StarGraph />
        </div>
      </>
    );
  }
}
