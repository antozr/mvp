import React, { useEffect, useRef } from 'react'
import { loadDataMapAdventure } from '../logic/_status-map.js'
import { Link, useNavigate } from 'react-router-dom'


function NavBar() {


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
              <Link rel="stylesheet" to='#' className="nav__a" onClick={animateChangePage} title='/'> La découverte </Link>
            </li>
            <li className="nav__el">
              <Link rel="stylesheet" href="#" className="nav__a" onClick={animateChangePage} title='#'> Les Styles </Link>
            </li>
            <li className="nav__el" onClick={loadDataMapAdventure}>
              <Link rel="stylesheet" to="#" className="nav__a" onClick={animateChangePage} title='/ton-aventure'> Mon aventure </Link>
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
        <div className="nav__boxLogo">
          <p className="nav__logo">
            TattooExplore
          </p>
        </div>
      </div>

    </>
  )
}

export default NavBar