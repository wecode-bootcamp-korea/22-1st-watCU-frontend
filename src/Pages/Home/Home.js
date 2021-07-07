import React, { Component } from 'react';
import All from './component/All';
import Foods from './component/Foods';
import Drinks from './component/Drinks';
import IceCream from './component/IceCreams';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <section className="categorySection">
          <All />
        </section>
        <section className="categorySection">
          <Foods />
        </section>
        <section className="categorySection">
          <Drinks />
        </section>
        <section className="categorySection">
          <IceCream />
        </section>
        <section className="ratingSection">
          <span>
            지금까지 <em>★ 100,000개의 평가가</em> 쌓였어요.
          </span>
        </section>
      </div>
    );
  }
}

export default Home;
