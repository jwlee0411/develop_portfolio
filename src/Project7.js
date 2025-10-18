import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row, Col, Badge } from 'react-bootstrap';

import project_1 from './image/project_1.png';
import p1 from './image/7/7_1.PNG';
import p2 from './image/7/7_2.PNG';
import p3 from './image/7/7_3.PNG';
import p4 from './image/7/7_4.PNG';
import p5 from './image/7/7_5.PNG';
import p6 from './image/7/7_6.PNG';
import p7 from './image/7/7_7.PNG';
import p8 from './image/7/7_8.PNG';
import p9 from './image/7/7_9.PNG';
import p10 from './image/7/7_10.PNG';
import p11 from './image/7/7_11.PNG';
import p12 from './image/7/7_12.PNG';
import p13 from './image/7/7_13.PNG';

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

            <div>2022.11 (V1 / 팀 프로젝트, 개발 3)</div>
            <div>2023.03 - 2023.09 (V2 / 개인 프로젝트)</div>
            <div>2023.11 - 2024.03 (V3 / 개인 프로젝트)</div>
            <div>2024.11 - 2025.02 (V4.1 / 개인 프로젝트)</div>
            <div>2025.06 - 2025.07 (V4.2 / 개인 프로젝트)</div>
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

                </Carousel.Item>
                <Carousel.Item>
                    <img src={p13} className="img-fluid" alt="Project 2" />

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
                  감사의 글
              </h2>

          </div>



          <div className = "text-start" >
              <p>처음 선배로부터 “우리도 홈페이지를 만들어 보자”라는 말을 들었을 때, 실현 가능성은 50%도 되지 않아 보였습니다. 그러나 졸업을 앞둔 지금, 웹사이트는 성공적으로 운영되고 있으며, 당시의 기획보다 훨씬 많은 기능을 구현할 수 있었습니다.</p>

              <p>“지금 자면 꿈을 꾸지만, 지금 공부하면 꿈을 이룬다”라는 말이 있습니다. 단순히 꿈을 꾸는 데 그치지 않고, 앞으로 나아갈 수 있도록 격려해 주신 많은 분들 덕분에 이 프로젝트를 완성할 수 있었습니다.</p>

              <p>먼저, 본 논문의 지도교수이신 숭실대학교 전자정보공학부 이재진 교수님께 감사드립니다. 또한, 웹사이트를 처음 기획하신 제39대 동아리연합회 회장 이지훈 선배님을 비롯하여, 웹사이트 기획 및 운영 과정에서 지속적으로 소통하고 조언을 아끼지 않으신 40대 회장 김지형 선배님, 41대 회장 이수하 선배님, 42대 회장 방민석 선배님께도 진심으로 감사의 말씀을 드립니다.</p>

              <p>아울러, 웹사이트 개발에 함께 참여한 오현빈 학우에게도 감사드립니다. 시스템 운영과 예산적 지원 등 여러 부분에서 도움을 주신 학생서비스팀 이태준 선생님과 학교 관계자분들께도 감사의 뜻을 전합니다. 또한, 아직 미흡한 점이 많은 웹사이트를 이용해 주신 모든 분들께도 진심으로 감사드립니다.</p>

              <p>마지막으로, 동아리연합회 집행부로 함께 활동하며 웹사이트뿐 아니라 여러 방면에서 도움과 배려를 주신 39대 은하SSU, 40대 LET’S, 41대 OUR:US, 42대 US:SCENT 집행부원 여러분께 깊이 감사드립니다. 이름을 모두 언급하지는 못하였으나, 한 분 한 분의 노고와 지원을 마음속 깊이 기억하고 있습니다.</p>

              <p>숭실대학교 전자정보공학부에 입학한 이후, 아니 지금까지 수행한 모든 프로젝트 중 가장 많은 시간과 노력을 기울인 작업이었습니다. 그러나 후회는 없으며, 오히려 이 프로젝트를 성공적으로 완성해 낸 제 자신이 자랑스럽습니다. 앞으로도 제가 좋아하는 분야에 열정을 다하며 성장해 나가고자 합니다.</p>

          </div>







          <br/><br/>


        {/*  <div className="d-flex align-items-center justify-content-between mb-4">*/}
        {/*  <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>*/}
        {/*    사용 기술*/}
        {/*  </h2>*/}
        
        {/*</div>*/}
             
          
          {/*   <div className="mb-0">*/}

          {/*  <div className="row row-cols-1 row-cols-md-4 mb-4">*/}
          {/*    <div className="col mb-3 mb-md-0">*/}
          {/*      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Django</div>*/}
          {/*    </div>*/}
          {/*    <div className="col mb-3 mb-md-0">*/}
          {/*      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div>*/}
          {/*    </div>*/}
          {/*        <div className="col mb-3 mb-md-0">*/}
          {/*      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML/CSS</div>*/}
          {/*    </div>*/}
          {/*     <div className="col mb-3 mb-md-0">*/}
          {/*      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Bootstrap</div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  */}
          {/*       */}
          {/* <div className="row row-cols-1 row-cols-md-4 mb-4">*/}
          {/*    <div className="col mb-3 mb-md-0">*/}
          {/*      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">nginx</div>*/}
          {/*    </div>*/}
          {/*    <div className="col mb-3 mb-md-0">*/}
          {/*      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">NAVER Cloud</div>*/}
          {/*    </div>*/}
          {/*        */}
          {/*  </div>*/}
          {/*         */}
          {/*       */}
          {/*       */}
          {/*</div>*/}
          {/*       */}
          {/*     <br/><br/>  */}



             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           {/*개발 배경*/}
          </h2>
        
        </div>
          
          
           <div className = "text-start">
        {/*  */}
        {/*    기존에 동아리연합회 내부에서 수작업으로 진행하던 작업(공동연습실 예약)을 홈페이지로 한 번에 처리하기 위해 개발했습니다.<br/>*/}

        {/*처음에는 활동보고서 제출, 공동연습실 예약 이렇게 두 가지 기능 정도를 생각했으나, 논의 과정에서 여러 가지 기능을 추가해 지금의 웹사이트가 되었습니다. 😊*/}
          </div>
          
          

             <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="text-primary fw-bolder mb-0" onClick={toggleCarousel}>
           자세히 보기
          </h2>
        
        </div>
          
          
           <div className = "text-start">
               (링크 업데이트 예정) <br/>
              <a href="http://www.ssudy.com/" style={{textDecoration: "none"}}>학사학위 청구논문 - 선착순 트랜잭션 최적화 및 SHA-256 기반 보안 강화를 위한 숭실대학교 동아리연합회 웹사이트 설계 및 운영 </a> <br/><br/>
               <a href="http://www.ssudy.com/" style={{textDecoration: "none"}}>학사학위 청구논문 발표자료 </a> <br/><br/>
               <a href="http://www.ssudy.com/" style={{textDecoration: "none"}}>전체 소스코드 - Github </a>

          </div>
          
          
              <br/><br/>  


          
          
           <div className = "text-start" >
{/*          전반적인 Django 프레임워크의 작동 방식을 익힐 수 있었고, Bootstrap 프레임워크를 처음 적용해 보며 반응형 웹사이트를 구현했습니다.<br/>*/}

