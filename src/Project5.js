import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row, Col, Badge } from 'react-bootstrap';

import project_1 from './image/project_1.png';
import p1 from './image/5/5_1.png';
import p2 from './image/5/5_2.png';
import p3 from './image/5/5_3.png';
import p4 from './image/5/5_4.png';
import p5 from './image/5/5_5.png';
import p6 from './image/5/5_6.png';
import p7 from './image/5/5_7.png';
import p8 from './image/5/5_8.png';
import p9 from './image/5/5_9.png';
import p10 from './image/5/5_10.png';
import p11 from './image/5/5_11.png';
import p12 from './image/5/5_12.png';
import p13 from './image/5/5_13.png';
import p14 from './image/5/5_14.png';
import p15 from './image/5/5_15.png';
// Add imports for other project images
// ... (import statements)

// ... (import statements)dd

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
            <span className="text-gradient d-inline">Mapable</span>
          </h1>

            <div>2021.04 - 2021.07 (개인 프로젝트)</div>
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
                  <Carousel.Item>
                <img src={p12} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>  <Carousel.Item>
                <img src={p13} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>  <Carousel.Item>
                <img src={p14} className="img-fluid" alt="Project 2" />
                
              </Carousel.Item>  <Carousel.Item>
                <img src={p15} className="img-fluid" alt="Project 2" />
                
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
           <b>교통약자의 편리한 이동을 돕는 대중교통 길찾기 어플리케이션</b>입니다.<br/>
                    휠체어 사용, 거동 불편 유무에 따라 최적화된 길찾기 경로를 제공해 교통약자가 실제로 이용할 수 있는 경로를 보여주고 안내하는 기능을 구현했습니다.<br/>
                    또한 시각장애가 있는 분을 위한 음성인식 설정, 길찾기 기능도 구현했습니다.<br/>
               <br/>
               <b>2021 모바일 콘텐츠 개발대회(생활, 비디자인 부문)에서 은상을 수상했습니다. </b>
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
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Kotlin</div>
              </div>
                  <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Java</div>
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
          
            휠체어를 타신 분이 저상버스를 쉽게 이용하지 못하는 모습을 보고 교통약자가 편하게 이동할 수 있도록 도와주는 장치가 필요하다고 생각했습니다. <br/>
               비록 완전한 도움이 되지는 못하겠지만, 어느 정도 편해졌으면 좋겠다는 마음이 들어 교통약자를 위한 대중교통 길찾기 어플리케이션을 개발하게 되었습니다.
          </div>
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           주요 기능
          </h2>
        
        </div>
          
          
           <div className = "text-start">
         <ul> <li>장소 검색, 공유, 북마크 등록</li>
             <li>대중교통 길찾기</li>
        
        <li>개인별 맞춤형 설정(휠체어 유무 등)을 통한 길안내</li>
        <li>커뮤니티(게시물 작성)</li>
             <li>공지사항</li>
        <li>회원가입 / 로그인</li>

             
             
             </ul>
          </div>
          
          
              <br/><br/>  
          
          
       
          
          
          
          
          
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           의미
          </h2>
        
        </div>
          
          
           <div className = "text-start">
         이 어플리케이션에서 메인 기능으로 사용하는 ODSay사의 대중교통 길찾기 API가 원래는 유료라서 무료로는 개발용으로 테스트해볼 수 있는 정도의 호출 수를 지원하기 때문에, 실제 서비스로 이어지기에는 어려움이 있었습니다.<br/>
              열심히 만들었기에 부담스럽지 않은 정도의 금액이었으면 스토어에 업로드해 서비스를 하고 싶었습니다. <br/>
               <br/>
               프로젝트를 개발한 이후로 이 어플리케이션에서 지원하는 대부분의 기능을 카카오맵에서도 지원하기 시작했습니다. <br/>
               서울의 경우 노선버스에 저상버스 도입이 의무화되고, 일부 고속버스에 휠체어 전용 좌석이 설치되기도 했습니다. <br/>
               우리나라도 교통약자의 이동권이 점점 보장되고 있다는 점에서 제가 영향력을 끼친 것은 정말 미미하겠지만 그래도 정말 다행이고 좋은 변화라고 생각합니다. 👍<br/>
          </div>
          
          
          
          
      </div>
    </section>
  );
};

export default Projects;
