import React, { Component } from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';

import { CATEGORY_FOOD_APIKEY } from '../../../Config/Config';

class Foods extends Component {
  constructor() {
    super();

    this.state = {
      contents: [],
    };
  }

  componentDidMount = () => {
    fetch(CATEGORY_FOOD_APIKEY)
      .then(res => res.json())
      .then(res =>
        this.setState({
          contents: res.results[0],
        })
      )
      .catch(console.log(`"object"`, 'object'));
  };

  render() {
    console.log(`this.state.contents`, this.state.contents);
    return (
      <ul
        className={
          this.props.toggleState === 1 ? `contents contentsActive` : `contents`
        }
      >
        {/* <li>{this.state.conten}</li> */}
        <li>
          <BsThreeDotsVertical className="threeDot" />
        </li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>7</li>
        <li>7</li>
        <li>7</li>
        <li>7</li>
        <li>7</li>
        <li>7</li>
        <li>7</li>
        <li>7</li>
        <li>7</li>
        <li>8</li>
      </ul>
    );
  }
}

export default Foods;
