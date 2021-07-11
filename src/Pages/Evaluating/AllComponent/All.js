import React, { Component } from 'react';

// ##LIBRARY
import { BsThreeDotsVertical } from 'react-icons/bs';

class All extends Component {
  constructor() {
    super();

    this.state = {
      contents: [],
    };
  }

  render() {
    const { toggleState, contents } = this.props;
    return (
      toggleState === 1 || (
        <ul className={`contents contentsActive`}>
          <li className="listContainer">
            <div className="listBg">
              <div className="listBox">
                <div className="listImgBox">
                  <img src={contents.image_url} alt="" className="listImg" />
                </div>
                <div className="listTextBox">
                  <div className="listText">
                    <h2>{contents.korean_name}</h2>
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
      )
    );
  }
}

export default All;
