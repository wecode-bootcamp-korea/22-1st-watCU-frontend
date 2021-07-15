import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './EvaluationContainer.scss';

class EvaluationContainer extends Component {
  goToEvaluationPage = () => {
    if (localStorage.getItem('token')) {
      this.props.history.push('/evaluating');
    } else {
      alert('로그인이 필요한 서비스입니다');
    }
  };

  render() {
    return (
      <div className="evaluationContainer" onClick={this.goToEvaluationPage}>
        <button className="evaluationButton">평가하기</button>
      </div>
    );
  }
}

export default withRouter(EvaluationContainer);
