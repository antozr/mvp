import React, { useEffect, useState } from 'react';
import { ViewStateVisited, GetItemStateTrue, loadDataMapAdventure } from "../logic/_status-map.js";
import { useDrag } from '@use-gesture/react';
import { animated, useSpring } from '@react-spring/web';
import './TonAdventure.scss';
/// import des maps 
import CarteNordic from "../assets/img/svg/nordic.svg"
import CarteUS from "../assets/img/svg/amerique.svg";
import CarteJapon from '../assets/img/svg/japon.svg';
import CarteEu from '../assets/img/svg/europe.svg';
import CarteRussie from '../assets/img/svg/russie.svg';
/// motif
import Hirondelle from '../assets/img/oldSchool/hirondelletat.jpg';
import Pinup from '../assets/img/oldSchool/pinup1.jpg';
import Pinup2 from '../assets/img/oldSchool/pinup2.jpg';
import Ancre1 from '../assets/img/oldSchool/marinBat.jpg';
import Jigoku1 from '../assets/img/japan/jigoku1.jpg';
import Ryu01 from "../assets/img/japan/dragon2.jpg";
import Ryu02 from "../assets/img/japan/dragon02.jpg";
import Koi02 from "../assets/img/japan/koi2.jpg";
import Vierge2 from "../assets/img/russie/vierge2.jpg";
import Epaullette2 from "../assets/img/russie/epaullette2.jpg";
//
import TextColDroite from '../components/TextColDroite.js';
import BoutonComp from '../components/BoutonComp.js';
import { Link } from 'react-router-dom';
import InterSectionBox from '../components/InterSectionBox.js';
import SerpentSvg from '../assets/img/svg/oldSchool/serpent.svg';
import dataDiscover from "../assets/data/AdventureData.json";
import BoutonNormal from '../components/BoutonComp.js';

