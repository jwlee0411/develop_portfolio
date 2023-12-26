import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row, Col, Badge } from 'react-bootstrap';

import project_1 from './image/project_1.png';
import p8_1 from './image/8/8_1.png';
import p8_2 from './image/8/8_2.png';
import p8_3 from './image/8/8_3.png';
import p8_4 from './image/8/8_4.png';
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
            <span className="text-gradient d-inline">종우의 개발 꾸러미</span>
          </h1>
          <div>2023.12 (개인 프로젝트)</div>
        </div>

        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0">
            미리보기 
          </h2>
        </div>

   
          <div className="carousel-container">
            <Carousel slide activeIndex={activeIndex} onSelect={handleSelect} data-bs-theme="dark">
              <Carousel.Item>
                <img src={p8_1} className="img-fluid" alt="Project 1" />
               
              </Carousel.Item>
              <Carousel.Item>
                <img src={p8_2} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
              
                    <Carousel.Item>
                <img src={p8_3} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>
                
                    <Carousel.Item>
                <img src={p8_4} className="img-fluid" alt="Project 2" />
                
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
         <b>포트폴리오 용도로 제작한 개인 웹사이트</b>입니다.<br/>

            React, Bootstrap 라이브러리를 활용해 제작했습니다.
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
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div>
              </div>
              <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React</div>
              </div>
                  <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML/CSS</div>
              </div>
               <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Bootstrap</div>
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
             <li>다루는 기술 스택 정리</li>
        <li>연도별 한 것 / 작업물 정리</li>
        <li>프로젝트별 상세 내용 / 맡은 역할 / 느낀 점 등 정리</li>
             </ul>
          </div>
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           의미
          </h2>
        
        </div>
          
          
           <div className = "text-start">
                기존에 개발했던 프로젝트들을 돌아보며 정리하는 시간을 가졌습니다.<br/>
               Github에 프로젝트 제목과 한줄소개 정도만 정리해 둔 것이 다였기에 제가 만든 프로젝트를 찾는 것도, 정리하는 것도 오랜 시간이 걸렸습니다. <br/>
               중구난방으로 작성한 개발 보고서의 내용을 웹사이트에 동일한 양식으로 통일하는 과정도 상당히 오래 걸리고 쉽지만은 않은 작업이었습니다. <br/>
               <br/>
               
               
          React와의 첫경험, 즐거웠습니다.<br/>
          왜 많은 기업과 개발자들이 React를 사용하는지 알 수 있었습니다. <br/>
          React에 대한 첫인상은 그리 좋지 못했지만, 사용하면 할수록 기존에 사용하던 Django 프레임워크와 Python이 그립지 않을 정도로 편리하고 직관적으로 다가왔습니다.<br/>
          익숙해지는 데에는 아직 더 많은 시간이 필요하겠지만 웹 개발 경험이 있어서인지 금방 적응할 수 있어 보입니다. <br/>
               <br/>
              
               (* 사이트를 개발한 시점에서 가장 인상깊었던 프로젝트를 하나 꼽으라면, 동아리연합회 웹사이트 프로젝트입니다👌)<br/>
               
          </div>
          
          
          
          
      </div>
    </section>
  );
};

export default Projects;
