import React from 'react';
import github from '../github.png';
import gmail from '../gmail.png';
import linkedin from '../linkedin.png';
import resume from '../Resume.pdf';

const contact = (props) => {
  return (
    <div className="App">
    <div  id = 'mainsquare'>
      <p className='contact'>
        <ul>
       <li> Phone : +91 8928264290   </li>
        <li>Email : anshika6304@gmail.com        </li>                
       <li> Place : Navi Mumbai, Maharashtra, India </li>
        <li>linkedin URL: https://www.linkedin.com/in/anshika-gupta-977102258/ </li>
        <li>Github: https://github.com/anshG6304 </li>
        </ul></p>
        <div >
            <a href="https://github.com/anshG6304" target="_blank">   <img id='logo' src={github} alt="github link" height='40px' /> </a>
            <a href="mailto: anshika6304@gmail.com" target="_blank">   <img id='logo' src={gmail} alt="gmail link" height='40px' /> </a>
            <a href="https://www.linkedin.com/in/anshika-gupta-977102258/" target="_blank">  <img id='logo' src={linkedin} alt="linkedin link" height='40px' /> <br /> </a>

            <a href={resume} download="resume-pdf" target="_blank" ><button>Download Resume</button> </a></div>
    </div></div>
  )
}

export default contact
