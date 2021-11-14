import React from 'react';
import './Promo.css';

function Promo() {
  return(
    <div className="promo">
      <h1 className="promo__title">Учебный проект студента факультета 
      Веб-разработки.
      </h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <div className="promo__image"></div>
      <button className="promo__button">Узнать больше</button>
    </div>
  );
}

export default Promo;