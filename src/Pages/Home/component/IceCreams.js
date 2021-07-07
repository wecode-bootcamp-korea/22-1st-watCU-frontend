import React, { Component } from 'react';
import IceCreamsCard from './Card/IceCreamsCard';
import '../Home.scss';

class IceCreams extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     iceCreamList: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch('/data/productData.json', {
  //     method: 'GET',
  //   })
  //     .then(red => red.json())
  //     .then(data => {
  //       this.setState({
  //         iceCreamList: data,
  //       });
  //     });
  // }

  render() {
    return (
      <div className="categoryContainer">
        <div className="categoryTitle">
          <p>디저트</p>
        </div>
        <div className="pdCardList">
          <IceCreamsCard />
        </div>
      </div>
    );
  }
}

export default IceCreams;
