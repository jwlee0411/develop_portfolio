import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row, Col, Badge } from 'react-bootstrap';

import project_1 from './image/project_1.png';
import p1 from './image/3/3_1.png';
import p2 from './image/3/3_2.png';
import p3 from './image/3/3_3.png';
import p4 from './image/3/3_4.png';
import p5 from './image/3/3_5.png';
// import p6 from './image/2/2_6.png';
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
            <span className="text-gradient d-inline">K-Corona.com</span>
          </h1>

            <div>2020.11 - 2020.12 (팀 프로젝트, 개발 2)</div>
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
                
                
                  
                
            </Carousel>

           
          </div>
   
          
          <br/><br/>
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
            요약 
          </h2>
        
        </div>
          
          
           <div className = "text-start">
       <b> 코로나19 관련 정보를 볼 수 있는 웹사이트</b>입니다.
웹크롤링을 통한 실시간 코로나19 현황 조회, 게시물 작성 및 검색 등의 기능을 구현했습니다.
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
         
            </div>
            
                   
                 
                 
          </div>
                 
               <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           개발 배경
          </h2>
        
        </div>
          
          
           <div className = "text-start">
          
            수업 시간에 배운 기술을 활용하기 위한 팀 프로젝트를 진행했습니다. <br/>
            당시 유행 중이던 코로나19에 관한 정보를 제공하는 사이트를 만들면 좋을 것 같아 개발하게 되었습니다.
          </div>
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           주요 기능
          </h2>
        
        </div>
          
          
           <div className = "text-start">
         <ul> 
             <li>코로나19 관련 정보공유 게시판</li>
             <li>전세계 / 대한민국 코로나19 현황 조회</li>
        <li>코로나19 예방 방법 및 관련 사이트 안내</li>

             
             </ul>
          </div>
          
          
             <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           역할
          </h2>
        
        </div>
          
          
           <div className = "text-start">
               <b>본인</b>
         <ul> 
              <li>기획</li>
              <li>프론트엔드(HTML) 디자인</li>
             <li>Beautifulsoup을 활용한 코로나19 관련 데이터 웹 크롤링</li>
             </ul>
         
               팀원
         <ul> 
             <li>백엔드 구현(게시판)</li>
             <li>데이터베이스 구축</li>
                 
             </ul>
               
          </div>
          
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           의미
          </h2>
        
        </div>
          
          
           <div className = "text-start">
          Django 프레임워크와 Python을 이용해본 첫 프로젝트입니다.<br/>
            
        프레임워크 구조를 파악하는 데 있어 어려움이 많았습니다. 빈 HTML 파일에 "Hello World!" 라고만 쳐도 그대로 출력되는 기존에 제가 해왔던 웹 개발과는 다르게 기본적인 기능 구현에도 여러 Python(.py) 파일을 건드려야 했고,
        편리하게 데이터베이스를 관리할 수 있는 Migration 기능이나 사용자 관리 기능 같은 것은 오히려 걸리적거리다고 느껴졌고, 이해하기 쉽지 않은 부분이었습니다.  <br/>
        Django에 대한 이해도가 높지 않아 기존 Python 코드와 HTML/CSS 파일을 Django 프레임워크에 적용시키는 것에 그친 것 같아 아쉬웠습니다. 😅
          
          
          </div>
      </div>
    </section>
  );
};

export default Projects;
