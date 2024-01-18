import React,{useState} from 'react'
import profile from '../assets/round pro pic.png'
import linkedin from '../assets/linkedin.png' 
import about from '../assets/vector.png'
import experience from '../assets/experience.png'
import education from '../assets/education.png'
import github from '../assets/github.png' 
import checkmark from '../assets/checkmark.png' 
import projectOne from '../assets/t-rex.png' 
import projectTwo from '../assets/project-2.png' 
import projectThree from '../assets/project-3.png' 
import projectFour from '../assets/quiz mania.png'
import projectFive from '../assets/project-5.png'
import projectSix from '../assets/milma.png'
import email from '../assets/email.png'
import cv from '../assets/midhun cv 24-jan.pdf'
import whatsap from '../assets/pngwing.com.png'
import signature from '../assets/signature.png'

import './MainPage.css';


function MainPage() {
  const [isDarkMode, setDarkMode] = useState(false);
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  
  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <nav id="desktop-nav">
      <div class="logo"><img src={signature} alt="" /></div>
      <div>
        <ul className={isDarkMode ? 'darklink' : 'nav-links'}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* <li><button className="btn btn-color-1" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button></li> */}
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div class="logo"><img src={signature} alt="" /></div>
      {/* <button className="btn btn-color-1" onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button> */}
      <div class="hamburger-menu">
      
        <div class="hamburger-icon" onClick={toggleMenu}>
       
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </div>
      </div>
    </nav>
    <section id="profile">
      <div class="section__pic-container">
        <img src={profile} alt="Profile picture" />
      </div>
      <div class="section__text">
        <p className={isDarkMode ? 'darkP' : 'section__text__p1'}>Hello, <a style={{color:'navy'}}>I'm</a></p>
        <h1 class="title">MIDHUN KM</h1>
        <p className={isDarkMode ? 'darkP' : 'section__text__p2'}>ME<a style={{color:'red'}}>A</a>RN Stack Developer</p>
        <div class="btn-container">

          <a href={cv} target='_blank'>
            <button class="btn btn-color-2">
              Download CV
            </button>
          </a>

          <a href='#contact'>
            <button class="btn btn-color-1">
              Contact Info
            </button>
          </a>
          
        </div>
        <div id="socials-container">
          <a href='https://www.linkedin.com/in/mi-dh-un/' target='_blank'>
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              class="icon"
            />
          </a>
          <a href='https://github.com/skrilloscr' target='_blank'>
            <img
              src={github}
              alt="My Github profile"
              class="icon"
              
            />
          </a>
        </div>
      </div>
    </section>
    <section id="about">
      <p className='section__text__p1' style={{color:'black'}}>Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src={about}
            alt="Profile picture"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={experience}
                alt="Experience icon"
                class="icon"
              />
              <h3 style={{color:'black'}}>Experience</h3>
              <p>6+ Months <br /></p>
            </div>
            <div class="details-container">
              <img
                src={education}
                alt="Education icon"
                class="icon"
              />
              <h3 style={{color:'black'}}>Education</h3>
              <p>B.Sc. Electronics</p>
              <p>MEARN Stack</p>
            </div>
          </div>
          <div class="text-container">
            <p style={{color:'black'}}>
            I Am A Highly Motivated <a href='https://www.geeksforgeeks.org/mern-stack/' target='_blank' style={{color:'red'}}>MEARN</a> Stack Developer With Over Six Months Of Experience. I Have Strong Creative And Comprehensive Coding Skills. Really Good At Communication And Project Management Skills. 
            </p>
          </div>
        </div>
      </div>
      {/* <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#experience'"
      /> */}
    </section>
    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 >HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3 >CSS</h3>
                  <p >Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Angular.Js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>React.Js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Bootstrap</h3>
                  <p>Intermediate</p>
                </div>
              </article>


              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Backend Development & Database</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>MongoDb</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Vercel</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Firebase</h3>
                  <p>Intermediate</p>
                </div>
              </article>


              

            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#projects'"
      /> */}
    </section>
    <section id="projects">
      <p style={{color:'navy'}} class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div  class="experience-details-container">
        <div  class="about-containers">
          <div  class="details-container color-container">
            <div  class="article-container">
              <img
                src={projectOne}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">T-REX Online Store</h2>
            <div class="btn-container">
              
              <a href='https://github.com/skrilloscr/Tee-Rex-onlineStore' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Github
                </button>
              </a>

              <a href='https://tee-rex-online-store-mi-dhu-n.netlify.app/' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Live Demo
                </button>
              </a>

            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectTwo}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Dino Game</h2>
            <div class="btn-container">

              <a href='https://github.com/skrilloscr/Dino-game-react-app' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Github
                </button>
              </a>

              <a href='https://dino-run-react-app.netlify.app/' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Live Demo
                </button>
              </a>

            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectThree}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Media Player</h2>
            <div class="btn-container">

              <a href='https://github.com/skrilloscr/Video-Player-React-App' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Github
                </button>
              </a>

              <a href='https://videoappuploder-prithwi.netlify.app/' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Live Demo
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectFour}
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title"> Space Quiz Mania</h2>
            <div class="btn-container">

              <a href='https://github.com/skrilloscr/quiz-react-app' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Github
                </button>
              </a>

              <a href='https://space-quiz-react-app-mi-dhu.netlify.app/' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Live Demo
                </button>
              </a>

            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectFive}
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Netflix Clone</h2>
            <div class="btn-container">

              <a href='https://github.com/skrilloscr/netflix-clone-react-app' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Github
                </button>
              </a>

              <a href='https://netflix-clone-react-app-m-idh-u.netlify.app/' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Live Demo
                </button>
              </a>

            </div>
          </div>

          <div class="details-container color-container">
            <div class="article-container">
              <img
                src={projectSix}
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">Milma Shoppe Delivery App</h2>
            <p style={{color:'red'}}>On Progress.....</p>
            <br />
            <div class="btn-container">

              <a href='https://github.com/skrilloscr/Milma-Shoppee-React-App' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Github
                </button>
              </a>

              <a href='https://milma-shoppee-react-app.vercel.app/' target='_blank' rel="noreferrer">
                <button
                  class="btn btn-color-dark project-btn">
                  Live Demo
                </button>
              </a>

            </div>
          </div>

        </div>
      </div>
      {/* <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#contact'"
      /> */}
    </section>
    <section id="contact" style={{paddingTop:'300px'}}>
      <p class="section__text__p1" style={{color:'navy'}}>Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:midhunkmanoj99@gmail.com" target='_blank' style={{color:'gray',textDecoration:'none'}}>midhunkmanoj99@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/mi-dh-un/" target='_blank' style={{color:'gray',textDecoration:'none'}}>LinkedIn</a></p>
        </div>

        <div class="contact-info-container">
          <img
            src={whatsap}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://api.whatsapp.com/send/?phone=%2B919539488577&text&type=phone_number&app_absent=0" target='_blank' style={{color:'gray',textDecoration:'none'}}>WhatsApp</a></p>
        </div>


      </div>
    </section>
    <footer>
      <nav>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li ><a style={{color:'blue'}} href="#about">About</a></li>
            <li><a style={{color:'blue'}} href="#experience">Experience</a></li>
            <li><a style={{color:'blue'}} href="#projects">Projects</a></li>
            <li><a style={{color:'blue'}} href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p style={{color:'navy'}}>Copyright &#169; 2023 Midhun Km. All Rights Reserved.</p>
      
    </footer>
    </div>
  )
}

export default MainPage