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
    fetch('http://10.58.1.82:8000/ratings/products/1/graph')
      .then(res => res.json())
      .then(data =>
        this.setState({
          userInfo: data.results,
        })
      );
  };

  componentDidMount = () => {
    this.callApi();
  };

  render() {
    console.log(this.state.userInfo);
    return (
      <>
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
