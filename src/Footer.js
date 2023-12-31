import React from 'react';
import { Link } from 'react-router-dom';
import github_logo from './image/github_logo.png'
import playstore_logo from './image/playstore_logo.png'
import kakaotalk_logo from './image/kakaotalk_logo.png'


import { Button, Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';

function Footer(props) {
    return (
		<div className="App">
            
            <br/><br/>
<Navbar expand="lg" className="navbar-light bg-white py-3 justify-content-center" >
  <div className="px-5">
    <div>
      &copy; Jongwoo Lee
    </div>

    <div className="d-flex justify-content-center fs-2 gap-4">
      <a className="text-gradient" href="https://github.com/jwlee0411" target="_blank">
        <img src={github_logo} width="30" height="30" alt="GitHub Logo" />
      </a>
      <a className="text-gradient" href="https://open.kakao.com/o/seB8UWdf" target="_blank">
        <img src={kakaotalk_logo} width="30" height="30" alt="KakaoTalk Logo" />
      </a>
      <a className="text-gradient" href="https://play.google.com/store/apps/developer?id=Jongwoo+Lee" target="_blank">
        <img src={playstore_logo} width="30" height="30" alt="Play Store Logo" />
      </a>
    </div>
  </div>
</Navbar>
            <br/><br/>

		</div>
    );
}
 
export default Footer;