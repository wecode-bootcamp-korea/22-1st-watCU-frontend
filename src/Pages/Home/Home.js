import React, { Component } from 'react';
import All from './component/All';
import Foods from './component/Foods';
import Drinks from './component/Drinks';
import Dessert from './component/Dessert';
import {
  CATEGORY_All_APIKEY,
  CATEGORY_FOOD_APIKEY,
  CATEGORY_DRINKS_APIKEY,
  CATEGORY_DESSERTS_APIKEY,
} from '../../Config';

import './Home.scss';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      allList: [],
      foodList: [],
      drinkList: [],
      dessertList: [],
    };
  }

  componentDidMount() {
    // fetch('data/productData.json', {
    fetch(`${CATEGORY_All_APIKEY}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          allList: data.results,
        });
      });

    // fetch('data/foodData.json', {
    fetch(`${CATEGORY_FOOD_APIKEY}`, {})
      .then(res => res.json())
      .then(data => {
        this.setState({
          foodList: data.results,
        });
      });

    // fetch('data/drinkData.json', {
    fetch(`${CATEGORY_DRINKS_APIKEY}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          drinkList: data.results,
        });
      });

    // fetch('data/dessertData.json', {
    fetch(`${CATEGORY_DESSERTS_APIKEY}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          dessertList: data.results,
        });
      });
  }

  render() {
    console.log('Home');
    const { allList, foodList, drinkList, dessertList } = this.state;

    return (
      <div className="homeContainer">
        <All allList={allList} />
        <Foods foodList={foodList} />
        <Drinks drinkList={drinkList} />
        <Dessert dessertList={dessertList} />
        <div className="ratingSection">
          <span>
            지금까지 <em>★ 125개의 평가가</em> 쌓였어요.
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
