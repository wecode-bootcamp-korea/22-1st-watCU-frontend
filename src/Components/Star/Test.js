import React, { Component } from 'react';
import StarRating from './StarRating/StarRating';
import StarGraph from './StarGraph/StarGraph';

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: [],
    };
  }

  callApi = () => {
    fetch('http://localhost:1313/rating')
      .then(res => res.json())
      .then(data =>
        this.setState({
          userInfo: data,
        })
      );
  };

  componentDidMount = () => {
    this.callApi();
  };

  render() {
    // console.log(this.state);
    // console.log(this.state.userInfo);
    return (
      <>
        <div>Hello test!</div>
        <div>
          <StarRating size="60" callApi={this.callApi} />
        </div>
        <div>
          <StarGraph userInfo={this.state.userInfo} />
        </div>
      </>
    );
  }
}
