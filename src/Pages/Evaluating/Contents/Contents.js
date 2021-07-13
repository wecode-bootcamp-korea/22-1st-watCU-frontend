import React, { Component } from 'react';

// ##LIBRARY
import { BsThreeDotsVertical } from 'react-icons/bs';

class Contents extends Component {
  constructor() {
    super();

    this.state = {
      contents: [],
      isAboutModal: false,
    };
  }

  // ## 버튼 클릭시 그에 맞는 modal창을 보여준다.
  isAboutModalOpen = () => {
    this.setState({
      isAboutModal: true,
    });
  };

  render() {
    const { contents } = this.props;
    return (
      <ul className={`contents contentsActive`}>
        <li className="listContainer">
          <div className="listBg">
            <div className="listBox">
              <div className="listImgBox">
                <img
                  src={contents.image_url}
                  alt="listImg"
                  className="listImg"
                />
              </div>
              <div className="listTextBox">
                <div className="listText">
                  <h2>{contents.korean_name}</h2>
                  <p>{contents.price}</p>
                </div>
                <div className="listHeartComponent">
                  <p>이곳은 하트 자리</p>
                </div>
              </div>
            </div>
            <div className="listThreeDotBox">
              <BsThreeDotsVertical
                className="threeDot"
                onClick={this.isAboutModalOpen}
              />
            </div>
          </div>
        </li>
      </ul>
    );
  }
}

export default Contents;
