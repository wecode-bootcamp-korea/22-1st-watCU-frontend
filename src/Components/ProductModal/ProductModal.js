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
                <img src="/images/desert1.jpg" alt="" className="aboutImg" />
              </div>
              <div className="aboutText">
                <h2>Cakesome</h2>
                <p>$7.9</p>
              </div>
            </div>
            <div className="wantEat">
              <div className="willEat">
                <BsBookmarkPlus className="willIcon" />
                <p>WANT</p>
              </div>
              <div className="eating">
                <BsHeart className="ingIcon" />
                <p>LIKE</p>
              </div>
            </div>
            <div className="commentProduct">
              <p>Comment</p>
              <VscComment className="commentIcon" />
            </div>
            <div className="unInterested">
              <p>Uninterested</p>
              <AiOutlineStop className="uninterIcon" />
            </div>
            <div className="cancleBox">
              <p>close</p>
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
