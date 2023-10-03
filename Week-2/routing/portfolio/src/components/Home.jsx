import React from 'react';
import './Home.css';
import manImage from './man.png';

// import { NavLink } from 'react-router-dom';


function Home(){
  return (
    <main>
      <section className="firstSection">
          <div className="leftSection">
              Hi My name is <span className="text-purple">Shaurya</span>
              <div>and I am a passionate</div>
              {/* <div>software Engineer</div> */}
              <span id="element"></span>
              <div className="buttons">
                  <button className="btn">Download Resume</button>
                  <button className="btn">Visit Github</button>
              </div>
          </div>
          <div className="rightSection">
              <img src={manImage} alt="man image"/>
          </div>
      </section>
      <hr/>
      <section className="secondSection">
          <span className="text-gray">.</span>
          <h1>Work Experience</h1>

          <div className="box">
              <div className="vertical">
                  <img className="image-top" src={manImage} alt=""/>
                  <div className="vertical-text">
                      Intern at mtutor
                  </div>
              </div>
              <div className="vertical">
                  <img className="image-top" src={manImage} alt=""/>
                  <div className="vertical-text">
                      AI Intern at Constalytics
                  </div>
              </div>
              <div className="vertical">
                  <img className="image-top" src={manImage} alt=""/>
                  <div className="vertical-text">
                      Data Scientist at Tidyquant
                  </div>
              </div>
              <div className="vertical">
                  <img className="image-top" src={manImage} alt=""/>
                  <div className="vertical-text">
                      Data Scientist at Appcode Technologies
                  </div>
              </div>
              <div className="vertical">
                  <img className="image-top" src={manImage} alt=""/>
                  <div className="vertical-text">
                      Software Engineer at Innefu Labs
                  </div>
              </div>
          </div>

      </section>
    </main>
  )
}

export default Home;