import React from 'react';
import anshika from '../anshika.jpg';
import github from '../github.png';
import gmail from '../gmail.png';
import linkedin from '../linkedin.png';
import resume from '../Resume.pdf';

const home = () => {
  return (
    <div className="App">
      <div id='mainsquare'>
        {/* <Header/> */}
        <div id='main'>
          <br />
          Hello, it's Me, <br />
          <b >ANSHIKA GUPTA</b>
          <div id='myimage'>
            <img src={anshika} alt="anshika jpg" height='300px' />
          </div>

          <p>And I'm a <strong>Frontend Developer</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

          <div >
            <a href="https://github.com/anshG6304" target="_blank">   <img id='logo' src={github} alt="github link" height='40px' /> </a>
            <a href="mailto: anshika6304@gmail.com" target="_blank">   <img id='logo' src={gmail} alt="gmail link" height='40px' /> </a>
            <a href="https://www.linkedin.com/in/anshika-gupta-977102258/" target="_blank">  <img id='logo' src={linkedin} alt="linkedin link" height='40px' /> <br /> </a>

            <a href={resume} download="resume-pdf" target="_blank" ><button>Download Resume</button> </a></div>
        </div>

      </div>
      {/* <Footer/> */}

    </div >
  )
}

export default home;
