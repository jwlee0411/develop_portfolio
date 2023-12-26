import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row, Col, Badge } from 'react-bootstrap';

import project_1 from './image/project_1.png';
import p1 from './image/6/6_1.png';
import p2 from './image/6/6_2.png';
import p3 from './image/6/6_3.png';
import p4 from './image/6/6_4.png';
import p5 from './image/6/6_5.png';


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
            <span className="text-gradient d-inline">너울</span>
          </h1>

            <div>2023.11 - 2023.12 (팀 프로젝트, 개발 2)</div>
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
         <b>법률 자문 AI 커뮤니티 웹사이트</b>입니다.<br/>

            OpenAI(GPT 4.0) API와 LangChain 프레임워크를 이용했고, 법률 데이터를 이용한 프롬포트 엔지니어링을 진행했습니다.<br/>
            게시판 기능과 조회수 확인 기능 등을 구현했고, NAVER Cloud를 이용해 서버를 구축했습니다.
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
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Nginx</div>
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
          
            지난 8월부터 금융그룹 재직자를 대상으로 하는 인공지능의 원리와 ChatGPT를 직무에 활용하는 방법에 대해 알려주는 수업에서 과목조교로 참여했습니다.<br/>
            해당 수업에 같이 조교로 참여했던 선배와 함께 공모전에 출전했고, 수업에서 습득한 지식을 담아 웹사이트를 개발했습니다. 
          </div>
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           주요 기능
          </h2>
        
        </div>
          
          
           <div className = "text-start">
              
                 <ul> 
        <li>법률과 관련된 정보를 질문하면 해당 법률정보와 GPT 4.0 모델을 이용한 답변 제공</li>
    <li>커뮤니티 게시판 형식으로 최신 질문 표시</li>
    <li>질문 관련 법령정보 제공</li>
    <li>유사한 질문을 태그 형태로 분류</li>
    <li>질문에 대한 추천 기능</li>
      
           </ul>
               

          </div>
          
          
               <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           역할
          </h2>
        
        </div>
          
          
           <div className = "text-start">
               
               
                팀원 (<b>본인</b>)
         <ul> 
             <li><b>프론트엔드, 백엔드(Django, Database, Server) 개발</b></li>
             <li>Django에 Python 코드 연결, 비동기 처리 구현</li>
             <li>게시판 기능, 조회수 처리</li>
            <li>데이터베이스, 서버 구현</li>
    

             </ul>
               
               
           팀장
                 <ul> 
        <li><b>기획, 백엔드(Python) 개발</b></li>
        <li>법률정보센터(law.go.kr) 데이터 크롤링</li>
        <li>법률 데이터를 이용한 프롬포트 엔지니어링</li>
        <li>LangChain 프레임워크와 OpenAI 등 각종 라이브러리를 이용한 Python 코드 구현</li>
           </ul>
               
           
          
          
          </div>
          
          
          
          
              <br/><br/>  
             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           의미
          </h2>
        
        </div>
          
          
           <div className = "text-start">
OpenAI(GPT 4.0) API와 LangChain 프레임워크를 이용했고, 법률 데이터를 이용한 프롬포트 엔지니어링을 진행했습니다. <br/>

게시판 기능과 조회수 확인 기능 등을 구현했고, NAVER Cloud를 이용해 서버를 구축했습니다. <br/>

GPT-4 모델을 사용하니 생각보다 비용이 많이 발생했다는 점에서(질문을 한 번 입력할 때마다 150원 이상의 비용 소요 / 개발 과정에서 20달러 가량의 크레딧 사용), 추후 보다 저렴한 가격으로 정확한 결과값을 도출해내는 방법을 개발할 필요가 있어 보입니다. <br/>

프롬포트 엔지니어링 과정에서 여러 예외 사항(예상치 못한 답변, 질문에 따라 표시되는 답변의 편차가 지나치게 큼)을 처리해주는 과정이 생각보다 복잡했고 여러 가지 경우의 수를 고려해야 했습니다. <br/>

개발 과정에서 서버의 인바운드/아웃바운드 포트를 모두 열어 두거나 Github에 api key를 실수로 삭제하지 않고 Public으로 업로드하는 일이 있었습니다. 이 과정에서 몇 번의 경고 이메일을 받았고, 앞으로는 이런 실수를 하지 않도록 최대한 조심해야겠다는 경각심을 가지게 되었습니다. 🥲<br/>
          </div>
          
          
          
          
      </div>
    </section>
  );
};

export default Projects;
