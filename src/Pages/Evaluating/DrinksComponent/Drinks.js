import React, { Component } from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';

import { CATEGORY_DRINKS_APIKEY } from '../../../Config/Config';

class Drinks extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };
  }

  componentDidMount = () => {
    fetch(CATEGORY_DRINKS_APIKEY)
      .then(res => res.json())
      // .then(res => console.log(`resss`, res))
      .then(res =>
        this.setState({
          name: res.results[0].korean_name,
        })
      )
      .catch(console.log(`"object"`, 'object'));
  };
  render() {
    return (
      <ul
        className={
          this.props.toggleState === 2 ? `contents contentsActive` : `contents`
        }
      >
        <li className="listContainer">
          <div className="listBg">
            <div className="listBox">
              <div className="listImgBox">
                <img
                  src="/images/pexels-pierre-blaché-2901209.jpg"
                  alt=""
                  className="listImg"
                />
              </div>
              <div className="listTextBox">
                <div className="listText">
                  <h2>글제목</h2>
                  <p>글 설명</p>
                </div>
                <div className="listHeartComponent">
                  <p>이곳은 하트 자리</p>
                </div>
              </div>
            </div>
            <div className="listThreedotBox">
              <BsThreeDotsVertical className="threeDot" />
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default Drinks;
