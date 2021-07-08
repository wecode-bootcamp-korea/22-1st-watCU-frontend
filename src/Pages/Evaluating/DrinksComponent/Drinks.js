import React, { Component } from 'react';

import { CATEGORY_DRINKS_APIKEY } from '../../../Config/Config';

class Drinks extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };
  }

  componentDidMount = () => {
    fetch(CATEGORY_DRINKS_APIKEY)
      .then(res => res.json())
      // .then(res => console.log(`resss`, res))
      .then(res =>
        this.setState({
          name: res.results[0].korean_name,
        })
      )
      .catch(console.log(`"object"`, 'object'));
  };
  render() {
    return (
      <ul
        className={
          this.props.toggleState === 2 ? `contents contentsActive` : `contents`
        }
      >
        <li>{this.state.name}</li>
        <li>2</li>
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

export default Drinks;