function TonAventure() {
  if (window.location.pathname !== '/japon') {
    document.querySelector('body').classList.remove('App--hidden')
  }

  const PosCardImg1 = useSpring({ x: 100, y: 0 });
  const PosCardImg2 = useSpring({ x: 20, y: 60 });
  const PosCardImg3 = useSpring({ x: 60, y: -30 });
  const PosCardImg4 = useSpring({ x: -20, y: 20 });

  const bindCardImg1 = useDrag((params) => {
    PosCardImg1.x.set(params.offset[0])
    PosCardImg1.y.set(params.offset[1])
  })
  const bindCardImg2 = useDrag((params) => {
    PosCardImg2.x.set(params.offset[0])
    PosCardImg2.y.set(params.offset[1])
  })
  const bindCardImg3 = useDrag((params) => {
    PosCardImg3.x.set(params.offset[0])
    PosCardImg3.y.set(params.offset[1])
  })
  const bindCardImg4 = useDrag((params) => {
    PosCardImg4.x.set(params.offset[0])
    PosCardImg4.y.set(params.offset[1])
  })


  const [linkActive, setlinkActive] = useState("");
  const [dataImgActive, setDataImgActive] = useState([]);
  const [dataBoxInfo, setDataBoxInfo] = useState([])
  // console.log("je suis chevre");
  // console.log(ViewStateVisited);
  const arrayListImgLand = [
    { "US": { "Img01": Hirondelle, "Img02": Pinup, "Img03":Pinup2, "Img04":Ancre1 } },
    { "Japon": { "Img01": Jigoku1, "Img02": Ryu02 } },
    { "Russie": { "Img01": Vierge2, "Img02": Epaullette2 } }
  ];
  console.log(arrayListImgLand);
  console.log(arrayListImgLand[0].US.Img01);
  ViewStateVisited();

  const tabDataNameUse = loadDataMapAdventure();

  /// tri des données pour affichage 
  let arrayListMapLink = [CarteUS, CarteJapon, CarteNordic, CarteEu, CarteRussie, CarteNordic];
  let imgBox = Hirondelle;

  if (tabDataNameUse[0]) {
    var linkMap = arrayListMapLink[0]
    imgBox = arrayListImgLand[0].US.Img02
  }

  // const [dataNameCountry, setDataNameCountry] = useState([]);

  function changeDataLink(e){
    setlinkActive(e.target.title);
    console.log(linkActive);
    changeDataInfoBox(e.target.title)
    console.log(dataBoxInfo);
  }

  function changeDataInfoBox(linkActive){
    if(linkActive === "Old school"){
      setDataBoxInfo(
        [dataDiscover[0].name,dataDiscover[0].description,dataDiscover[0].land,dataDiscover[0].link]
      );
      setDataImgActive(
        [ Hirondelle,  Pinup, Pinup2, Ancre1, "Hirondelle", "Pin-up","Pin-up", "Bateau & ancre"]
      )

    }else if(linkActive === "Japon"){
      setDataBoxInfo(
        [dataDiscover[1].name,dataDiscover[1].description,dataDiscover[1].land,dataDiscover[1].link]
      );
      setDataImgActive(
        [Ryu02,Jigoku1, Koi02, Ryu01, "Dragon", "Jigoku", "Koi", "Ryu"]
      )

    }else{
      setDataBoxInfo(
        ["Contenu non trouvable"]
      )
    }
  }

  useEffect(()=>{

    console.log(dataBoxInfo);
    // if(linkActive === "Old school"){
    //   setDataBoxInfo(
    //     dataBoxInfo.title = dataDiscover[0].name,
    //     dataBoxInfo.textIntro = dataDiscover[0].description,
    //     dataBoxInfo.nameLand = dataDiscover[0].land,
    //     dataBoxInfo.dataLink = dataDiscover[0].link
    //   )

    // }

  },[])




  const MapDataLink = tabDataNameUse.map((value) => (<li className="adventure__el" title={value} onClick={changeDataLink}><p title={value} className='adventure__link'>{value}</p></li>))

  return (
    <div className="yourAdventure pageChangeSet">
      <section className="sect--homeAD sect--heigth100 sect--row  homepage__sect1--bgImg adventure--overflow">
        <div className="adventure__imgBox">
          <img src={CarteNordic} alt="Carte de pays ou d'une régions du monde. " className="adventure__img" />
        </div>

        <div className="adventure__boxDroite">
          <div className="adventure__boxTitle">

            <h2 className="sect__title ">
              Ton aventure <br />
              <span className="sect__title--italic sect__title--thin">Tes explorations</span>
            </h2>
            <p className="sect__title sect__title--big sect__txt--jaune adventure__decorTitle">&</p>
          </div>
          <p className="sect__txt sect__txt--ecartnv2 sect__txt--smallLength">
            Tu retrouvera ici le suivis de ton aventure, entre les différents pays que tu auras visité. Viens y jeter un coup d’œil pour avoir un avis sur ce que tu as déjà vus, tu verras quelque exemples de motifs présents dans leur univers.
            <br /><br />
            <span className="sect__txt sect__txt--italic sect__txt--bold sect__txt--ecart">Bonne aventure ! </span>

          </p>

          {/* <BoutonComp  nameBtn={"Regarde ton voyage "} linkBtn={"#hollidays"} linkHref={true} ClassColor={"sect__btn sect__btn--yellow"}/> */}
        </div>

      </section>
      {/* <div className="sect__interColor sect--heigth100">

      </div> */}
      <InterSectionBox />
      <section className="sect--heigth100 adventure--client " id='hollidays'>

        <div className="adventure__imgBox adventure__imgBox--small">

          {tabDataNameUse.length === 0 ? <>
            <div className="adventure__colBox">
              <TextColDroite title1={<>Tu n'as encore rien&nbsp;visiter</>} txt1={"Choisis un pays sur la carte pour pouvoir commencer l'aventure et en apprendre plus sur un style de tatouage."} />
            </div>
            <BoutonNormal linkBtn={"/"} nameBtn={"Vers la carte "} ClassColor={"sect__btn sect__btn--yellow"} />

            <img src={SerpentSvg} alt="Carte de pays ou d'une régions du monde. " className="adventure__img adventure__img--noData" />
          </> : <>
            <div className="adventure__colBox">
              <TextColDroite title1={dataBoxInfo[0]} txt1={dataBoxInfo[1]} />
            </div>
            <Link to={dataBoxInfo[3]} className='adventure__linkBox'  >

              <p className="sect__txt">
                Visite {dataBoxInfo[2]}
              </p>
              <img src={linkMap} alt="Carte de pays ou d'une régions du monde. " className="adventure__img" />
            </Link>
          </>}
        </div>

        <div className="adventure__boxDroite adventure__boxDroite--full">
          <ul className="adventure__listLien">
            {MapDataLink}
          </ul>
          <div className="adventure__SliderBox sect__nameBigBox--fondImg">
            {tabDataNameUse.length === 0 ? <>

            </> : <>
              <animated.div {...bindCardImg1()} style={{ x: PosCardImg1.x, y: PosCardImg1.y }} className="adventure__boxImg">
                <p className="sect__txt sect__title--druzokh sect__txt--big sect__txt--jaune" style={{ fontSize: "2vw" }}>
                  {dataImgActive[4]}
                </p>
                <img src={dataImgActive[0]} alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel." className="adventure__imgSlider" />

              </animated.div>
              <animated.div {...bindCardImg2()} style={{ x: PosCardImg2.x, y: PosCardImg2.y }} className="adventure__boxImg">
                <p className="sect__txt  sect__txt--big sect__txt--jaune" style={{ fontSize: "2vw" }}>
                  {dataImgActive[5]}
                </p>
                <img src={dataImgActive[1]} alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel." className="adventure__imgSlider" />

              </animated.div>
              <animated.div {...bindCardImg3()} style={{ x: PosCardImg3.x, y: PosCardImg3.y }} className="adventure__boxImg">
                <p className="sect__txt  sect__txt--big sect__txt--jaune" style={{ fontSize: "2vw" }}>
                  {dataImgActive[6]}
                </p>
                <img src={dataImgActive[2]} alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel." className="adventure__imgSlider" />

              </animated.div>
              <animated.div {...bindCardImg4()} style={{ x: PosCardImg4.x, y: PosCardImg4.y }} className="adventure__boxImg">
                <p className="sect__txt  sect__txt--big sect__txt--jaune" style={{ fontSize: "2vw" }}>
                  {dataImgActive[7]}
                </p>
                <img src={dataImgActive[3]} alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel." className="adventure__imgSlider" />

              </animated.div>
            </>}
          </div>
        </div>

      </section>
    </div>
  )
}

export default TonAventure