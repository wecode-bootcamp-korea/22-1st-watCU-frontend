import React, { Component } from 'react';

// ##LIBRARY
import { BsThreeDotsVertical } from 'react-icons/bs';

// ##APIKEY
import { CATEGORY_DESERTS_APIKEY } from '../../../Config';

class Deserts extends Component {
  constructor() {
    super();

    this.state = {
      contents: [],
    };
  }

  componentDidMount = () => {
    fetch(CATEGORY_DESERTS_APIKEY)
      .then(res => res.json())

      .then(res =>
        this.setState({
          contents: res.results,
        })
      )
      .catch(console.log(`"DESERTS_FETCH FAILED"`, 'DESERTS_FETCH FAILED'));
  };
  render() {
    const { contents } = this.state;
    const { toggleState } = this.props;
    return (
      toggleState === 1 && (
        <ul
          className={toggleState === 1 ? `contents contentsActive` : `contents`}
        >
          {contents.map((content, i) => {
            return (
              <li className="listContainer" key={i}>
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
                        <h2>{content.korean_name}</h2>
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
            );
          })}
        </ul>
      )
    );
  }
}

export default Deserts;
