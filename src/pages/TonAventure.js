import React, { useEffect, useState } from "react";
import {
  ViewStateVisited,
  GetItemStateTrue,
  loadDataMapAdventure,
} from "../logic/_status-map.js";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";
import { createPortal } from "react-dom";
import "./TonAdventure.scss";
/// import des maps
import CarteNordic from "../assets/img/svg/nordic.svg";
import CarteUS from "../assets/img/svg/amerique.svg";
import CarteJapon from "../assets/img/svg/japon.svg";
import CarteEu from "../assets/img/svg/europe.svg";
import CarteRussie from "../assets/img/svg/russie.svg";
/// motif
import Hirondelle from "../assets/img/oldSchool/hirondelletat.jpg";
import Pinup from "../assets/img/oldSchool/pinup1.jpg";
import Pinup2 from "../assets/img/oldSchool/pinup2.jpg";
import Ancre1 from "../assets/img/oldSchool/marinBat.jpg";
import Jigoku1 from "../assets/img/japan/jigoku1.jpg";
import Ryu01 from "../assets/img/japan/dragon2.jpg";
import Ryu02 from "../assets/img/japan/dragon02.jpg";
import Koi02 from "../assets/img/japan/koi2.jpg";
import Vierge2 from "../assets/img/russie/vierge2.jpg";
import Epaullette2 from "../assets/img/russie/epaullette2.jpg";
import Prisonnier2 from "../assets/img/russie/prisonnier3.jpg";
import Etoile1 from "../assets/img/russie/etoile2.jpg";
//
//
import TextColDroite from "../components/TextColDroite.js";
import BoutonComp from "../components/BoutonComp.js";
import { Link } from "react-router-dom";
import InterSectionBox from "../components/InterSectionBox.js";
import SerpentSvg from "../assets/img/svg/oldSchool/serpent.svg";
import dataDiscover from "../assets/data/AdventureData.json";
import BoutonNormal from "../components/BoutonComp.js";
import Footer from "../components/Footer.js";
import ImgOpenbig from "../components/ImgOpenbig.js";

