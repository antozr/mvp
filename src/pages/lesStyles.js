import React from "react";
import BoutonNormal from "../components/BoutonComp";

import HomeNordic from '../assets/img/russie/prisonnier4.jpg'
import InterSectionBox from "../components/InterSectionBox";

function LesStyles() {


  let allLink = ["Tous", "Japon", "old-school", "Nordique", "Prison Russe", "Celtique"];



  function linkSelection(){

    return(
      <li className="style__elLink">
        <p className="style__link">
          123
        </p>
      </li>
    )
  }


  return (
    <>
      <div className="page">
        <div className="homepage__sect1 homepage__sect1--bgImg sect">
          <div className="sect__boxImg--big sect__boxImg" style={{backgroundImage:  `url(${HomeNordic})`}}>
            <div className="sect__boxTxt sect__boxTxt--bgNoir ">
              {/* Changer le titre  */}
              <h1 className="sect__title sect__title--ecart"><span className="sect__title--fontDruzokh ">Explore</span> les styles</h1>
              <h2
                className=" sect__title sect__title--2 sect__title--ecart"
                style={{ fontSize: "28px" }}
              >
                Pret pour <br/> une exploration <br/> approfondie ? 
              </h2>
              <p className="sect__txt">
                Si tu cherches à en savoir plus, que tu souhaites avoir un
                complément d’informations ou tout simplement assouvir ta
                curiosité. <b>Alors tu es au bon endroit !</b>
              </p>
              <p className="sect__txt sect__txt--ecart sect__txt--italic sect__txt--thin">
                Tu vas pouvoir choisir un style ou tous les prendre, et explorer
                l’univers qui est présent autour de ces styles.
              </p>
              <BoutonNormal
                nameBtn={"Voir les infos"}
                linkBtn={"#mapWorld"}
                ClassColor={"sect__btn"}
                linkHref={true}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <InterSectionBox />
        <section className="sect__contenu" >
          <linkSelection/>
        </section>
      </div>
    </>
  );
}

export default LesStyles;
