import React, { Component } from 'react';
import './Nav.scss';

// ##LIBRARY
import { Link } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';

// ##COMPONENT
import Login from './NavLogin/NavLogin';
import NavSearch from './NavSearch/NavSearch';
import Signup from './NavSignup/NavSignup';

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
    fetch(`http://10.58.6.188:8000/users/search?word=${e.target.value}`)
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
              <p className="companyLogo">watCU</p>
              {/* <img
                alt="companyLogo"
                src="/images/company-logo.png"
                className="companyLogo"
              /> */}
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
                placeholder="🔍  작품 제목, 배우, 감독을 검색해보세요."
                onChange={this.onInputChange}
              />
              <NavSearch searchLists={searchLists} />
            </div>
            <div className="adminBox">
              {isUserButtons ? (
                <>
                  <div className="userIconBox">
                    <FaRegUser className="userIcon" />
                  </div>
                  <div className="userIconBox" onClick={this.removeToken}>
                    {/* <IoIosLogOut className="userIcon2" /> */}
                    <button>로그아웃</button>
                  </div>
                </>
              ) : (
                <>
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
                </>
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
