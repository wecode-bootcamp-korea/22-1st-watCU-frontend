import React, { Component } from 'react';
import './Slider.scss';

export default class AnotherItem extends Component {
  render() {
    return (
      <div className="anotherItemWrapper">
        <div className="anotherItemList" ref={this.sliderRef}>
          {this.state.eachDatalist.sub_image_url &&
            this.state.eachDatalist.sub_image_url.map((another, key) => {
              return (
                <AnotherItem
                  key={key}
                  anotherImage={another}
                  itemRef={this.itemRef}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
