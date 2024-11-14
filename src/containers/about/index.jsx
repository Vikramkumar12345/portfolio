import React from 'react'
import {BsInfoCircleFill} from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContant';
import {Animate} from "react-simple-animate";
import './styles.scss';
import { DiDatabase, DiNodejsSmall, DiReact } from 'react-icons/di';
import { FaServer } from 'react-icons/fa';

const personalDetails = [
  {
    label: "Name",
    value: "Vikram Kumar",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label:"Email",
    value:"vsah58800@gmail.com",
  },
  {
    label:"Contact No.",
    value:"+91 9508419894",
  },
];

const jobSummary = ' I am a passionate MERN stack developer currently pursuing my Bachelors in Computer Science. Skilled in creating responsive web applications with MongoDB, Express, React, and Node.js, I am always excited to explore new technologies and improve my coding abilities. I aim to build user-friendly, efficient solutions and make an impact through my projects and professional work. '

const About = () => {
  return (
   <section id='about' className='about'>
    <PageHeaderContent 
    headerText = 'About me' 
    icon={<BsInfoCircleFill size={40}/>} />

  <div className='about__content'>
    <div className='about__content__personalWrapper'>
    <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform : 'translateX(-900px)',
      }}

      end={{
        transform: "translatex(0px)",
      }}
      >

    <h3>MERN Stack Developer </h3>
     <p>{jobSummary}</p>
     </Animate>

     <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform : 'translateX(500px)',
      }}

      end={{
        transform: "translatex(0px)",
      }}
      >

     <h3 className='personalInformationText'>Personal Information</h3>
     <ul>
      {
        personalDetails.map((item,i)=>(
                  <li key ={i}>
            <span className='title'>{item.label}</span>
            <span className='value'>{item.value}</span>
          </li>
        ))
        }
      
     </ul>
     </Animate>
    </div>
    <div className='about__content__servicesWrapper'>
    <Animate
      play
      duration={1.5}
      delay={1}
      start={{
        transform : 'translateX(600px)',
      }}

      end={{
        transform: "translatex(0px)",
      }}
      >
      <div className='about__content__servicesWrapper__innerContent'>
      <div>
      <DiDatabase size={60} color='var(--yellow-theme-main-color)'/>
    </div>
    <div>
    <FaServer size={60} color='var(--yellow-theme-main-color)'/>
    </div>
    <div>
    <DiReact size={60} color='var(--yellow-theme-main-color)'/>
    </div>
    <div>
    <DiNodejsSmall size={60} color='var(--yellow-theme-main-color)'/>
    </div>
      </div>
      </Animate>
    
    </div>
 
  </div>
   </section>
  );
};

export default About;
