import React, { useState } from "react";
import "./Credit.scss";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import InterSectionBox from "../components/InterSectionBox";

import backImg from "../assets/img/oldSchool/fondPeauNoir.webp";
import Footer from "../components/Footer";

function UikitPage() {
  if (window.location.pathname !== '/uikit') {
    document.querySelector('body').classList.add('App--hidden')
} else {
    document.querySelector('body').classList.remove('App--hidden')
}
  const [copyColor, setCopyColor] = useState(false);
  const [nameColor, setNameColor] = useState("");

  const elTxt = (nameEl, classTxt, descriptionEL) => {
    return (
      <li className="uikit__el">
        <p className={classTxt}>{nameEl}</p>
        <p className="sect__txt">{descriptionEL}</p>
      </li>
    );
  };

  function copyColorFx(e) {

    setNameColor(e.target.title);
    navigator.clipboard.writeText(e.target.title)
    setTimeout(()=>{
      setCopyColor(true);
    }, 200)

    setTimeout(() => {
      setCopyColor(false);
    }, 2000);
   
  }

  const elColor = (nameEL, colorEl) => {
    return (
      <li className="credit__boxColor" onClick={copyColorFx} title={nameEL}>
        <div
          className="credit__colorSquare"
          style={{ backgroundColor: `${colorEl}` }}
          title={nameEL}
        ></div>
        <p className="sect__txt" title={nameEL}>{nameEL}</p>
      </li>
    );
  };

  return (
    <>
      <section className="sect sect__attente credit__home  pageChangeSet">
        <h1 className="sect__title sect__title--druzokh">Un ui-kit </h1>

        <p className="sect__txt ">
          Vous trouverez ici toutes les informations concernants l'utilisations des
          fonts, couleurs, ...
        </p>
      </section>
      {/*  */}
      <section className="sect__creditBox">
        <h2 className="sect__title sect__title--2">Les fonts :</h2>
        <ul className="credit__ul credit__ul--uikit">
          {elTxt(
            "Les titres utilise la fonts : Josefin sans en 600 avec une line-height de 110% "
          )}
          {elTxt(
            "- Titre / H1 ",
            "sect__title",
            "En mobile : 8dvw & au dessus de 600px : 3dvw"
          )}
          {elTxt(
            "- Sous-titre / H2",
            " sect__title sect__title--2",
            "En mobile : 28px & au dessus de 600px 51px "
          )}
          {elTxt(
            "- Sous-titre / H3",
            " sect__title sect__title--3",
            "En mobile : 18px & au dessus de 600px 18px + 700 font-weight "
          )}
          {elTxt(
            "- Variation",
            " sect__title sect__title--2 sect__title--fontDruzokh",
            "Changement de font pour la Druzhok, seulement pour les titres impossant. +600px : font-size:10dvw, text-align: center , opacity: 0.9 "
          )}
          {elTxt(
            "Les textes utilisent la fonts : Josefin sans & Josefin sans italic, en fonction des variations à apporter dans la hiérarchie avec un font-weight: 400, line-height: 160%"
          )}
          {elTxt(
            "- Texte / p",
            "sect__txt",
            "En mobile : 16px,  & au dessus de 600px : 18px"
          )}
          {elTxt(
            "- Texte Variation / p",
            "sect__txt sect__txt--thin sect__txt--italic",
            "Changement de la font-weight en 300 et changement de font pour l'italic."
          )}
          {elTxt()}
        </ul>
      </section>
      <section className="sect__creditBox sect__creditBox--black">
        <h2 className="sect__title sect__title--2" >Les couleurs :</h2>
        <ul className="credit__ul credit__ul--uikit credit__ul--row">
          {elColor("#f9b949", "#f9b949")}
          {elColor("#000000", "#000000")}
          {elColor("#FFF5E2", "#FFF5E2")}
        </ul>
      </section>

<Footer />

      {copyColor &&
        createPortal(
          <>
            <motion.div
              className="credit__modal"
              initial={{ y: "30px" }}
              animate={{ y: "0" }}
              exit={{ y: "30px" }}
            >
              <p className="sect__txt">
                Vous avez copier la couleur : <b>{nameColor}</b> !
              </p>
            </motion.div>
          </>,
          document.body
        )}
    </>
  );
}

export default UikitPage;
