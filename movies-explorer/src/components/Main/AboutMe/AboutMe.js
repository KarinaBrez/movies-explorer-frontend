import React from 'react';

import './AboutMe.css';
import photo from '../../../images/karina.jpg';
import PortfolioTitle from "../../PortfolioTitle/PortfolioTitle";

function AboutMe() {

  return(
    <section className="about-me about-project" id="student">
      <PortfolioTitle title="Студент" />
      <div className="about-me__wrapper">
        <img src={photo} alt="фото" className="about-me__photo"/>
        <div className="about-me__bio-wrapper">
          <div className="about-me__bio-wrapper-info">
            <h3 className="about-me__name">Карина</h3>
            <h4 className="about-me__subtitle">
              Фронтенд-разработчик, 29 лет
            </h4>
            <p className="about-me__bio about-project__item-text">
             Родилась и живу в Москве. Работаю в развитие программы лояльности компании Столото. Решила учится на веб-разработика для собственного развития. </p>
          </div>
          <ul className="about-me__contacts">
            <li className="about-me__contacts-link">
              <a href="https://vk.com/karinka_knopka" className="about-me__contacts-link"
                 target="_blank" rel="noreferrer" >VK.com</a>
            </li>
            <li className="about-me__contacts-link">
              <a href="https://github.com/KarinaBrez" className="about-me__contacts-link"
                 target="_blank" rel="noreferrer" >GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;