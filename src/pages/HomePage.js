import React, { useState } from "react";
import "./HomePage.scss";
import { motion } from "framer-motion";
/// les images
import ImageHome from "../assets/img/homeImg3.jpg";
import ImageHome2 from "../assets/img/homeImg.jpg";
import BoutonNormal from "../components/BoutonComp";
import MapBox from "../components/MapBox";
import { initStatDataView } from "../logic/_status-map.js";
import ListMapMobile from "../components/ListMapMobile";
import InterSectionBox from "../components/InterSectionBox";
import Footer from "../components/Footer";
import TextColDroite from "../components/TextColDroite";
import { Link } from "react-router-dom";
import BoxImageAnim from "../components/BoxImageAnim";

function HomePage() {
  if (window.location.pathname !== "/japon") {
    document.querySelector("body").classList.remove("App--hidden");
  }
  //initStatDataView();

  let titleArray = [
    <>Comment&nbsp;visiter le monde&nbsp;? </>,
    <>Un&nbsp;plus musical</>,
  ];
  let txtArray = [
    <>
      Rends-toi sur la carte du monde pour choisir un pays que tu aimerais
      visiter, que tu connais l’histoire ou bien que tu veux en savoir un peu
      plus sur lui, je te propose de le visiter et d’en découvrir la culture du
      pays en lien avec le tatouage. De la naissance, l’évolution ainsi que les
      répercussions sur la vision du tatouage. Viens découvrir cela en étayant
      ta curiosité, pour avoir une vision des motifs emblématiques.{" "}
    </>,
    <>
      <br />
      <br />
      <span className="sect__txt--thin sect__txt--italic">
        Tu pourras aussi suivre le suivi de tes explorations dans la page, “{" "}
        <Link
          to="/ton-exploration"
          className="sect__txt"
          style={{ cursor: "pointer", color: "inherit" }}
        >
          <b>Ton explorations</b>
        </Link>{" "}
        “, et venir découvrir si tu as découvert tous les motifs d’une région.{" "}
      </span>{" "}
    </>,
    <>
      Agrémentez votre expérience par une touche musicale, en ayant des musiques
      qui sont en lien avec les styles de tatouage que vous pourrez rencontrer.
      Si vous le souhaitez, alors explorez ceci en musique.
    </>,
    <></>,
  ];

  const [sizeWindow, setSizeWindow] = useState(window.innerWidth);
  React.useEffect(() => {
    function windowResize() {
      //console.log('resize to : ' + window.innerHeight + 'X' + window.innerWidth);
      //console.log(window.innerWidth);
      setSizeWindow(window.innerWidth);
    }
    window.addEventListener("resize", windowResize);
  }, []);

  return (
    <>
      <div className="homepage pageChangeSet">
        <div className="homepage__sect1 homepage__sect1--bgImg sect">
          <div className="sect__boxImg--big sect__boxImg">
            <div className="sect__boxTxt ">
              {/* Changer le titre  */}
              <h1 className="sect__title sect__title--ecart">TattooExplore</h1>
              <h2
                className=" sect__title sect__title--2 sect__title--ecart"
                style={{ fontSize: "28px" }}
              >
                Découvre les
                <br />
                tatouages du
                <br />
                <i>monde</i>
              </h2>
              <p className="sect__txt">
                Bienvenu dans cet univers, qui est de plus en plus visible de
                nos jours, mais qui reste, pour certain assez flou sur le fond.
                Car l’histoire derrière certains courants, mouvements, styles
                sont des histoires à part entière et celui qui connaît
                l’histoire verra ses œuvres d’un autre regard que l’Inculte.{" "}
              </p>
              <p className="sect__txt sect__txt--ecart sect__txt--italic sect__txt--thin">
                Alors je vous invite à voyager dans ses différents univers pour
                en apprendre plus sur les codes et les bases de ces styles
                venant des 4 coins du monde.
              </p>
              <BoutonNormal
                nameBtn={"Voir la carte"}
                linkBtn={"#mapWorld"}
                ClassColor={"sect__btn"}
                linkHref={true}
              />
            </div>
          </div>
        </div>
        <div className="homepage__boxContent">
          <motion.img
            src={ImageHome2}
            initial={{ x: -100, opacity: 0.6 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="homepage__imgBox"
          ></motion.img>
          <div className="homepage__colTxt">
            <TextColDroite
              title1={titleArray[0]}
              txt1={txtArray[0]}
              txt3={txtArray[1]}
            />
          </div>
        </div>
        <div className="homepage__boxContent homepage__boxContent--reverse">
          <motion.img
            src={ImageHome2}
            initial={{ y: -100, opacity: 0.6 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="homepage__imgBox"
          ></motion.img>
          <div className="homepage__colTxt">
            <TextColDroite
              title1={titleArray[1]}
              txt1={txtArray[2]}
              
            />
            <BoutonNormal linkHref={true} nameBtn={'Tous en musique'} linkBtn={'https://open.spotify.com/playlist/5bdQoZomjCWxHB5wbNYM4w?si=dd8a791bcaaf43af'} ClassColor={"sect__btn sect__btn--yellow sect__btn--small"}/>
          </div>
        </div>
        <InterSectionBox />

        {sizeWindow <= 900 ? <ListMapMobile /> : <MapBox />}
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
