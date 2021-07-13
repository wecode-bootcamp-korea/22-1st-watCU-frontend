import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './EvaluationContainer.scss';

class EvaluationContainer extends Component {
  render() {
    return (
      <div className="evaluationContainer">
        <button className="evaluationButton">평가하기</button>
      </div>
    );
  }
}

export default withRouter(EvaluationContainer);
