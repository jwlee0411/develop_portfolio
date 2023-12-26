import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row, Col, Badge } from 'react-bootstrap';

import project_1 from './image/project_1.png';
import p1 from './image/4/4_1.png';
import p2 from './image/4/4_2.png';
import p3 from './image/4/4_3.png';
import p4 from './image/4/4_4.png';
import p5 from './image/4/4_5.png';
import p6 from './image/4/4_6.png';
import p7 from './image/4/4_7.png';
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
            <span className="text-gradient d-inline">Code:Green</span>
          </h1>

            <div>2020.10 - 2021.01 (팀 프로젝트, 어플리케이션 2 + AI 1)</div>
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
                
            </Carousel>

           
          </div>
   
          
          <br/><br/>
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
            요약 
          </h2>
        
        </div>
          
          
           <div className = "text-start">
         물건의 바코드를 인식하거나 사진을 찍으면 분리배출 정보를 알려주는, <b>쓰레기 분리수거/배출 도우미 어플리케이션</b>입니다.<br/>
               이외에도 분리배출 통계를 제공하거나 내 지역의 분리배출 정보 확인, 친환경 제품 추천 등의 기능을 구현했습니다.<br/>
               <br/>
                 <b>2020 디지털 콘텐츠 개발대회(앱, 비디자인 부문) 에서 은상을 수상했습니다.</b>
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
                  <div className="col mb-3 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">TensorFlow</div>
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
          
            코로나19로 인한 온라인 쇼핑과 배달 증가로 쓰레기 배출량이 증가했다는 뉴스를 보고, 분리수거를 돕는 어플리케이션이 필요하다고 생각해 개발하게 되었습니다. <br/>
               
             
          </div>
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           주요 기능
          </h2>
        
        </div>
          
          
           <div className = "text-start">
         <ul> 
             <li>바코드 인식을 통한 재활용 정보 출력</li>
             <li>바코드 인식을 통한 상품 데이터베이스 구축</li>
        <li>AI 사물인식을 통한 재활용 정보 출력</li>
        <li>분리배출 통계(성별, 지역, 나이별) 분석</li>
                <li>상품 정보를 기반으로 친환경 제품 추천</li>
        <li>내 지역의 분리배출 정보 확인</li>
        <li>로그인 / 회원가입</li>
             
             
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
             <li><b>기획, 어플리케이션 개발</b></li>
              
             <li>Firebase Realtime Database를 활용한 데이터베이스 구축</li>
            <li>Firebase Auth를 활용한 회원 관리</li>
             <li>바코드 인식, 로그인/회원가입, 배출 방법 표시 기능 구현</li>
           <li>API를 통해 가져온 데이터 표시</li>

             
             
             </ul>
               
               팀원 1
         <ul> <li><b>어플리케이션 개발</b></li>
             <li>통계 데이터 수집 / 내역 조회(그래프 표시) 기능 구현</li>
             <li>API를 통해 가져온 데이터 표시</li>
       
             
             
             </ul>
               
               
                      팀원 2
         <ul> <li><b>TensorFlow AI 모델(TFlite) 적용</b></li>
               <li>AI 사물인식 기능 구현</li>          
             
             </ul>
               
               
               
          </div>
          
          
              <br/><br/> 
          
          
          
          
          
          
          
          
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           의미
          </h2>
        
        </div>
          
          
           <div className = "text-start">
         Jsoup을 사용해 웹 크롤링을 진행했고, Firebase의 Realtime Database와 Firebase Auth를 사용해 서버리스 시스템을 구축했습니다.<br/>

프로젝트가 복잡해질수록 Realtime Database와 같은 단일 파일 형태의 데이터베이스가 개발이나 실행에 있어 비효율적이라는 것을 알 수 있었습니다.  <br/>

               어플리케이션 개발을 처음 팀으로 진행하는 과정에서 효율적인 팀 프로젝트 진행 방법과 Github 사용, 버전 관리의 중요성에 대해 다시 한 번 생각해 보는 계기가 되었습니다. <br/>
               (* [띠앗]의 경우 초반에는 개인 프로젝트로 진행) <br/>

               <br/>
               
Kotlin을 공부하기 위해 Kotlin을 메인 언어로 사용하고 싶었지만 협업에 어려움이 있어 수업 시간에 배웠던 Java를 사용했고, <br/>
               
               팀원이 마지막까지 인공지능 모델을 구현하기 위해 여러 방면으로 노력했으나, 시간 관계상 오픈 소스로 공개되어 있던 인공지능 모델을 그대로 넣을 수밖에 없었습니다.<br/>
               
               개발 시간이 좀 더 주어졌다면 어땠을까라는 아쉬움이 많이 남는 프로젝트였습니다. 🥺
          </div>
          
          
          
          
      </div>
    </section>
  );
};

export default Projects;
