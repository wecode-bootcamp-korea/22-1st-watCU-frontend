import React, { Component } from 'react';
import './Signup.scss';

import { SIGNUP_APIKEY } from '../../../Config/Config';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      name: '',
      password: '',
    };
  }

  onSaveInputValue = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onSubmitForm = e => {
    const { email, name, password } = this.state;
    e.preventDefault();

    fetch(SIGNUP_APIKEY, {
      method: 'POST',
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    })
      .then(res => res.json())
      .then(res => alert('회원가입 성공'));

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password, name } = this.state;
    const { onSaveInputValue, onSubmitForm } = this;
    return (
      <div className="signupContainer">
        <div className="signupBg">
          <div className="signupBox">
            <img
              alt=""
              src="/images/company-logo.png"
              className="signupCompanyName"
            />
            <p className="signupTitle">회원가입</p>
            <form className="signupForm" onSubmit={onSubmitForm}>
              <input
                type="text"
                placeholder="이름"
                name="name"
                value={name}
                onChange={onSaveInputValue}
                autoComplete="off"
              />
              <input
                type="text"
                placeholder="이메일"
                name="email"
                value={email}
                onChange={onSaveInputValue}
                autoComplete="off"
              />
              <input
                type="password"
                placeholder="비밀번호"
                name="password"
                value={password}
                onChange={onSaveInputValue}
                autoComplete="off"
              />
              <button className="signupBtn">회원가입</button>
            </form>
            <p className="alreadySignup">
              이미가입하셨나요?<span>로그인</span>
            </p>
            <p className="closeBtn" onClick={this.props.closeMoal}>
              X
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