{/*네트워크와 서버 관련 지식이 사실상 전무했지만, 프로젝트를 진행하면서 서버 설정하는 법, 리소스 할당/연결, 도메인 설정 방법 등에 대해 실습할 수 있었습니다. <br/>*/}

{/*개발 서버를 통해 실제 배포를 진행하면 안 되는 이유에 대해 직접 체감할 수 있었습니다. 개발 환경에서는 오류가 발생하지 않았지만, 실제 프로덕션 환경에서는 보안 문제와 더불어 여러 사용자가 동시에 사용시 간혹(체감상 100번의 요청당 한 번 정도) 서버 연결이 끊기는 경우가 발생했습니다.<br/>*/}

{/*대회 출품이나 개인 프로젝트와는 다르게 실제 서비스를 출시하는 것이 훨씬 까다로웠습니다. 개발하면서 작은 경고 메시지에도 신경을 더 쓰게 되고, 계속해서 테스트를 해 보며 완성도를 높이는 과정이 제 예상보다 오래 걸렸습니다. 교내 담당자와 동아리연합회 내부 회의 등에서도 여러 의견이 나와 의견을 조율하는 과정도 쉽지 않았습니다.<br/> */}

{/*여태까지 해봤던 프로젝트 중 가장 오랜 시간이 걸렸고, 그만큼 하면서 가장 많은 것을 배울 수 있었던 저에게 가장 뜻깊은 프로젝트로 남게 되었습니다. 🫠<br/>*/}
          </div>
          
          
          
          
      </div>
    </section>
  );
};

export default Projects;
