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
  TOTAL_RATING_APIKEY,
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
      totalRating: 0,
    };
  }

  componentDidMount() {
    fetch(CATEGORY_All_APIKEY, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          allList: data.results,
        });
      });

    fetch(`${CATEGORY_FOOD_APIKEY}`, {})
      .then(res => res.json())
      .then(data => {
        this.setState({
          foodList: data.results,
        });
      });

    fetch(`${CATEGORY_DRINKS_APIKEY}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          drinkList: data.results,
        });
      });

    fetch(`${CATEGORY_DESSERTS_APIKEY}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          dessertList: data.results,
        });
      });

    fetch(`${TOTAL_RATING_APIKEY}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          totalRating: data.result,
        });
      });
  }

  render() {
    const { allList, foodList, drinkList, dessertList, totalRating } =
      this.state;

    return (
      <div className="homeContainer">
        <All allList={allList} />
        <Foods foodList={foodList} />
        <Drinks drinkList={drinkList} />
        <Dessert dessertList={dessertList} />
        <div className="ratingSection">
          <span>
            지금까지 <em className="star">★</em>{' '}
            <em>{totalRating.count}개의 평가가</em> 쌓였어요.
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
