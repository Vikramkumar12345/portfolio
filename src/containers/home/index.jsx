import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

import './styles.scss';

import profileImage from '../../images/vikram.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <img src={profileImage} alt="Vikram" className="home__profile-image" />
        <h1>
          Hello, I'm Vikram
          <br />
          I'm a MERN Stack Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px)',
        }}
        end={{
          transform: 'translateX(0px)',
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate>
      
      {/* Social Media Links */}
      <div className="home__social-media">
        <a href="https://www.linkedin.com/in/vikram-kumar-97094a27b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/Vikramkumar12345" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.instagram.com/vsahmsd07/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      
      </div>
    </section>
  );
};

export default Home;
