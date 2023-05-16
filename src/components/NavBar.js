import React, { useEffect, useRef, useState } from 'react'
import { loadDataMapAdventure } from '../logic/_status-map.js'
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { createPortal } from "react-dom"
import { motion } from "framer-motion";

import spotifyLogo from "../assets/img/svg/spotify.svg";


function NavBar() {

  const [showMusic, setShowMusic] = useState(false);

  /// function pour la modla de musique 

  function openModal(e) {
    setShowMusic(false);
    window.open("https://open.spotify.com/playlist/1EWuk6pjCm1jmNku0iWVQr?si=bc7332b5e51f4151","_blank");
  }
  function closeModal(e) {
    setShowMusic(false)
  }

  /// function animation changement page 
  const navigate = useNavigate();
  const routChange = (NamePath) => {
    let path = NamePath;
    navigate(path, { replace: true })
  }
  //
  function animateChangePage(e) {
    //this.target.preventDefault();

    let namePath = e.target.title;
    let blocChangePage = document.querySelector('.sect__changePage');
    blocChangePage.classList.add('sect__changePage--closeNav');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    setTimeout(() => {
      routChange(namePath);
      window.scrollTo(0, 0);
    }, 1100);
    blocChangePage.addEventListener('animationend', (e) => {
      e.target.classList.remove("sect__changePage--closeNav")
    });

  }


  let listLien = useRef(document.querySelector('.nav__list'))

  //let allBarre = useRef(document.querySelectorAll('.nav__btnBarre'));
  let btnBox = useRef(document.querySelector('.nav__btn'))
  function openNavMobile(e) {


    console.log(btnBox);
    listLien.current.classList.toggle('nav__list--close');
    // listLien.classList.toggle('nav__list--close');

    btnBox.current.childNodes.forEach((el) => {
      el.classList.toggle('nav__btnBarre--close');
    });

    btnBox.current.classList.toggle('nav__btn--close');


  }


  return (
    <>
      <div className="nav nav--mobile">
        <nav className="navBox  ">
          <ul className="nav__list " ref={listLien}>
            <li className="nav__el" >
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "nav__a" : isActive ? "nav__a nav__a--active" : "nav__a"} > La découverte </NavLink>
              {/* <Link rel="stylesheet" to='#' className="nav__a" onClick={animateChangePage} title='/'> La découverte </Link> */}
            </li>
            <li className="nav__el">
              <NavLink to="#" className={({ isActive, isPending }) => isPending ? "nav__a" : isActive ? "nav__a " : "nav__a"} > Les styles </NavLink>
              {/* <Link rel="stylesheet" href="#" className="nav__a" onClick={animateChangePage} title='#'> Les Styles </Link> */}
            </li>
            <li className="nav__el" onClick={loadDataMapAdventure}>
              <NavLink to="/ton-aventure" className={({ isActive, isPending }) => isPending ? "nav__a" : isActive ? "nav__a nav__a--active" : "nav__a"} > Mon aventure  </NavLink>
              {/* <Link rel="stylesheet" to="#" className="nav__a" onClick={animateChangePage} title='/ton-aventure'> Mon aventure </Link> */}
            </li>
          </ul>

          

          <button className="nav__btn " onClick={openNavMobile} ref={btnBox}>
            <span className="nav__btnBarre ">
            </span>
            <span className="nav__btnBarre ">
            </span>
            <span className="nav__btnBarre ">
            </span>
          </button>
        </nav>
        <button className="nav__btnMusic" onClick={openModal}>Ecoute de la musique<span className="modal__linkLogo"></span> </button>
        <div className="nav__boxLogo">
          <p className="nav__logo">
            TattooExplore
          </p>
        </div>
      </div>

      {showMusic && createPortal(
        <>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: "3vh" }}
            exit={{ opacity: 0, y: 0 }}
            className="nav__modalMusic " onClick={closeModal}>
            <button className="imgOpenBig__btn imgOpenBig__btn--music  modal__cancelBtn" onClick={closeModal}><span className="imgOpenBig__barre"></span><span className="imgOpenBig__barre"></span></button>
            <h2 className="sect__title modal__title">
              Agrémente ton expérience en musique
            </h2>
            <div className="modal__spotify">
              <a href="https://open.spotify.com/playlist/1EWuk6pjCm1jmNku0iWVQr?si=bc7332b5e51f4151" className="sect__txt modal__link">Découvre la playlist <span className="modal__linkLogo"></span></a>
            </div>
          </motion.div>
        </>,
        document.body

      )}

    </>
  )
}

export default NavBar