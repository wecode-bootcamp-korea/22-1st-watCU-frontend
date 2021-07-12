import React, { Component } from 'react';

// ##LIBRARY
import { withRouter } from 'react-router-dom';

// ##STYLES
import './NavLogin.scss';

// ##APIKEY
import { LOGIN_APIKEY } from '../../../Config';

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

    fetch(LOGIN_APIKEY, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => res.json())
      .then(
        res => alert('로그인 성공'),
        this.props.closeModal(),
        this.props.userButtons(),
        this.props.history.push('/')
      );

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
            <p className="closeBtn" onClick={this.props.closeModal}>
              X
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
