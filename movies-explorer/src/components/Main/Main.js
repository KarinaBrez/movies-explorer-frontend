import React from 'react';

import './Main.css';

import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main({ menuIsOpened, openMenu, closeMenu, loggedIn }) {

  return(
    <main className="content">
      <Header
        loggedIn={loggedIn}
        menuIsOpened={menuIsOpened}
        openMenu={openMenu}
        closeMenu={closeMenu}
      />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Main;