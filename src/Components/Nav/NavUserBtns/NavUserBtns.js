import React, { Component } from 'react';

class NavUserBtns extends Component {
  render() {
    return (
      <>
        <button
          className="loginBtn"
          name="isLoginModal"
          onClick={this.props.openModal}
        >
          로그인
        </button>
        <button
          className="signupBtn"
          name="isSignupModal"
          onClick={this.props.openModal}
        >
          회원가입
        </button>
      </>
    );
  }
}

export default NavUserBtns;
