import React, { Component } from 'react';
import Category from './component/Category';
import Foods from './component/Foods';
import Drinks from './component/Drinks';
import IceCream from './component/IceCreams';

// import Foods from './component/Foods';
// import Drinks from './component/Drinks';
// import IceCream from './component/IceCreams';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Category />
        {/* <Foods />
        <Drinks />
        <IceCream /> */}
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
