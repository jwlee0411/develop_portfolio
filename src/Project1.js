import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row, Col, Badge } from 'react-bootstrap';

import project_1 from './image/project_1.png';
import p1 from './image/1/1_1.png';
import p2 from './image/1/1_2.png';
import p3 from './image/1/1_3.png';
import p4 from './image/1/1_4.png';
// import p5 from './image/1/1_5.png';
// import p6 from './image/1/1_6.png';
// import p7 from './image/2/2_7.png';
// import p8 from './image/2/2_8.png';
// Add imports for other project images
// ... (import statements)

// ... (import statements)

const Projects = () => {
  const [showCarousel, setShowCarousel] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  };
    
    const numSlides = 2;

  return (
    <section className="py-5">
      <div className="container px-5 mb-5">
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bolder mb-0">
            <span className="text-gradient d-inline">Signal</span>
          </h1>
          <div>2019.06 - 2019.09 (팀 프로젝트, 아두이노 2 + 어플리케이션 1)</div>
        </div>

        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0">
            미리보기 
          </h2>
        </div>

   
          <div className="carousel-container">
            <Carousel slide activeIndex={activeIndex} onSelect={handleSelect} data-bs-theme="dark">
              <Carousel.Item>
                <img src={p1} className="img-fluid" alt="Project 1" />
               
              </Carousel.Item>
              <Carousel.Item>
                <img src={p2} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
              
                    <Carousel.Item>
                <img src={p3} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
                
                    <Carousel.Item>
                <img src={p4} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
                
               
                
            </Carousel>

           
          </div>
   
          
          <br/><br/>
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
            요약 
          </h2>
        
        </div>
          
          
           <div className = "text-start">
        전구에 화재감지, 경보 기능과 LED 색상 조절 기능 등을 탑재한 <b>스마트 IoT 화재경보 시스템</b>입니다.<br/>
전구는 아두이노를 이용해 제작했고, Firebase 이용한 서버리스 시스템 구축해 언제 어디서나 전구에 접근 가능하도록 구현했습니다.
          </div>
          
          
          
          
            <br/><br/>
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
            사용 기술
          </h2>
        
        </div>
             
          
             <div className="mb-0">
         
            <div className="row row-cols-1 row-cols-md-4 mb-4">
              <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Arduino (C)</div>
              </div>
              <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Firebase</div>
              </div>
                 
            </div>
            
                   
                 
                 
          </div>
                 
               <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           개발 배경
          </h2>
        
        </div>
          
          
           <div className = "text-start">
          
            그 동안의 개발 경험을 체계적으로 정리하고, React 사용법을 습득하기 위해 개발하게 되었습니다.
          </div>
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           주요 기능
          </h2>
        
        </div>
          
          
           <div className = "text-start">
       
         <ul>
         <li>센서(온습도, 가스) 값 실시간 데이터 전송 / 모니터링</li>
        <li>LED 색상 조정, On/Off 관리</li>
        <li>화재감지 시 화재경보 모드 전환강제 화재경보 모드 전환</li>
        <li>어플리케이션을 통한 강제 화재경보 모드 전환 / 화재경보 해제</li>
        <li>전구별 화재경보 시 표시 정보(색상) 설정</li>
             
             
             </ul>
          </div>
          
          
              <br/><br/>  
          
            <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           역할
          </h2>
        
        </div>
          
          
           <div className = "text-start">
               팀장(<b>본인</b>)
         <ul> <li><b>기획, Arduino 개발, Database 관리</b></li>
             <li>Arduino(NodeMCU, ESP-32) 및 센서(온습도, 가스, 스피커)를 이용한 스마트 IoT 화재감지 및 경보 시스템 개발</li>
              <li>Firebase Realtime Database 구축</li>
             
             
             </ul>
               
           팀원
         <ul> <li><b>Android Studio, Java를 이용한 어플리케이션 개발</b></li>
         <li>센서(온습도, 가스) 값 실시간 모니터링</li>
        <li>전구 상태 관리(LED 색상 조정, On/Off 관리, 전원 공급 상태 등)</li>
        <li>Firebase Realtime Database와 연동</li>
        
        
             
             
             </ul>
               
               
               
          </div>
          
          
              <br/><br/>  
          
          
          
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           의미
          </h2>
        
        </div>
          
          
           <div className = "text-start">
        이 프로젝트의 기획은 중학생 때부터 어렴풋이 생각하고 있었고 작품으로 만들기도 했지만, 당시에는 빛을 발하지 못했습니다.<br/>
        
        고등학교에 입학하고 어플리케이션 개발을 정말 잘 하는 친구를 만나 제 기획에 날개를 펼칠 수 있게 되었습니다.<br/>

        아두이노에 Wifi 모듈을 접목시키는 것에 관한 정보도 많이 없고 시도해 본 사람도 많이 없어 엉뚱한 모듈을 구매해 몇 주를 허비하기도 했고, <br/>
               
        이 과정에서 학교에서 지원해 준 금액을 뛰어넘어 제 사비로 메우기도 했습니다. <br/>
               <br/>   
       저는 고등학교 시절부터 이 친구가 걸어가는 길을 동경했고, 한편으로는 존경하고 있습니다.  <br/>  
       지금은 전혀 다른 길을 걷고 있지만 언젠가 저도 그 친구의 자리까지 갈 수 있으리라 믿으면서 열심히 개발하고자 하는 동기부여가 되었고, <br/>  그 덕에 안드로이드 앱 개발도 시작하게 된 것 같습니다. 💫<br/>  
       
               
               
          </div>
          
          
          
          
      </div>
    </section>
  );
};

export default Projects;
