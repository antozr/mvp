import React from "react";
import BoutonNormal from "../components/BoutonComp";
import InterSectionBox from "../components/InterSectionBox";
import backInterOld from "../assets/img/svg/oldSchool/paternOldSchool.svg";
import Footer from "../components/Footer";
import "./Credit.scss"

function CrediPage() {
  const elFont = (link01, nameLink, ariaTxt) => {
    return (
      <li className="credit__el">
        <a
          href={link01}
          className="credit__link sect__txt"
          target="_blank"
          aria-label={ariaTxt} rel="noreferrer"
        >
          {nameLink}
        </a>
      </li>
    );
  };
  return (
    <>
      <section className="sect sect__attente credit__home  pageChangeSet">
        <h1 className="sect__title">Les sources utilisé </h1>

        <p className="sect__txt ">
          Vous trouverez ici tous les liens vers les différents libraires,
          fonts, et annexes utilisées dans ce projet.{" "}
        </p>
      </section>

      <section className="sect__creditBox">
        <h2 className="sect__title sect__title--2">Les fonts :</h2>
        <ul className="credit__ul">
          {elFont("https://befonts.com/druzhok-font.html", "Druzhok display font", "Redirection vers befont, druzhok")}
          {elFont("https://fonts.google.com/specimen/Josefin+Sans?query=jose", "Josefin Sans", "Redirection vers google-font, Josefin Sans")}
        </ul>
      </section>
      <section className="sect__creditBox">
        <h2 className="sect__title sect__title--2">Les libraires :</h2>
        <ul className="credit__ul">
          {elFont("https://react.dev/", "React.js ( pour le corps )", "Redirection vers react.dev")}
          {elFont("https://www.framer.com/motion/", "Framer motion (pour des animations)", "Redirection vers Framer.com/ motion")}
          {elFont("https://greensock.com/", "GSAP (pour des animations au scroll)", "Redirection vers GSAP")}
          {elFont("https://reactrouter.com/en/main", "React-router-dom V6 (pour le root)", "Redirection vers React-router-dom")}
          {elFont("https://use-gesture.netlify.app/", "Use-gesture (pour la page 'Ton aventure')", "Redirection vers use-gesture")}
          {elFont("https://www.react-spring.dev/", "React-spring (pour la page 'Ton aventure')", "Redirection vers React-spring")}
        </ul>
      </section>
      <section className="sect__creditBox">
        <h2 className="sect__title sect__title--2">Les images :</h2>
        <ul className="credit__ul">
          {elFont("https://texturelabs.org/?ct=30&st=124", "Texture labs ( pour les effets pour ps )", "Redirection vers Texture labs")}
          {elFont("https://docs.google.com/document/d/1UTvBmzAgXkQRQRvajzJ4udDSu18mMVC5n8sqZfpJ0VU/edit?usp=sharing", "Les liens des images ", "Redirection vers un docs comprennant des liens")}
          

        </ul>
      </section>
      <InterSectionBox
        backImg={{ backgroundImage: `url(${backInterOld})`, height: "20vh" }}
      />
      <Footer />
    </>
  );
}

export default CrediPage;
