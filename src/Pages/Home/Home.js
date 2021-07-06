import React, { Component } from 'react';
import Category from './component/Category';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Category />
      </div>
    );
  }
}

export default Home;
