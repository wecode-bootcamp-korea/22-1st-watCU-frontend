import React, { Component } from 'react';
import All from './component/All';
import Foods from './component/Foods';
import Drinks from './component/Drinks';
import Dessert from './component/Dessert';

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
    fetch('data/productData.json', {
      // fetch('http://10.58.6.40:8000/products', { 백엔드 데이터
      method: 'GET',
    })
      .then(res => res.json())

      .then(data => {
        this.setState({
          allList: data,
        });
      });

    fetch('data/foodData.json', {
      // fetch('http://10.58.6.40:8000/products?category=먹거리', { 백엔드 데이터
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          foodList: data,
        });
      });

    fetch('data/drinkData.json', {
      // fetch('http://10.58.6.40:8000/products?category=음료', { 백엔드 데이터
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          drinkList: data,
        });
      });

    fetch('data/dessertData.json', {
      // fetch('http://10.58.6.40:8000/products?category=디저트', { 백엔드 데이터
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          dessertList: data,
        });
      });
  }

  render() {
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
