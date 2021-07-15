import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          서비스 이용약관 &nbsp; | &nbsp; 개인정보 처리방침 &nbsp; | &nbsp; 회사
          안내
        </p>
        <p>고객센터 &nbsp; | &nbsp; cs@watcu.co.kr, 02-000-0000</p>
        <p>WATCU &nbsp; | &nbsp; 서울특별시 강남구 테헤란로 WATCU 빌딩 </p>
        <p>&nbsp;</p>
        <p>ⓒ 2021 by WATCU, Inc. All rights reserved. </p>
        <div className="snsIcon">
          <span>www.watcu.co.kr &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>Facebook 바로가기</span>
        </div>
      </div>
    );
  }
}

export default Footer;
