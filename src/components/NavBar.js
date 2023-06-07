import React, { useEffect, useRef, useState } from "react";
import { loadDataMapAdventure } from "../logic/_status-map.js";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import spotifyLogo from "../assets/img/svg/spotify.svg";

function NavBar() {
  const [changePage, setChangePage] = useState(false);

  /// function pour la modla de musique

  /// function animation changement page
  const navigate = useNavigate();
  const routChange = (NamePath) => {
    let path = NamePath;
    navigate(path, { replace: true });
  };
  //
  function animateChangePage(e) {
    // e.target.preventDefault();

    let namePath = e.target.title;
    let blocChangePage = document.querySelector(".sect__changePage");
    blocChangePage.classList.remove("sect__changePage--closeNav");
    blocChangePage.classList.add("sect__changePage--closeNav");
    document.querySelector(".pageChangeSet").style.visibility = "hidden";
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    setTimeout(() => {
      //routChange(namePath);
      window.scrollTo(0, 0);
      document.querySelector(".pageChangeSet").style.visibility = "visible";
    }, 1100);
    blocChangePage.addEventListener("animationend", (e) => {
      e.target.classList.remove("sect__changePage--closeNav");
    });
  }

  let listLien = useRef(document.querySelector(".nav__list"));

  //let allBarre = useRef(document.querySelectorAll('.nav__btnBarre'));
  let btnBox = useRef(document.querySelector(".nav__btn"));

  function openNavMobile(e) {
    let allLinkBtn = document.querySelectorAll(".nav__el");
    if(!listLien.current.classList.contains("nav__list--close")){
      listLien.current.classList.add("nav__list--close");
    }
    console.log(btnBox);
   
    // listLien.classList.toggle('nav__list--close');

    btnBox.current.childNodes.forEach((el) => {
      el.classList.toggle("nav__btnBarre--close");
    });

    btnBox.current.addEventListener('click',()=>{
      if(listLien.current.classList.contains("nav__list--close")){
        btnBox.current.classList.add("nav__btn--close");
        listLien.current.classList.add("nav__list--animClose");
        setTimeout(()=>{
          btnBox.current.classList.remove("nav__btn--close");
          listLien.current.classList.remove("nav__list--animClose");
          listLien.current.classList.remove("nav__list--close");
        },280)
        
      }else{
        btnBox.current.classList.add("nav__btn--close");
        
      }
    })
    
   

    allLinkBtn.forEach((el) => {
      el.addEventListener("click", () => {
        listLien.current.classList.add("nav__list--animClose");
        setTimeout(() => {
          listLien.current.classList.remove("nav__list--close");
          btnBox.current.classList.remove("nav__btn--close");
          btnBox.current.childNodes.forEach((el) => {
            el.classList.remove("nav__btnBarre--close");
          });
          listLien.current.classList.remove("nav__list--animClose");
        }, 300);
      });
    });
  }

  return (
    <>
      <div className="nav nav--mobile">
        <nav className="navBox  ">
          <ul className="nav__list " ref={listLien}>
            <li className="nav__el">
              <NavLink
                to="/"
                aria-label="Home page"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav__a"
                    : isActive
                    ? "nav__a nav__a--active"
                    : "nav__a"
                }
                title="/"
                onClick={animateChangePage}
              >
                {" "}
                La découverte{" "}
              </NavLink>
              {/* <Link rel="stylesheet" to='#' className="nav__a" onClick={animateChangePage} title='/'> La découverte </Link> */}
            </li>
            <li className="nav__el">
              <NavLink
                to="/plus-dinfos"
                aria-label="Plus d'info  page"
                className={({ isActive, isPending }) =>
                  isPending ? "nav__a" : isActive ? "nav__a " : "nav__a"
                }
                title="plus-dinfos"
                onClick={animateChangePage}
              >
                {" "}
                Plus d'infos{" "}
              </NavLink>
              {/* <Link rel="stylesheet" href="#" className="nav__a" onClick={animateChangePage} title='#'> Les Styles </Link> */}
            </li>
            {/* <li className="nav__el" onClick={loadDataMapAdventure}> */}
            <li className="nav__el">
              <NavLink
                to="/ton-aventure"
                aria-label="Ton aventure  page"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav__a"
                    : isActive
                    ? "nav__a nav__a--active"
                    : "nav__a"
                }
                title="/ton-aventure"
                onClick={animateChangePage}
              >
                {" "}
                Mon aventure{" "}
              </NavLink>
              {/* <Link rel="stylesheet" to="#" className="nav__a" onClick={animateChangePage} title='/ton-aventure'> Mon aventure </Link> */}
            </li>
          </ul>

          <button className="nav__btn " onClick={openNavMobile} ref={btnBox}>
            <span className="nav__btnBarre "></span>
            <span className="nav__btnBarre "></span>
            <span className="nav__btnBarre "></span>
          </button>
        </nav>
        <div className="nav__boxLogo">
          <p className="nav__logo">
            <b>Tattoo</b>&nbsp;
            <span className="sect__title--druzokh">Explore</span>
          </p>
        </div>
      </div>

      {/* {changePage &&createPortal(
        <>
        <motion.div
        initial={{x:'-100vw'}}
        animate={{x:'100vw'}}
        >
        <>Je suis nav</> 
        </motion.div>
        </>
      )
      } */}
    </>
  );
}

export default NavBar;
