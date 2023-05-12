import React, { useEffect, useState } from 'react';
import { ViewStateVisited, GetItemStateTrue, loadDataMapAdventure } from "../logic/_status-map.js";
import './TonAdventure.scss';
/// import des maps 
import CarteNordic from "../assets/img/svg/nordic.svg"
import CarteUS from "../assets/img/svg/amerique.svg";
import CarteJapon from '../assets/img/svg/japon.svg';
import CarteEu from '../assets/img/svg/europe.svg';
import CarteRussie from '../assets/img/svg/russie.svg';
import Hirondelle from '../assets/img/oldSchool/hirondelletat.jpg';
import Pinup from '../assets/img/oldSchool/pinup1.jpg';
//
import TextColDroite from '../components/TextColDroite.js';
import BoutonComp from '../components/BoutonComp.js';
import { Link } from 'react-router-dom';

function TonAventure() {
  if (window.location.pathname !== '/japon') {
    document.querySelector('body').classList.remove('App--hidden')
  }
  // console.log("je suis chevre");
  // console.log(ViewStateVisited);
  const arrayListImgLand = [{ "US": { "Img01": Hirondelle, "Img02": Pinup } }];
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





  const MapDataLink = tabDataNameUse.map((value) => (<li className="adventure__el"><Link to='' className='adventure__link'>{value}</Link></li>))

  return (
    <div className="yourAdventure">
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
          {/* <BoutonComp  nameBtn={"Regarde ton voyage "} linkBtn={"#hollidays"}/> */}
        </div>

      </section>
      <div className="sect__interColor sect--heigth100">

      </div>
      <section className="sect--heigth100 adventure--client " id='hollidays'>

        <div className="adventure__imgBox adventure__imgBox--small">
          <img src={linkMap} alt="Carte de pays ou d'une régions du monde. " className="adventure__img" />
        </div>

        <div className="adventure__boxDroite adventure__boxDroite--full">
          <ul className="adventure__listLien">
            {MapDataLink}
          </ul>
          <div className="adventure__SliderBox sect__nameBigBox--fondImg">
            <img src={imgBox} alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel." className="adventure__imgSlider" />
          </div>
        </div>

      </section>
    </div>
  )
}

export default TonAventure