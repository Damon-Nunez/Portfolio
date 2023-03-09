import Navbar from "./components/Navbar";
import './App.css'
import { Fade } from "react-reveal";
import {Row,Col,Container} from 'react-bootstrap'
import React from "react";
import { Card } from "react-bootstrap";
import HTML from './images/HTML.png'
import CSS from './images/CSS.png'
import JS from './images/JS.png'
import RCT from './images/RCT.png'
import BS from './images/BS.png'
import GitHub from './images/GitHub.png'
import Node from './images/Node.png'
import TS from './images/TS.jpg'
import logo from './images/logo.png'
import StarBucks from './images/Bucks.png'
import Karuna from './images/Karuna.png'
import LN from './images/LinkedIn.png'
function App() {
  

  return (
       <div className="background">
      <section className="wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    <Container>
          <Fade top distance='20%' duration = {1500} >
      <Navbar/> 
    <h1 className="header"> Front End Developer!!💻</h1>
    <h1 className="sectionName" id="aboutMe"> About Me!!</h1>
         <Row>
          <Col sm={12} md={12} lg={12}>
            <p className="aboutMe">As a front-end developer, I have a passion for coding and a keen eye for design. I possess a strong command of HTML, CSS, JavaScript, and React, and am able to leverage these technologies to create visually stunning and highly functional websites. With my expertise in front-end development, I am able to take designs and turn them into functional, responsive, and dynamic web experiences that engage users and meet their needs. My attention to detail, problem-solving skills, and dedication to staying up-to-date with the latest technologies in the industry enable me to create seamless and intuitive user experiences that delight users and drive business success.In addition to my technical proficiency, I bring a strong creative flair to my work as a front-end developer. I enjoy exploring new design ideas and pushing boundaries to create unique and innovative web experiences.</p>
          </Col>
         </Row>
         <h1 className="sectionName" id="skills"> Skills</h1>
         <Row>
             <div className="cardContainer">
              <Card className="cardDesign">
                <Card.Img className="cardImage" src={HTML}/>
              </Card>
             </div>
             <div>
              <Card className="cardDesign">
                <Card.Img className='cardImage' src={CSS}/>
              </Card>
             </div>
             <div>
              <Card className="cardDesign">
                <Card.Img className='cardImage' src={JS}/>
              </Card>
             </div>
             <div>
              <Card className="cardDesign">
                <Card.Img className='cardImage' src={RCT}/>
              </Card>
             </div>
             <div>
              <Card className="cardDesign">
                <Card.Img className='cardImage' src={BS}/>
              </Card>
             </div>
             <div>
              <Card className="cardDesign">
                <Card.Img className='cardImage' src={GitHub}/>
              </Card>
              <h1 className="cardCaption"> GitHub</h1>
             </div>
             <div>
              <Card className="cardDesign">
                <Card.Img className='cardImage' src={Node}/>
              </Card>
              <h1 className="cardCaption"> Node JS </h1>
             </div>
            <div>
              <Card className="cardDesign">
                <Card.Img className="cardImage" src={TS}/>
              </Card>
              <h1 className="cardCaption"> TypeScript</h1>
            </div>
         </Row>
         <h1 className="sectionName" id="projects"> Projects!!!</h1>
         <Row>
          <Col sm={12} md={4} lg={4}>
          <div className="projects">
           <Card className="projectCard">
            <Card.Img className='projectCardImage'src={logo} />
            <Card.Body>
              <Card.Title className="projectCardTitle">🍪Dreamy Cafe!🌌</Card.Title>
                <Card.Text className='projectCardCaption'>
                  Dreamy Cafe is a project where I explored my own creativity
                  creating a 'cafe-website' of my own theme and flexing front-end skills.
                </Card.Text>
                <Card.Text className="projectCardCaption">
                  Languages Used:
                </Card.Text>
                <div className="buttonZone">
                <button className="HTMLButton"> HTML5 </button>
                <button className="CSSButton"> CSS3 </button> 
                 </div>
                 <div className="buttonZone">
                <button className="JSButton"> JS </button>
                <button className="ReactButton"> React</button>
                 </div>
                 <h1 className="projectCardCaption"> Where to find:</h1>
                 <div className="buttonZone">
                 <button className="codeButton"> <a href="https://github.com/Damon-Nunez/DreamyCafe" className="links">GitHub</a></button>
                  <button className="liveButton"> Live! </button>
                 </div>
              </Card.Body>
           </Card>
          </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
          <div className="projects">
           <Card className="projectCard">
            <Card.Img className='projectCardImage'src={StarBucks} />
            <Card.Body>
              <Card.Title className="projectCardTitle">🍵StarBucks Clone!☕</Card.Title>
                <Card.Text className='projectCardCaption'>
                  I decided to create a starbucks clone attempting to replicate a professional 
                  front end site. Instead of doing just the landing page like some prefer to do
                  I decided to do all of it.
                </Card.Text>
                <Card.Text className="projectCardCaption">
                  Languages Used:
                </Card.Text>

                <div className="buttonZone">
                <button className="HTMLButton"> HTML5 </button>
                <button className="CSSButton"> CSS3 </button> 
                 </div>
                 <div className="buttonZone">
                <button className="JSButton"> JS </button>
                <button className="ReactButton"> React</button>
                 </div>
                 <div className="buttonZone">
                  <button className="typeScriptButton">TypeScript</button>
                 </div>
                 <h1 className="projectCardCaption"> Where to find:</h1>
                 <div className="buttonZone">
                  <button className="codeButton"> <a href="https://github.com/Damon-Nunez/starbucksthedamonway" className="links">GitHub</a> </button> 
                  <button className="liveButton"> Live! </button>
                 </div>
              </Card.Body>
           </Card>
          </div>
          </Col>
          <Col sm={12} md={12} lg={4}>
          <div className="projects">
           <Card className="projectCard">
            <Card.Img className='projectCardImage'src={Karuna} />
            <Card.Body>
              <Card.Title className="projectCardTitle">Karuna!</Card.Title>
                <Card.Text className='projectCardCaption'>
                  I made Karuna earlier on using BootStrap with a group. It was one of
                  my first projects. It explored the topic of domestic violence! Mainly it's here to show some growth since that time.
                </Card.Text>
                <Card.Text className="projectCardCaption">
                  Languages Used:
                </Card.Text>
                <div className="buttonZone">
                <button className="HTMLButton"> HTML5 </button>
                <button className="CSSButton"> CSS3 </button> 
                 </div>
                 <div className="buttonZone">
                <button className="JSButton"> JS </button>
                <button className="bootStrapButton"> BootStrap!</button>
                </div>
                <h1 className="projectCardCaption"> Where to find:</h1>
                 <div className="buttonZone">
                 <button className="codeButton"> <a href="https://github.com/yasirah-tech/Karuna" className="links">GitHub</a></button>
                  <button className="liveButton"> Live! </button>
                 </div>
                
              </Card.Body>
           </Card>
          </div>
          </Col>
           </Row>
           <h1 className="contactHeader">Contact Me!</h1>
       <Row id='contact'>
        <Col sm={12} md={12} lg={12}>
       <div className="socials">
              <Card className="cardDesign">
                <a href="https://www.linkedin.com/in/damon-nunez-036497238/"><Card.Img className="cardImageTwo" src={LN}/></a>
              </Card>
            </div>
             </Col>
       </Row>
      <Row>
       <h1 className="sectionNameFinal"> Or email me at damon.j.nunez@gmail.com</h1>
       </Row>
     </Fade> 
     
      </Container>
      </section>   
      </div>
  );
}

export default App;
