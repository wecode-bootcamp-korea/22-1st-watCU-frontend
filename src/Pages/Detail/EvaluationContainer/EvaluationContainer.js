import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './EvaluationContainer.scss';

class EvaluationContainer extends Component {
  goToEvaluationPage = () => {};

  render() {
    return (
      <div className="evaluationContainer" onClick={this.goToEvaluationPage}>
        <button className="evaluationButton">평가하기</button>
      </div>
    );
  }
}

export default withRouter(EvaluationContainer);
