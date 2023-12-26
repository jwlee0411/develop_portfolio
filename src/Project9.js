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
            <span className="text-gradient d-inline">서울 주요대학 교양교육 분석</span>
          </h1>
          <div>2023.06 - 2024.02</div>
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
        숭실교양공동체 2기 데이터사이언스팀에서 개발한 <b>서울 주요대학 교양교육 분석 데이터를 시각화한 웹사이트</b>입니다.
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
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div>
              </div>
              <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Streamlit</div>
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
          
            데이터사이언스 팀에서 1년간 서울 주요 대학의 교양교육 데이터를 수집 및 분석하는 것을 계획으로 세워, 이 과정에서 개발하게 된 프로젝트입니다. <br/>
            
          </div>
          
          
              <br/><br/>  
   
          
          
           <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           역할
          </h2>
        
        </div>
          
          팀원(<b>본인</b>), 팀장
           <div className = "text-start">
         <ul> <li>웹사이트 기획</li>
                <li>Streamlit 라이브러리 사용, Python으로 데이터 분석 진행 및 서버 구축</li>
             </ul>
          </div>
          
          
          전체
           <div className = "text-start">
         <ul> 
             <li>서울 주요대학 교양교육 데이터 수집 및 전처리</li>
               
             </ul>
          </div>
          
          
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           의미
          </h2>
        
        </div>
          
          
           <div className = "text-start">
          10개 대학 / 20,000개 이상의 교양교육 데이터를 수집하고 분석했습니다.<br/>

            기존에 존재하지 않았던 대학별 교양교육 데이터를 수치화하고 통계를 내는 작업이 방대한 데이터로 인해 생각보다 오랜 시간이 걸렸습니다. <br/>
               
            아무것도 주어지지 않은 상황에서 그럴듯한 결과물을 만들어내기까지의 과정이 결코 쉽지 않았지만, 험난한 과정을 끝냈을 때의 뿌듯함이 제가 개발을 10년 가까이 계속하고 있는 원동력이 되는 것 같습니다. 🙂 <br/>
               
          </div>
          
          
          
          
      </div>
    </section>
  );
};

export default Projects;
