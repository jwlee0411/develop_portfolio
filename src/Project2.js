import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row, Col, Badge } from 'react-bootstrap';

import project_1 from './image/project_1.png';
import p1 from './image/2/2_1.png';
import p2 from './image/2/2_2.png';
import p3 from './image/2/2_3.png';
import p4 from './image/2/2_4.png';
import p5 from './image/2/2_5.png';
import p6 from './image/2/2_6.png';
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
            <span className="text-gradient d-inline">띠앗</span>
          </h1>
          <div>2020.06 - 2020.08 (V1 / 개인 프로젝트)</div>
            <div>2020.10 - 2020.12 (V2 / 팀 프로젝트, 개발 3 + 디자인 1)</div>
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
                
            </Carousel>

           
          </div>
   
          
          <br/><br/>
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
            요약 
          </h2>
        
        </div>
          
          
           <div className = "text-start">
               <b>순우리말을 친숙하게 사용하고 생활화할 수 있도록 해 주는 우리말 사전 어플리케이션</b>입니다.<br/>
            우리말 사전, 우리말로 바꾸기(번역), 우리말 단어 맞추기 기능을 지원합니다.   <br/>

               <br/>
              
              V1) <b>2020 모바일 콘텐츠 개발대회(생활, 비디자인 부문) 에서 은상을 수상했습니다.</b><br/>
              V2) <b>서울디지털재단 2020 스마트시민랩 커뮤니티 지원사업에 선정되어 해당 사업을 통해 개발한 어플리케이션입니다.</b>
               
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
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Android Studio</div>
              </div>
              <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Java</div>
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
          
            외래어를 많이 사용하는 현재의 우리말 실정을 깨닫고 순우리말을 친숙하게 사용하고 생활화할 수 있는 어플리케이션을 기획, 개발하게 되었습니다. 
          </div>
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           주요 기능
          </h2>
        
        </div>
          
          
           <div className = "text-start">
         <ul> <li>우리말 사전</li>
             <li>우리말로 바꾸기 (번역 기능)</li>
        <li>우리말 단어 맞추기 (퀴즈)</li>
    
             
             
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
             <ul> 
             <li>어플리케이션 및 사업 기획</li>
             <li>운영팀(서울디지털재단)과 소통</li>
            <li>각종 서류작업 및 지출 담당</li>
    
             </ul>
               
               
              개발 (<b>본인 포함</b> 3명)
             <ul> <li>디자인 적용</li>
                 <li>어플리케이션 개발</li>
             </ul>  
               
               
                디자인 (1명)
             <ul> <li>어플리케이션 디자인</li>
                <li>발표/성과보고 PPT 제작</li>
                 <li>홍보영상, 포스터 디자인/제작</li>
             </ul>      
               
               
               
          </div>
          
          
          
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           의미
          </h2>
        
        </div>
          
          
           <div className = "text-start">
          학교 소수전공 심화 수업을 통해 Android Studio를 배운 후 처음 기획, 개발한 어플리케이션입니다. <br/>
          단순히 수업 프로젝트 발표를 위해 써먹기에는 아까운 기획이라고 생각해서, 수업 때 개발했던 것에서 이름도 바꾸고 디자인도 갈아엎고 기능도 여러 가지 추가해 본 결과 지금의 어플리케이션이 되었습니다.(V1)<br/>
          그 후 서울디지털재단에서 운영하는 2020 스마트시민랩 커뮤니티 지원사업에 선정되어 디자인을 다시 한 번 갈아엎었고<br/>스토어(Google Play, 원스토어) 업로드, SNS를 통한 홍보 등을 진행했습니다.<br/>
               <br/>
               
        디자이너와 처음 협업을 진행했는데, 제가 원하는 디자인을 고르는 것이랑 남이 지정해준 디자인에 맞게 구현하는 것이 생각보다 매우 큰 차이였습니다.<br/>
              포트폴리오를 정리하는 과정에서 되돌아보니 제가 개발했던 것들 중 가장 그럴듯하게 보이는 것이 이 어플리케이션인 것을 보아 디자이너가 있고 없고의 차이는 난이도나 퀄리티 양쪽 면에서 모두 중요한 것 같습니다.<br/>
               
          (처음 기획부터 비영리를 목적으로 진행했기에 해당 사업을 통해 별도의 수익을 거둘 수는 없었던 것이 지나고 보니 아쉽게 느껴지기도 했습니다😅)<br/>     
          </div>
          
          
          
          
      </div>
    </section>
  );
};

export default Projects;
