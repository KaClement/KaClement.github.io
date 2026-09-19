import React from 'react';
import './header.css'
import cv from './../../assets/cv.pdf';
import resume_1 from './../../assets/file-regular.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faGlobe } from '@fortawesome/free-solid-svg-icons'; // Resume icon
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // LinkedIn and GitHub icons
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header>
    
      <div class="banner">
        <div class="navbar">
            <ul>
            <li><a href="#myinfo">{t('header.about')}</a></li>
              <li><a href="#about">{t('header.experience')}</a></li>
              <li><a href="#portfolio">{t('header.projects')}</a></li>
              <li className="lang-toggle-li">
                <button onClick={toggleLanguage} className="lang-toggle-btn">
                  <FontAwesomeIcon icon={faGlobe} /> {language === 'en' ? 'FR' : 'EN'}
                </button>
              </li>
            </ul>
        </div>
       
        <div class="content">
          <h1>Clément Kacel</h1>
          <h3>{t('header.title')}</h3>
          <div>
              <a class="login-btn" href={cv} target="_blank" rel="noopener noreferrer">
                  <span class="cover"></span>
                 
                  <FontAwesomeIcon icon={faFileAlt} className="icon" /> 
                  <span className="resume-text">{t('header.resume')}</span> 
                </a>

              <a class="login-btn" href="https://linkedin.com/in/clementka" target="_blank" rel="noopener noreferrer">
                  <span class="cover"></span>
                  <FontAwesomeIcon icon={faLinkedin} className="icon" /> 
                  <span className="resume-text">LinkedIn</span> 

                  </a>

                <a class="login-btn" href="https://github.com/KaClement" target="_blank" rel="noopener noreferrer">
                  <span class="cover"></span>
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                  <span className="resume-text">GitHub</span> 

                  </a>

          </div>
      </div>


      </div>
    </header>
  )
}

export default Header