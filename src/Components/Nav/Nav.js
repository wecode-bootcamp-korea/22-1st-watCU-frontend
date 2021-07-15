import React, { Component } from 'react';
import './Nav.scss';

// ##LIBRARY
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

// ##COMPONENT
import Login from './NavLogin/NavLogin';
import NavSearch from './NavSearch/NavSearch';
import Signup from './NavSignup/NavSignup';
import NavUserBtns from './NavUserBtns/NavUserBtns';

// ##STYLES
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      isLoginModal: false,
      isSignupModal: false,
      isInputFocused: false,
      searchLists: [],
      isUserButtons: false,
    };
  }
  componentDidMount = () => {
    let token = localStorage.getItem('token');

    if (token) {
      this.setState({
        isUserButtons: true,
      });
    }
  };

  onInputChange = e => {
    fetch(`http://10.58.4.4:8000/users/search?word=${e.target.value}`)
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
  };

  closeModal = () => {
    this.setState({ isLoginModal: false, isSignupModal: false });
  };

  userButtons = () => {
    this.setState({ isUserButtons: true });
  };
  removeToken = () => {
    localStorage.removeItem('token');
    window.location.replace('/');
  };

  render() {
    const { isLoginModal, isSignupModal, searchLists, isUserButtons } =
      this.state;
    return (
      <nav className="nav">
        <div className="navContainer">
          <div className="navLeft">
            <Link to="/" className="navLogoBox">
              <img
                alt="companyLogo"
                src={process.env.PUBLIC_URL + 'images/logo_watcu.svg'}
                className="companyLogo"
              />
            </Link>
            <div className="navCategoryBox">
              <Link to="/" className="cateAll">
                전체
              </Link>
              {this.state.isUserButtons ? (
                <Link to="/evaluating" className="navEvaluation">
                  평가하기
                </Link>
              ) : null}
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
              {isUserButtons ? (
                <>
                  <div className="userIconBox" onClick={this.removeToken}>
                    로그아웃
                  </div>
                  <img
                    alt="user_page"
                    src={process.env.PUBLIC_URL + 'images/icon_logout.svg'}
                    className="userIconBox"
                  />
                </>
              ) : (
                <NavUserBtns openModal={this.openModal} />
              )}
            </div>
          </div>
        </div>
        {isLoginModal && (
          <Login closeModal={this.closeModal} userButtons={this.userButtons} />
        )}
        {isSignupModal && <Signup closeModal={this.closeModal} />}
      </nav>
    );
  }
}

export default withRouter(Nav);
