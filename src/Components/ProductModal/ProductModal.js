import React, { Component } from 'react';

// ##LIBRARY
import { BsBookmarkPlus, BsHeart } from 'react-icons/bs';
import { AiOutlineStop, AiOutlineClose } from 'react-icons/ai';
import { VscComment } from 'react-icons/vsc';

// ##STYLES
import './ProductModal.scss';

export default class ProductModal extends Component {
  render() {
    return (
      <section className="productModal">
        <div className="productModalBg">
          <div className="productContainer">
            <div className="aboutProduct">
              <div className="aboutImgBox">
                <img
                  src="/images/pexels-pierre-blaché-2901209.jpg"
                  alt=""
                  className="aboutImg"
                />
              </div>
              <div className="aboutText">
                <h2>런닝맨</h2>
                <p>영화 2012</p>
              </div>
            </div>
            <div className="wantEat">
              <div className="willEat">
                <BsBookmarkPlus className="willIcon" />
                <p>먹고싶어요</p>
              </div>
              <div className="eating">
                <BsHeart className="ingIcon" />
                <p>가보고싶어요</p>
              </div>
            </div>
            <div className="commentProduct">
              <p>코멘트 작성하기</p>
              <VscComment className="commentIcon" />
            </div>
            <div className="unInterested">
              <p>관심없어요</p>
              <AiOutlineStop className="uninterIcon" />
            </div>
            <div className="closeBtnBox">
              <AiOutlineClose className="closeBtn" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
