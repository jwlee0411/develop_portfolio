import React from 'react';
import {Link} from 'react-router-dom';



import { Button, Container, Row, Col, Badge } from 'react-bootstrap';



const Skills = (props) => {
	return (
		<>
        
                    <div class="container px-5 my-5">
                <div class="text-center mb-5">
                    <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">기술</span></h1>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
  <section>
      {/* Skillset Card*/}
      <div className="card shadow border-0 rounded-4 mb-5">
        <div className="card-body p-5">
            {/* Languages list*/}
          <div className="mb-0">
            <div className="d-flex align-items-center mb-4">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <i className="bi bi-code-slash"></i>
              </div>
              <h3 className="fw-bolder mb-0">
                <span className="text-gradient d-inline">Front-End</span>
              </h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-4">
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div>
              </div>
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React</div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML/CSS</div>
              </div>
            </div>
            
          </div>
            
          {/* Professional skills list*/}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <i className="bi bi-tools"></i>
              </div>
              <h3 className="fw-bolder mb-0">
                <span className="text-gradient d-inline">Back-End</span>
              </h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-4">
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Django</div>
              </div>
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">nginx</div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">NAVER Cloud</div>
              </div>
                <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">AWS</div>
              </div>
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Firebase</div>
              </div>
              
              
            </div>
          </div>
          
               <div className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <i className="bi bi-tools"></i>
              </div>
              <h3 className="fw-bolder mb-0">
                <span className="text-gradient d-inline">Application</span>
              </h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-4">
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Android</div>
              </div>
              <div className="col mb-4 mb-md-0">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Java</div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Kotlin</div>
              </div>
            </div>
          
          </div>
            
        </div>
      </div>
    </section>
        </div></div></div>
        
</>

	);
};

export default Skills;