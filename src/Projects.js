import React from 'react';
import {Link} from 'react-router-dom';



import { Button, Container, Row, Col, Badge } from 'react-bootstrap';

import project_1 from './image/project_4.png' // Signal
import project_2 from './image/project_8.png' // 띠앗
import project_3 from './image/project_5.png' //K코로나
import project_4 from './image/project_2.png' // Code:Green
import project_5 from './image/project_1.png' // Mapable
import project_6 from './image/project_7.png' // 너울
import project_7 from './image/project_6.png' // 동연
import project_8 from './image/project_3.png' // 포폴
import project_9 from './image/project_3.png' // 교양공동체


const Projects = (props) => {
	return (


  <section className="py-5">
  <div className="container px-2 mb-2">
    <div className="text-center mb-5">
      <h1 className="display-5 fw-bolder mb-0">
        <span className="text-gradient d-inline">산출물</span>
      </h1>
    </div>

    <div className="row gx-5 justify-content-center">
           <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="text-primary fw-bolder mb-0">2024</h2>
                           
                               
                            </div>
      <div className="col-10">
          
          
          
           {/* 숭실교양 - 나중에 활성화 */}
    
         
          {/*<div className="card overflow-hidden shadow rounded-4 border-0 mb-5 text-start">
  <div className="card-body p-0">
    <div className="row align-items-center" id="align_left">
      <div className="col-md-4">
        <img className="img-fluid" src={project_7} alt="..." />
      </div>
      <div className="col-md-8 p-5">
       <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Web</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Python</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># ML</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Streamlit</div>
                
                    </Badge>
        <p />
            
                <h2 className="fw-bolder">(개발중) 서울 주요대학 교양교육 분석</h2>
                  2023.06 - 2024.02 (팀 프로젝트, 4명)<br/><br/>
                <p >
                    숭실교양공동체 2기 데이터사이언스팀에서 개발한 <b>서울 주요대학 교양교육 분석 데이터를 시각화한 웹사이트</b>입니다.
                  
                </p>
                  
                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      
              <Button variant="outline-dark" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://github.com/jwlee0411/develop_portfolio" target="_blank" rel="noopener noreferrer">
                Github
              </Button>
                      
              <Button variant="outline-primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="resume.html" target="_blank" rel="noopener noreferrer" disabled>
                사이트 접속
              </Button>
                <Button variant="primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="./projects/9" disabled>
                자세히 보기
              </Button>
             
        </div>
      </div>
    </div>
  </div>
</div> */}

          
  
          
          
          
                       {/* 동연 */}
<div className="card overflow-hidden shadow rounded-4 border-0 mb-5 text-start">
  <div className="card-body p-0">
    <div className="row align-items-center" id="align_left">
      <div className="col-md-4">
        <img className="img-fluid" src={project_7} alt="..." />
      </div>
      <div className="col-md-8 p-5">
        <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Web</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Django</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Nginx</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Python</div>
                
                    </Badge>
        <p />
        <h2 className="fw-bolder">숭실대학교 동아리연합회</h2>
                  2022.10 - 2024.01 (팀⇾개인 프로젝트)<br/><br/>
                 <p >
                    <b>기존 사용하던 네이버 카페를 대체하기 위한 숭실대학교 동아리연합회 웹사이트</b>를 제작했습니다. <br/>
                    실시간 연습실 신청 및 이용내역 관리, 장소사용신청서 작성 및 출력, 회원 관리, 게시물 관리 등의 기능을 구현했습니다.<br/>
                </p>
                  
                  <div className="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      
               <Button variant="outline-dark" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://github.com/jwlee0411/ssudy_web" target="_blank" rel="noopener noreferrer">
                Github
              </Button>
                      
              <Button variant="outline-primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="http://www.ssudy.com" target="_blank" rel="noopener noreferrer">
                사이트로
              </Button>
                <Button variant="primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="./#/projects/7">
                자세히
              </Button>
        </div>
      </div>
    </div>
  </div>
</div>



          {/* 개발꾸러미 */}
          <div className="card overflow-hidden shadow rounded-4 border-0 mb-5 text-start">
              <div className="card-body p-0">
                  <div className="row align-items-center" id="align_left">
                      <div className="col-md-4">
                          <img className="img-fluid" src={project_8} alt="..." />
                      </div>
                      <div className="col-md-8 p-5">
                          <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                              <div># Web</div>

                          </Badge>&nbsp;&nbsp;&nbsp;
                          <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                              <div># React</div>

                          </Badge>&nbsp;&nbsp;&nbsp;
                          <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                              <div># Springboot</div>

                          </Badge>&nbsp;&nbsp;&nbsp;
                          <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                              <div># MySQL</div>

                          </Badge>
                          &nbsp;&nbsp;&nbsp;
                          <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                              <div># Apache</div>

                          </Badge>
                          <p />
                          <h2 className="fw-bolder">종우의 개발 꾸러미</h2>
                          2023.12 - 2024.02 (개인 프로젝트)<br/><br/>
                          <p >
                              <b>포트폴리오 용도로 제작한 개인 웹사이트</b>입니다.

                          </p>

                          <div className="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">

                              <Button variant="outline-dark" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://github.com/jwlee0411/develop_portfolio_v2" target="_blank" rel="noopener noreferrer">
                                  Github
                              </Button>

                              <Button variant="outline-primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://jwlee0411.github.io/" target="_blank" rel="noopener noreferrer">
                                  사이트로
                              </Button>
                              <Button variant="primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="./#/projects/8">
                                  자세히
                              </Button>
                          </div>


                      </div>
                  </div>
              </div>
          </div>






      </div>
    </div>
      
      
      
      
    <div className="row gx-5 justify-content-center">
           <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="text-primary fw-bolder mb-0">2023</h2>
                           
                               
                            </div>
      <div className="col-10">

          
          
                       {/* 너울 */}
<div className="card overflow-hidden shadow rounded-4 border-0 mb-5 text-start">
  <div className="card-body p-0">
    <div className="row align-items-center" id="align_left">
      <div className="col-md-4">
        <img className="img-fluid" src={project_6} alt="..." />
      </div>
      <div className="col-md-8 p-5">
       <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Web</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Django</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Python</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># NAVER Cloud</div>
                
                    </Badge><br/>
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Selenium</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># LangChain</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># ChatGPT</div>
                
                    </Badge>
                  
        <p />
        <h2 className="fw-bolder">너울</h2>
                  2023.11 - 2023.12 (팀 프로젝트, 2명)<br/><br/>
                <p >
                    <b>법률 자문 AI 커뮤니티 웹사이트</b>를 제작했습니다. <br/>
                    OpenAI(GPT 4.0) API와 LangChain 프레임워크를 이용했고, 법률 데이터를 이용한 프롬포트 엔지니어링을 진행했습니다. <br/>
                    게시판 기능과 조회수 확인 기능 등을 구현했고, NAVER Cloud를 이용해 서버를 구축했습니다.
                    
                </p>
                  
            <div className="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      
               <Button variant="outline-dark" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://github.com/jwlee0411/2023_neoul_pub" target="_blank" rel="noopener noreferrer">
                Github
              </Button>
      
                <Button variant="primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="./#/projects/6">
                자세히
              </Button>
        </div>
          
          
      </div>
    </div>
  </div>
</div>

          
          
          
       
       
      
          
          
          
          
      </div>
    </div>
      
      
      
      
         
    <div className="row gx-5 justify-content-center">
           <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="text-primary fw-bolder mb-0">2021</h2>
                           
                               
                            </div>
      <div className="col-10">
      
          
          
                       {/* Mapable */}
<div className="card overflow-hidden shadow rounded-4 border-0 mb-5 text-start">
  <div className="card-body p-0">
    <div className="row align-items-center" id="align_left">
      <div className="col-md-4">
        <img className="img-fluid" src={project_5} alt="..." />
      </div>
      <div className="col-md-8 p-5">
       <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Android</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Kotlin</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Java</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># OpenAPI</div>
                
                    </Badge>
        <p />
       <h2 className="fw-bolder">Mapable</h2>
                  2021.04 - 2021.07 (개인 프로젝트)<br/><br/>
                <p >
                    <b>교통약자의 편리한 이동을 돕는 대중교통 길찾기 어플리케이션</b>입니다.<br/>
                    휠체어 사용, 거동 불편 유무에 따라 최적화된 길찾기 경로를 제공해 교통약자가 실제로 이용할 수 있는 경로를 보여주고 안내하는 기능을 구현했습니다.<br/>
                    또한 시각장애가 있는 분을 위한 음성인식 설정, 길찾기 기능도 구현했습니다.<br/>
                </p>

          
          
           <div className="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      
               <Button variant="outline-dark" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://github.com/jwlee0411/Mapable" target="_blank" rel="noopener noreferrer">
                Github
              </Button>
           
                <Button variant="primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="./#/projects/5">
                자세히
              </Button>
        </div>
          
              
      </div>
    </div>
  </div>
</div>

          
          
     
          
          
                       {/* Code:Green */}
<div className="card overflow-hidden shadow rounded-4 border-0 mb-5 text-start">
  <div className="card-body p-0">
    <div className="row align-items-center" id="align_left">
      <div className="col-md-4">
        <img className="img-fluid" src={project_4} alt="..." />
      </div>
      <div className="col-md-8 p-5">
        <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Android</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Java</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Firebase</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># TensorFlow</div>
                
                    </Badge>
        <p />
         
                <h2 className="fw-bolder">Code:Green</h2>
                  2020.10 - 2021.01 (팀 프로젝트, 3명)<br/><br/>
                <p >
                   물건의 바코드를 인식하거나 사진을 찍으면 분리배출 정보를 알려주는, <b>쓰레기 분리수거/배출 도우미 어플리케이션</b>입니다.<br/>
                  추가로 분리배출 통계를 제공하거나 내 지역의 분리배출 정보 확인, 친환경 제품 추천 등의 기능을 구현했습니다.
                  
                </p>
                  
                   <div className="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      
               <Button variant="outline-dark" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://github.com/jwlee0411/CodeGreen" target="_blank" rel="noopener noreferrer">
                Github
              </Button>
                      
              
                <Button variant="primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="./#/projects/4">
                자세히
              </Button>
        </div>
      </div>
    </div>
  </div>
</div>

          
      
          
          
          
          
          
      </div>
    </div>
      
      
      
      
    <div className="row gx-5 justify-content-center">
           <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="text-primary fw-bolder mb-0">2020</h2>
                           
                               
                            </div>
      <div className="col-10">
          
          
                        {/* K코로나 */}
<div className="card overflow-hidden shadow rounded-4 border-0 mb-5 text-start">
  <div className="card-body p-0">
    <div className="row align-items-center" id="align_left">
      <div className="col-md-4">
        <img className="img-fluid" src={project_3} alt="..." />
      </div>
      <div className="col-md-8 p-5">
        <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Web</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Django</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Python</div>
                
                    </Badge>
                  &nbsp;&nbsp;&nbsp;
        <p />
        <h2 className="fw-bolder">K-Corona.com</h2>
                  2020.11 - 2020.12 (팀 프로젝트, 2명)<br/><br/>
                <p >
                  <b>코로나19 관련 정보를 볼 수 있는 웹사이트</b>입니다.<br/>
                    웹크롤링을 통한 실시간 코로나19 현황 조회, 게시물 작성 및 검색 등의 기능을 구현했습니다.
                  
                </p>
                  
                     <div className="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      
               <Button variant="outline-dark" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://github.com/jwlee0411/K-Corona.com" target="_blank" rel="noopener noreferrer">
                Github
              </Button>
                      
              
                <Button variant="primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="./#/projects/3">
                자세히
              </Button>
        </div>
      </div>
    </div>
  </div>
</div>

          
          
          
          
          
          
          
        {/* 띠앗 */}
<div className="card overflow-hidden shadow rounded-4 border-0 mb-5 text-start">
  <div className="card-body p-0">
    <div className="row align-items-center" id="align_left">
      <div className="col-md-4">
        <img className="img-fluid" src={project_2} alt="..." />
      </div>
      <div className="col-md-8 p-5">
        <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
          <div># Android</div>
        </Badge>&nbsp;&nbsp;&nbsp;
        <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
          <div># Java</div>
        </Badge>&nbsp;&nbsp;&nbsp;
        <p />
        <h2 className="fw-bolder">띠앗</h2>
        2020.06 - 2020.12 (개인⇾팀 프로젝트, 4명)<br /><br />
        <p>
             <b>순우리말을 친숙하게 사용하고 생활화할 수 있도록 해 주는 우리말 사전 어플리케이션</b>입니다.<br/>
            우리말 사전, 우리말로 바꾸기(번역), 우리말 단어 맞추기 기능을 구현했습니다.
        </p>
              <div className="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      
               <Button variant="outline-dark" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://github.com/jwlee0411/Tiatt" target="_blank" rel="noopener noreferrer">
                Github
              </Button>
                      
                <Button variant="outline-primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://play.google.com/store/apps/details?id=tiatt.jw" target="_blank" rel="noopener noreferrer">
                다운로드
              </Button>
                <Button variant="primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="./#/projects/2">
                자세히
              </Button>
        </div>
          
      
      </div>
    </div>
  </div>
</div>

          
      </div>
    </div>

      
      
      
         
    <div className="row gx-5 justify-content-center">
           <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="text-primary fw-bolder mb-0">2019</h2>
                           
                               
                            </div>
      <div className="col-10">
          
          
          
               {/* Signal */}
<div className="card overflow-hidden shadow rounded-4 border-0 mb-5 text-start">
  <div className="card-body p-0">
    <div className="row align-items-center" id="align_left">
      <div className="col-md-4">
        <img className="img-fluid" src={project_1} alt="..." />
      </div>
      <div className="col-md-8 p-5">
         <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># IoT</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
        
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Android</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Arduino</div>
                
                    </Badge>&nbsp;&nbsp;&nbsp;
                  <Badge bg="gradient-primary-to-secondary" mb={4} className="text-white">
                  <div># Firebase</div>
                
                    </Badge>
        <p />
        <h2 className="fw-bolder">Signal</h2>
                  2019.06 - 2019.09 (팀 프로젝트, 3명)<br/><br/>
                <p >
                    전구에 화재감지, 경보 기능과 LED 색상 조절 기능 등을 탑재한 <b>스마트 IoT 화재경보 시스템</b>입니다.<br/>
                    전구는 아두이노를 이용해 제작했고, Firebase 이용한 서버리스 시스템 구축해 언제 어디서나 전구에 접근 가능하도록 구현했습니다.<br/>
                    
                </p>
          
          <div className="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      
               <Button variant="outline-dark" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="https://github.com/jwlee0411/Signal" target="_blank" rel="noopener noreferrer">
                Github
              </Button>
                
                <Button variant="primary" className="btn px-3 py-3 me-sm-3 fs-6 fw-bolder" href="./#/projects/1">
                자세히
              </Button>
        </div>
                  
               
      </div>
    </div>
  </div>
</div>

          
       
  
          
      </div>
    </div>
      
      
      
      
  </div>
</section>



	);
};

export default Projects;