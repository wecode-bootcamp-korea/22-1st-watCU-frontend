import React, { Component } from 'react';
import './EvaluationContainer.scss';

export default class EvaluationContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="evaluationContainer">
        <button class="evaluationButton">평가하기</button>
      </div>
    );
  }
}
