import React, { Component } from 'react';
import './Nav.scss';
import Login from './NavLogin/Login';
import NavSearch from './NavSearch/NavSearch';
import Signup from './NavSignup/Signup';

const BASE_URL = `http://10.58.6.212:8000`;
const APIKEY = `${BASE_URL}/products/search`;

export default class Nav extends Component {
  constructor() {
    super();

    this.state = {
      loginModal: false,
      signupModal: false,
      inputFocused: false,
      searchLists: [],
    };
  }
  onInputChange = e => {
    fetch(APIKEY, {
      method: 'POST',
      body: JSON.stringify({
        word: e.target.value,
      }),
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          searchLists: res,
        })
      );
  };

  closeMoal = () => {
    this.setState({ loginModal: false });
    this.setState({ signupModal: false });
  };
  render() {
    const { loginModal, signupModal, onInputChange, searchLists } = this.state;
    return (
      <>
        <nav className="nav">
          <div className="navContainer">
            <div className="navLeft">
              <div className="navLogoBox">
                <img
                  alt="companyLogo"
                  src="/images/company-logo.png"
                  className="companyLogo"
                />
              </div>
              <div className="navCategoryBox">
                <p className="cateAll">전체</p>
              </div>
            </div>
            <div className="navRight">
              <div className="inputBox">
                <input
                  type="text"
                  className="navInput"
                  placeholder="🔍 작품 제목, 배우, 감독을 검색해보세요."
                  onChange={this.onInputChange}
                />
                <NavSearch searchLists={searchLists} />
              </div>
              <div className="adminBox">
                <button
                  className="loginBtn"
                  onClick={() => this.setState({ loginModal: true })}
                >
                  로그인
                </button>
                <button
                  className="signupBtn"
                  onClick={() => this.setState({ signupModal: true })}
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
          {loginModal && <Login closeMoal={this.closeMoal} />}
          {signupModal && <Signup closeMoal={this.closeMoal} />}
        </nav>
      </>
    );
  }
}
