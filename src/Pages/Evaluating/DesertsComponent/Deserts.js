import React, { Component } from 'react';

import { CATEGORY_DESERTS_APIKEY } from '../../../Config/Config';

class Deserts extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };
  }

  componentDidMount = () => {
    fetch(CATEGORY_DESERTS_APIKEY)
      .then(res => res.json())
      // .then(res => console.log(`res`, res))
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
          this.props.toggleState === 3 ? `contents contentsActive` : `contents`
        }
      >
        <li>1asfasfws</li>
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

export default Deserts;
