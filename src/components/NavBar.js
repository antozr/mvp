import React, { useEffect, useRef, useState } from 'react'
import { loadDataMapAdventure } from '../logic/_status-map.js'
import { Link, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { createPortal } from "react-dom"
import { motion } from "framer-motion";

import spotifyLogo from "../assets/img/svg/spotify.svg";


function NavBar() {

  const [showMusic, setShowMusic] = useState(false);
  const [changePage, setChangePage] = useState(false);


  /// function pour la modla de musique 

  function openModal(e) {
    let arrayLinkMusic = [
      "https://open.spotify.com/playlist/5bdQoZomjCWxHB5wbNYM4w?si=231b47b0866a461e",
      "https://open.spotify.com/playlist/1EWuk6pjCm1jmNku0iWVQr?si=0757ac238b01401f",
      "https://open.spotify.com/playlist/0j9M4eMvMgdXFpslIoaVRL?si=f8d101a558bb41fa",
    ]
    let randomNumber = Math.floor(Math.random() * (arrayLinkMusic.length - 0)) ;
    if(window.location.pathname  === "/"){
      window.open(arrayLinkMusic[randomNumber], "_blank")
    }else if(window.location.pathname  === "/japon"){
      window.open(arrayLinkMusic[1], "_blank")
    }else if(window.location.pathname === "/russie"){
      window.open(arrayLinkMusic[2], "_blank")
    }else{
      window.open(arrayLinkMusic[randomNumber], "_blank")
    }

    setShowMusic(false);
    //window.open("https://open.spotify.com/playlist/1EWuk6pjCm1jmNku0iWVQr?si=bc7332b5e51f4151","_blank");
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
    // e.target.preventDefault();

    let namePath = e.target.title;
    let blocChangePage = document.querySelector('.sect__changePage');
    blocChangePage.classList.remove("sect__changePage--closeNav")
    blocChangePage.classList.add('sect__changePage--closeNav');
    document.querySelector('.pageChangeSet').style.visibility = "hidden";
    setTimeout(() => {
      window.scrollTo(0, 0);

    }, 100);

    setTimeout(() => {
      //routChange(namePath);
      window.scrollTo(0, 0);
      document.querySelector('.pageChangeSet').style.visibility = "visible";
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
              <NavLink to="/" className={({ isActive, isPending }) => isPending ? "nav__a" : isActive ? "nav__a nav__a--active" : "nav__a"} title='/'  onClick={animateChangePage} > La découverte </NavLink>
              {/* <Link rel="stylesheet" to='#' className="nav__a" onClick={animateChangePage} title='/'> La découverte </Link> */}
            </li>
            <li className="nav__el">
              <NavLink to="/les-styles" className={({ isActive, isPending }) => isPending ? "nav__a" : isActive ? "nav__a " : "nav__a"} title='/les-styles' onClick={animateChangePage} > Les styles </NavLink>
              {/* <Link rel="stylesheet" href="#" className="nav__a" onClick={animateChangePage} title='#'> Les Styles </Link> */}
            </li>
            {/* <li className="nav__el" onClick={loadDataMapAdventure}> */}
            <li className="nav__el" >
              <NavLink to="/ton-aventure" className={({ isActive, isPending }) => isPending ? "nav__a" : isActive ? "nav__a nav__a--active" : "nav__a"} title='/ton-aventure'  onClick={animateChangePage} > Mon aventure  </NavLink>
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
        <button className="nav__btnMusic" onClick={openModal}>{window.innerWidth >= 900 ? "Ecoute de la musique" : ""}<span className="modal__linkLogo"></span> </button>
        <div className="nav__boxLogo">
          <p className="nav__logo">
            <b>Tattoo</b>&nbsp;<span className="sect__title--druzokh">Explore</span>
          </p>
        </div>
      </div>

      {/* {changePage &&createPortal(
        <>
        <motion.div
        initial={{x:'-100vw'}}
        animate={{x:'100vw'}}
        className="">
        
        </motion.div>
        </>
      )} */}

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