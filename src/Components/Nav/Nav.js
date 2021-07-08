import React, { Component } from 'react';

// ##LIBRARY
import { Link } from 'react-router-dom';

// ##COMPONENT
import Login from './NavLogin/NavLogin';
import NavSearch from './NavSearch/NavSearch';
import Signup from './NavSignup/NavSignup';

// ##STYLES
import './Nav.scss';

import { SEARCH_APIKEY } from '../../Config/Config';

export default class Nav extends Component {
  constructor() {
    super();

    this.state = {
      isLoginModal: false,
      isSignupModal: false,
      isInputFocused: false,
      searchLists: [],
    };
  }
  onInputChange = e => {
    fetch(SEARCH_APIKEY, {
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

  openModal = e => {
    const { name } = e.target;

    this.setState({
      [name]: true,
    });
    console.log(`this.state`, this.state);
  };

  closeMoal = () => {
    this.setState({ isLoginModal: false, isSignupModal: false });
  };

  render() {
    const { isLoginModal, isSignupModal, searchLists } = this.state;
    return (
      <nav className="nav">
        <div className="navContainer">
          <div className="navLeft">
            <Link to="/" className="navLogoBox">
              <img
                alt="companyLogo"
                src="/images/company-logo.png"
                className="companyLogo"
              />
            </Link>
            <div className="navCategoryBox">
              <Link to="/" className="cateAll">
                전체
              </Link>
              <Link to="/evaluating" className="navEvaluation">
                평가하기
              </Link>
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
                name="isLoginModal"
                onClick={this.openModal}
              >
                로그인
              </button>
              <button
                className="signupBtn"
                name="isSignupModal"
                onClick={this.openModal}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
        {isLoginModal && <Login closeMoal={this.closeMoal} />}
        {isSignupModal && <Signup closeMoal={this.closeMoal} />}
      </nav>
    );
  }
}