function TonAventure() {
  if (window.location.pathname !== "/japon") {
    document.querySelector("body").classList.remove("App--hidden");
  }
  const [urlImgBox, seturlImgBox] = useState("#");
  const [showImg, setShowImg] = useState(false);

  const PosCardImg1 = useSpring({ x: 100, y: 0 });
  const PosCardImg2 = useSpring({ x: -60, y: -40 });
  const PosCardImg3 = useSpring({ x: -507, y: -280 });
  const PosCardImg4 = useSpring({ x: -550, y: -220 });

  const bindCardImg1 = useDrag((params) => {
    PosCardImg1.x.set(params.offset[0]);
    PosCardImg1.y.set(params.offset[1]);
  });
  const bindCardImg2 = useDrag((params) => {
    PosCardImg2.x.set(params.offset[0]);
    PosCardImg2.y.set(params.offset[1]);
  });
  const bindCardImg3 = useDrag((params) => {
    PosCardImg3.x.set(params.offset[0]);
    PosCardImg3.y.set(params.offset[1]);
  });
  const bindCardImg4 = useDrag((params) => {
    PosCardImg4.x.set(params.offset[0]);
    PosCardImg4.y.set(params.offset[1]);
  });

  const [linkActive, setlinkActive] = useState("");
  const [dataImgActive, setDataImgActive] = useState([]);
  const [dataBoxInfo, setDataBoxInfo] = useState([]);
  const [mapLink, setMapLink] = useState([]);

  const arrayListImgLand = [
    { US: { Img01: Hirondelle, Img02: Pinup, Img03: Pinup2, Img04: Ancre1 } },
    { Japon: { Img01: Jigoku1, Img02: Ryu02 } },
    { Russie: { Img01: Vierge2, Img02: Epaullette2 } },
  ];
 // console.log(arrayListImgLand);
  //console.log(arrayListImgLand[0].US.Img01);
  ViewStateVisited();

  const tabDataNameUse = loadDataMapAdventure();
  //console.table(tabDataNameUse);

  /// tri des données pour affichage
  let arrayListMapLink = [
    CarteUS,
    CarteJapon,
    CarteNordic,
    CarteEu,
    CarteRussie,
    CarteNordic,
  ];
  function openImgBox(e) {
    let srcImg = e.target.src;
    seturlImgBox(srcImg);
    setShowImg(true);
  }
  function closeImgBox(e) {
    let boxImgFull = document.querySelector(".sect__imgOpenBig");
    boxImgFull.classList.add("sect__imgOpenBig--anim");
    setTimeout(() => {
      setShowImg(false);
    }, 600);
  }

  function changeDataLink(e) {
    setlinkActive(e.target.title);

    setTimeout(() => {
      changeDataInfoBox(e.target.title);
    }, 800);

    let allLink = document.querySelectorAll(".adventure__link");
    allLink.forEach((el) => {
      el.classList.remove("adventure__link--actif");
    });
    //console.log(e.target);
    e.target.classList.add("adventure__link--actif");

    document
      .querySelector("#boxInfoGauche")
      .classList.add("adventure__imgBox--animClose");
    document
      .querySelector("#boxInfoGauche")
      .addEventListener("animationend", (e) => {
        e.target.classList.remove("adventure__imgBox--animClose");
      });
  }

  function changeDataInfoBox(linkActive) {
    if (linkActive === "Old school") {
      setDataBoxInfo([
        dataDiscover[0].name,
        dataDiscover[0].description,
        dataDiscover[0].land,
        dataDiscover[0].link,
      ]);
      setDataImgActive([
        Hirondelle,
        Pinup,
        Pinup2,
        Ancre1,
        "Hirondelle",
        "Pin-up",
        "Pin-up",
        "Bateau & ancre",
      ]);

      setMapLink(arrayListMapLink[0]);
    } else if (linkActive === "Japon") {
      setDataBoxInfo([
        dataDiscover[1].name,
        dataDiscover[1].description,
        dataDiscover[1].land,
        dataDiscover[1].link,
      ]);
      setDataImgActive([
        Ryu02,
        Jigoku1,
        Koi02,
        Ryu01,
        "Dragon",
        "Jigoku",
        "Koi",
        "Ryu",
      ]);

      setMapLink(arrayListMapLink[1]);
    } else if (linkActive === "Russie & prisons ") {
      setDataBoxInfo([
        dataDiscover[2].name,
        dataDiscover[2].description,
        dataDiscover[2].land,
        dataDiscover[2].link,
      ]);
      setDataImgActive([
        Vierge2,
        Epaullette2,
        Prisonnier2,
        Etoile1,
        "Vierge a l'enfant",
        "Epaulette",
        "Prisonnier",
        "Etoile 8 branches",
      ]);

      setMapLink(arrayListMapLink[4]);
    } else {
      setDataBoxInfo(["Contenu non trouvable"]);
    }
  }
  function animateChangePage(e) {
    // e.target.preventDefault();

    let namePath = e.target.title;
    let blocChangePage = document.querySelector(".sect__changePage");
    blocChangePage.classList.remove("sect__changePage--close");
    blocChangePage.classList.remove("sect__changePage--closeNav");
    blocChangePage.classList.add("sect__changePage--close");
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
      e.target.classList.remove("sect__changePage--close");
    });
  }

  useEffect(() => {
    if (tabDataNameUse.length !== 0) {
      if (tabDataNameUse[0] === "Old school") {
        setDataBoxInfo([
          dataDiscover[0].name,
          dataDiscover[0].description,
          dataDiscover[0].land,
          dataDiscover[0].link,
        ]);
        setDataImgActive([
          Hirondelle,
          Pinup,
          Pinup2,
          Ancre1,
          "Hirondelle",
          "Pin-up",
          "Pin-up",
          "Bateau & ancre",
        ]);

        setMapLink(arrayListMapLink[0]);
      } else if (tabDataNameUse[0] === "Japon") {
        setDataBoxInfo([
          dataDiscover[1].name,
          dataDiscover[1].description,
          dataDiscover[1].land,
          dataDiscover[1].link,
        ]);
        setDataImgActive([
          Ryu02,
          Jigoku1,
          Koi02,
          Ryu01,
          "Dragon",
          "Jigoku",
          "Koi",
          "Ryu",
        ]);
        setMapLink(arrayListMapLink[2]);
      } else if (tabDataNameUse[0] === "Russie & prisons ") {
        setDataBoxInfo([
          dataDiscover[2].name,
          dataDiscover[2].description,
          dataDiscover[2].land,
          dataDiscover[2].link,
        ]);
        setDataImgActive([
          Vierge2,
          Epaullette2,
          Prisonnier2,
          Etoile1,
          "Vierge a l'enfant",
          "Epaulette",
          "Prisonnier",
          "Etoile 8 branches",
        ]);
        setMapLink(arrayListMapLink[4]);
      } else {
        setDataBoxInfo(["Contenu non trouvable"]);
      }
    }

    //console.log(dataBoxInfo);
  }, []);

  const MapDataLink = tabDataNameUse.map((value) => (
    <li className="adventure__el" title={value} onClick={changeDataLink}>
      <p title={value} className="adventure__link">
        {value}
      </p>
    </li>
  ));

  return (
    <div className="yourAdventure pageChangeSet">
      <section className="sect--homeAD sect--heigth100 sect--row  homepage__sect1--bgImg adventure--overflow">
        <div className="adventure__imgBox">
          <img
            src={CarteNordic}
            alt="Carte de pays ou d'une régions du monde. "
            className="adventure__img"
          />
        </div>

        <div className="adventure__boxDroite">
          <div className="adventure__boxTitle">
            <h2 className="sect__title ">
              Ton aventure <br />
              <span className="sect__title--italic sect__title--thin">
                Tes explorations
              </span>
            </h2>
            <p className="sect__title sect__title--big sect__txt--jaune adventure__decorTitle">
              &
            </p>
          </div>
          <p className="sect__txt sect__txt--ecartnv2 sect__txt--smallLength">
            Tu retrouvera ici le suivis de ton aventure, entre les différents
            pays que tu auras visité. Viens y jeter un coup d’œil pour avoir un
            avis sur ce que tu as déjà vus, tu verras quelque exemples de motifs
            présents dans leur univers.
            <br />
            <br />
            <span className="sect__txt sect__txt--italic sect__txt--bold sect__txt--ecart">
              Bonne aventure !{" "}
            </span>
          </p>

          {/* <BoutonComp  nameBtn={"Regarde ton voyage "} linkBtn={"#hollidays"} linkHref={true} ClassColor={"sect__btn sect__btn--yellow"}/> */}
        </div>
      </section>

      <InterSectionBox
        WhitThext={true}
        textTitle={<>Souviens-toi&nbsp; du&nbsp;voyage</>}
      />
      <section className="sect--heigth100 adventure--client " id="hollidays">
        <div
          className="adventure__imgBox adventure__imgBox--small"
          id="boxInfoGauche"
        >
          {tabDataNameUse.length === 0 ? (
            <>
              <div className="adventure__colBox">
                <TextColDroite
                  title1={<>Tu n'as encore rien&nbsp;visiter</>}
                  txt1={
                    "Choisis un pays sur la carte pour pouvoir commencer l'aventure et en apprendre plus sur un style de tatouage."
                  }
                />
              </div>
              <BoutonNormal
                linkBtn={"/"}
                nameBtn={"Vers la carte "}
                ClassColor={"sect__btn sect__btn--yellow"}
                onClick={animateChangePage}
              />

              <img
                src={SerpentSvg}
                alt="Carte de pays ou d'une régions du monde. "
                className="adventure__img adventure__img--noData"
              />
            </>
          ) : (
            <>
              <div className="adventure__colBox">
                <TextColDroite title1={dataBoxInfo[0]} txt1={dataBoxInfo[1]} />
              </div>
              <Link
                to={dataBoxInfo[3]}
                className="adventure__linkBox"
                onClick={animateChangePage}
              >
                <p className="sect__txt">Visite {dataBoxInfo[2]}</p>
                <img
                  src={mapLink}
                  alt="Carte de pays ou d'une régions du monde. "
                  className="adventure__img"
                />
              </Link>
            </>
          )}
        </div>

        <div className="adventure__boxDroite adventure__boxDroite--full">
          <ul className="adventure__listLien">{MapDataLink}</ul>
          <div className="adventure__SliderBox sect__nameBigBox--fondImg">
            {tabDataNameUse.length === 0 ? (
              <></>
            ) : (
              <>
                <animated.div
                  {...bindCardImg1()}
                  style={{ x: PosCardImg1.x, y: PosCardImg1.y }}
                  className="adventure__boxImg"
                >
                  <p className="sect__txt sect__title--druzokh sect__txt--big sect__txt--jaune">
                    {dataImgActive[4]}
                  </p>
                  <img
                    src={dataImgActive[0]}
                    alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel."
                    className="adventure__imgSlider"
                    onClick={openImgBox} 
                  />
                </animated.div>
                <animated.div
                  {...bindCardImg2()}
                  style={{ x: PosCardImg2.x, y: PosCardImg2.y }}
                  className="adventure__boxImg"
                >
                  <p className="sect__txt  sect__txt--big sect__txt--jaune">
                    {dataImgActive[5]}
                  </p>
                  <img
                    src={dataImgActive[1]}
                    alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel."
                    className="adventure__imgSlider"
                    onClick={openImgBox} 
                  />
                </animated.div>
                <animated.div
                  {...bindCardImg3()}
                  style={{ x: PosCardImg3.x, y: PosCardImg3.y }}
                  className="adventure__boxImg"
                >
                  <p className="sect__txt  sect__txt--big sect__txt--jaune">
                    {dataImgActive[6]}
                  </p>
                  <img
                    src={dataImgActive[2]}
                    alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel."
                    className="adventure__imgSlider"
                    onClick={openImgBox} 
                  />
                </animated.div>
                <animated.div
                  {...bindCardImg4()}
                  style={{ x: PosCardImg4.x, y: PosCardImg4.y }}
                  className="adventure__boxImg"
                >
                  <p className="sect__txt  sect__txt--big sect__txt--jaune">
                    {dataImgActive[7]}
                  </p>
                  <img
                    src={dataImgActive[3]}
                    alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel."
                    className="adventure__imgSlider"
                    onClick={openImgBox} 
                  />
                </animated.div>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
      {showImg &&
        createPortal(
          <ImgOpenbig closeModal={closeImgBox} urlImgBig={urlImgBox} />,
          document.body
        )}
    </div>
  );
}

export default TonAventure;
