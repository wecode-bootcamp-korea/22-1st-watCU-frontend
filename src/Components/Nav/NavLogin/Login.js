import React, { Component } from 'react';
import './Login.scss';

const BASE_URL = `http://10.58.6.212:8000`;
const APIKEY = `${BASE_URL}/users/login`;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
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
    const { email, password } = this.state;
    e.preventDefault();

    fetch(APIKEY, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(res => alert('로그인 성공'));

    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    const { onSaveInputValue, onSubmitForm } = this;
    return (
      <div className="loginContainer">
        <div className="loginBg">
          <div className="loginBox">
            <img
              alt=""
              src="/images/company-logo.png"
              className="loginCompanyName"
            />
            <p className="loginTitle">로그인</p>
            <form className="loginForm" onSubmit={onSubmitForm}>
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
              <button className="loginBtn">로그인</button>
            </form>
            <p className="forgotPw">비밀번호를 잊어버리셨나요?</p>
            <p className="loginSignup">
              계정이 없으신가요?<span>회원가입</span>
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
export default Login;
