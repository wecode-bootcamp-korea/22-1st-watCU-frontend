import React, { Component } from 'react';

// ##LIBRARY
import { BsThreeDotsVertical } from 'react-icons/bs';

// ##Component
import StarRating from '../../../Components/Star/StarRating/StarRating';

class Contents extends Component {
  constructor() {
    super();

    this.state = {
      contents: [],
      isAboutModal: false,
      closeModal: false,
      product_id: '',
    };
  }

  render() {
    const { contents, selectItem, modalOpen, idx } = this.props;

    return (
      <li className="listContainer">
        <div className="listBg">
          <div className="listBox">
            <div className="listImgBox">
              <img src={contents.image_url} alt="listImg" className="listImg" />
            </div>
            <div className="listTextBox">
              <div className="listText">
                <h2>{contents.korean_name}</h2>
                <p>{contents.price}</p>
              </div>
              <div className="listHeartComponent">
                <StarRating size="30" id={idx + 1} selectItem={selectItem} />
              </div>
            </div>
          </div>
          <div className="listThreeDotBox">
            <BsThreeDotsVertical
              className="threeDot"
              onClick={() => {
                modalOpen();
                selectItem(idx);
              }}
            />
          </div>
        </div>
      </li>
    );
  }
}

export default Contents;
