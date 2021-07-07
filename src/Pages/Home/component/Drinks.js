import React, { Component } from 'react';
import DrinksCard from './Card/DrinksCard';
import '../Home.scss';

class Drinks extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     drinkList: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch('/data/productData.json', {
  //     method: 'GET',
  //   })
  //     .then(red => red.json())
  //     .then(data => {
  //       this.setState({
  //         drinkList: data,
  //       });
  //     });
  // }

  render() {
    return (
      <div className="categoryContainer">
        <div className="categoryTitle">
          <p>음료</p>
        </div>
        <div className="pdCardList">
          <DrinksCard />
        </div>
      </div>
    );
  }
}

export default Drinks;
