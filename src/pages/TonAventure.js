import React, { useEffect, useState } from 'react';
import { ViewStateVisited, GetItemStateTrue } from "../logic/_status-map.js";
import './TonAdventure.scss';

import CarteNordic from "../assets/img/svg/nordic.svg"
import TextColDroite from '../components/TextColDroite.js';
import { Link } from 'react-router-dom';

function TonAventure() {

  console.log(ViewStateVisited);
  ViewStateVisited();

  const [dataNameCountry, setDataNameCountry] = useState([]);
  //let arrayListName = [];
  // window.addEventListener('load', (el)=>{
  //   //localStorage.getItem('')
  //   setDataNameCountry(arrayListName.push('Old school'));
  //   //setDataNameCountry(['Old school']);
  // });

  useEffect(()=>{
    RecapTrueState();

    
    
  })


  function RecapTrueState() {

    let arrayListData = [];
    console.log("heu");
    setTimeout(() => {
      console.log('jio');
      if (localStorage.getItem('US') === true) {
        arrayListData.push('Old school');
        console.log(arrayListData);
      }
    }, 1000)
  }
  
  //let arrayListPathName = ["/oldschool", "/japan", "/nordic", "/russie", "/europe", "/pacifique"];
  //const MapDataLink = dataNameCountry.map((value)=>(<p>hello {value}</p>))
  const MapDataLink = dataNameCountry.map((value) => (<li className="adventure__el"><Link to='' className='adventure__link'>{value}</Link></li>))

  return (
    <div className="yourAdventure">
      <section className="sect--homeAD sect--heigth100 sect--row  homepage__sect1--bgImg">
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
            {dataNameCountry}
          </p>
        </div>

      </section>
      <div className="sect__interColor sect--heigth100">

      </div>
      <section className="sect--heigth100 adventure--client ">

        <div className="adventure__imgBox adventure__imgBox--small">
          <img src={CarteNordic} alt="Carte de pays ou d'une régions du monde. " className="adventure__img" />
        </div>

        <div className="adventure__boxDroite adventure__boxDroite--full">
          <ul className="adventure__listLien">
            {MapDataLink}
          </ul>
          <div className="adventure__SliderBox">
            <img src="" alt="Une représentation des différents motifs qu'on peut retrouver dans le monde du tatouage traditionel." className="adventure__imgSlider" />
          </div>
        </div>

      </section>
    </div>
  )
}

export default TonAventure