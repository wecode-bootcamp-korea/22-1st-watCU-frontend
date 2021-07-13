import React, { Component } from 'react';

// ##LIBRARY
import { BsBookmarkPlus, BsHeart } from 'react-icons/bs';
import { AiOutlineStop, AiOutlineClose } from 'react-icons/ai';
import { VscComment } from 'react-icons/vsc';

// ##STYLES
import './ProductModal.scss';

export default class ProductModal extends Component {
  constructor() {
    super();

    this.state = {
      wantBtn: '',
      doneBtn: '',
    };
  }

  handleClick = e => {
    let eValue = e.target.attributes.name.value;

    // if (this.state.isWantBtn === false) {
    //   return console.log('no');
    // } else if (this.state.isWantBtn === true) {
    //   return console.log('rightj');
    // }

    fetch(`http://10.58.0.189:8000/products/1/status/${eValue}`, {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoyfQ.Zy6jKeYAMr-Vzom7zCl8ZS6GgIhAEvvXK2Qv_fcjuMU',
      },
    })
      .then(res => res.json())
      .then(res => console.log(`res`, res));
  };

  prepareAlert = () => {
    alert('준비중입니다.');
  };

  render() {
    const { wantBtn, doneBtn } = this.state;
    return (
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
              <div className="wishEat">
                <BsBookmarkPlus
                  name="wish"
                  className={wantBtn ? `wishIcon activeWishIcon` : `wishIcon`}
                  onClick={this.handleClick}
                />
                <p>WANT</p>
              </div>
              <div className="done">
                <BsHeart
                  name="done"
                  className={doneBtn ? `doneIcon activeDoneIcon` : `doneIcon`}
                  onClick={this.handleClick}
                />
                <p>DONE</p>
              </div>
            </div>
            <div className="commentProduct">
              <p>Comment</p>
              <VscComment className="commentIcon" onClick={this.prepareAlert} />
            </div>
            <div className="unInterested">
              <p>Uninterested</p>
              <AiOutlineStop
                className="uninterIcon"
                onClick={this.prepareAlert}
              />
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
