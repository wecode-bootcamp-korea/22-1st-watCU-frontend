import React, { Component } from 'react';

// ##LIBRARY
import { BsBookmarkPlus, BsHeart } from 'react-icons/bs';
import { AiOutlineStop, AiOutlineClose } from 'react-icons/ai';
import { VscComment } from 'react-icons/vsc';

// ##STYLES
import './ProductModal.scss';
import { BASE_URL } from '../../Config';

export default class ProductModal extends Component {
  constructor() {
    super();

    this.state = {
      wishBtn: 'Delete wish',
      doneBtn: 'Delete done',
      isModalClose: true,
    };
  }

  // ## 모달창 닫기 함수
  isCloseModal = () => {
    this.props.closeModal();
  };

  // ## WISH 버튼 클릭시 실행
  wishHandleClick = () => {
    fetch(`${BASE_URL}/products/1/status/wish`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          wishBtn: res.results,
        })
      );
  };

  // ## DONE 버튼 클릭시 실행
  doneHandleClick = () => {
    fetch(`${BASE_URL}/products/1/status/done`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          doneBtn: res.results,
        })
      );
  };

  prepareAlert = () => {
    alert('준비중입니다.');
  };

  render() {
    return (
      this.state.isModalClose && (
        <section className="productModal">
          <div className="productModalBg">
            <div className="productContainer">
              <div className="aboutProduct">
                <div className="aboutImgBox">
                  <img src={this.props.src} alt="" className="aboutImg" />
                </div>
                <div className="aboutText">
                  <h2>{this.props.korean_name}</h2>
                  <p>{this.props.price}</p>
                </div>
              </div>
              <div className="wantEat">
                <div className="wish">
                  <BsBookmarkPlus
                    name="wish"
                    className={
                      this.state.wishBtn === 'Create wish'
                        ? `wishIcon activeWishIcon`
                        : `wishIcon`
                    }
                    onClick={this.wishHandleClick}
                  />
                  <p>WISH</p>
                </div>
                <div className="done">
                  <BsHeart
                    name="done"
                    className={
                      this.state.doneBtn === 'Create done'
                        ? `doneIcon activeDoneIcon`
                        : `doneIcon`
                    }
                    onClick={this.doneHandleClick}
                  />
                  <p>DONE</p>
                </div>
              </div>
              <div className="commentProduct">
                <p>Comment</p>
                <VscComment
                  className="commentIcon"
                  onClick={this.prepareAlert}
                />
              </div>
              <div className="unInterested">
                <p>Uninterested</p>
                <AiOutlineStop
                  className="uninterIcon"
                  onClick={this.prepareAlert}
                />
              </div>
              <div className="cancleBox" onClick={this.isCloseModal}>
                <p>close</p>
              </div>
              <div className="closeBtnBox">
                <AiOutlineClose
                  className="closeBtn"
                  onClick={this.isCloseModal}
                />
              </div>
            </div>
          </div>
        </section>
      )
    );
  }
}
