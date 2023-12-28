import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row, Col, Badge } from 'react-bootstrap';

import project_1 from './image/project_1.png';
import p1 from './image/7/7_1.png';
import p2 from './image/7/7_2.png';
import p3 from './image/7/7_3.png';
import p4 from './image/7/7_4.png';
import p5 from './image/7/7_5.png';
import p6 from './image/7/7_6.png';
import p7 from './image/7/7_7.png';
import p8 from './image/7/7_8.png';
import p9 from './image/7/7_9.png';
import p10 from './image/7/7_10.png';
import p11 from './image/7/7_11.png';


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
            <span className="text-gradient d-inline">숭실대학교 동아리연합회</span>
          </h1>

            <div>2022.10 - 2022.11 (V0 / 팀 프로젝트, 개발 3)</div>
            <div>2022.12 - 2023.08 (V1 / 개인 프로젝트)</div>
            <div>2023.10 - 2024.01 (V2 / 개인 프로젝트)</div>
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
                
                
                    <Carousel.Item>
                <img src={p5} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
                
                       <Carousel.Item>
                <img src={p6} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
                       <Carousel.Item>
                <img src={p7} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
                       <Carousel.Item>
                <img src={p8} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
                       <Carousel.Item>
                <img src={p9} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
                       <Carousel.Item>
                <img src={p10} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
                       <Carousel.Item>
                <img src={p11} className="img-fluid" alt="Project 2" />
                
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
         기존 사용하던 동아리연합회 <b>네이버 카페를 대체하기 위해 개발한 숭실대학교 동아리연합회 웹사이트</b>입니다.<br/>

            2023년 8월 서비스를 시작했고, 2023년 기준 7개 분과 / 70개 동아리에 소속된 3,700명의 중앙동아리 회원이 사이트를 이용하고 있습니다.
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
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Django</div>
              </div>
              <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div>
              </div>
                  <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML/CSS</div>
              </div>
               <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Bootstrap</div>
              </div>
            </div>
            
                 
           <div className="row row-cols-1 row-cols-md-4 mb-4">
              <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">nginx</div>
              </div>
              <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">NAVER Cloud</div>
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
          
            기존에 동아리연합회 내부에서 수작업으로 진행하던 작업(공동연습실 예약)을 홈페이지로 한 번에 처리하기 위해 개발했습니다.<br/>

        처음에는 활동보고서 제출, 공동연습실 예약 이렇게 두 가지 기능 정도를 생각했으나, 논의 과정에서 여러 가지 기능을 추가해 지금의 웹사이트가 되었습니다. 😊
          </div>
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           주요 기능
          </h2>
        
        </div>
          
          
           <div className = "text-start">
              V2
                 <ul> 
        <li>실시간 공동연습실 예약 및 관리</li>
        <li>실시간 강의실 대관 신청 및 관리</li>
        <li>회원가입 (이메일 인증) / 로그인</li>
           </ul>
               
            V1
         <ul> 
             <li>동아리연합회 소개 페이지 (동아리연합회 계정으로 관리)</li>
             <li>동아리 소개 페이지 (각 동아리 계정으로 관리)</li>
        <li>게시물 작성 / 파일 업로드, 게시물 검색</li>
        <li>회원 및 계정 관리</li>

             </ul>
          </div>
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           의미
          </h2>
        
        </div>
          
          
           <div className = "text-start">
          전반적인 Django 프레임워크의 작동 방식을 익힐 수 있었고, Bootstrap 프레임워크를 처음 적용해 보며 반응형 웹사이트를 구현했습니다.<br/>

네트워크와 서버 관련 지식이 사실상 전무했지만, 프로젝트를 진행하면서 서버 설정하는 법, 리소스 할당/연결, 도메인 설정 방법 등에 대해 실습할 수 있었습니다. <br/>

개발 서버를 통해 실제 배포를 진행하면 안 되는 이유에 대해 직접 체감할 수 있었습니다. 개발 환경에서는 오류가 발생하지 않았지만, 실제 프로덕션 환경에서는 보안 문제와 더불어 여러 사용자가 동시에 사용시 간혹(체감상 100번의 요청당 한 번 정도) 서버 연결이 끊기는 경우가 발생했습니다.<br/>

대회 출품이나 개인 프로젝트와는 다르게 실제 서비스를 출시하는 것이 훨씬 까다로웠습니다. 개발하면서 작은 경고 메시지에도 신경을 더 쓰게 되고, 계속해서 테스트를 해 보며 완성도를 높이는 과정이 제 예상보다 오래 걸렸습니다. 교내 담당자와 동아리연합회 내부 회의 등에서도 여러 의견이 나와 의견을 조율하는 과정도 쉽지 않았습니다.<br/> 

여태까지 해봤던 프로젝트 중 가장 오랜 시간이 걸렸고, 그만큼 하면서 가장 많은 것을 배울 수 있었던 저에게 가장 뜻깊은 프로젝트로 남게 되었습니다. 🫠<br/>
          </div>
          
          
          
          
      </div>
    </section>
  );
};

export default Projects;
