import React, { Component } from 'react';
import './EvaluationContainer.scss';

export default class EvaluationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="similarItem">
        <img src="https://images.unsplash.com/photo-1531384370597-8590413be50a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" />
        <h3>펩시(pepsi)</h3>
        <h4>가격:1,400원</h4>
        <h4 className="smallCategoryText">음료</h4>
      </div>
    );
  }
}
