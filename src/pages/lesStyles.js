import React, { useEffect, useState } from "react";
import "./StylesPages.scss";
import BoutonNormal from "../components/BoutonComp";
import dataStyle from "../assets/data/StylesData.json";
import HomeNordic from "../assets/img/russie/prisonnier4.jpg";
import InterSectionBox from "../components/InterSectionBox";
// img
import backImg from "../assets/img/oldSchool/fondPeauNoir.jpg";
import CardInfoStyle from "../components/CardInfoStyle";
import horisumi from "../assets/img/artistes/horisumi.jpg";
import asakusa from "../assets/img/artistes/asakusa.jpeg";
import annaOld from "../assets/img/artistes/anna.jpg";

function LesStyles() {
  const [navSecondActif, setNavSecondActif] = useState("Tous");
  const [dataCard, setDataCard] = useState(dataStyle);

  let allLinkImgArtsit = [[horisumi, asakusa,], [annaOld]];

  let allLink = [
    "Tous",
    "Japon",
    "Old-school",
    "Nordique",
    "Prison Russe",
    "Celtique",
  ];

  const linkLandEl = allLink.map((el) => (
    <li className="stylePage__el" onClick={changestatNavSecond}>
      <p className="stylePage__link sect__txt sect__txt--bold" title={el}>
        {el}
      </p>
    </li>
  ));

  useEffect(() => {
    if (navSecondActif === "Tous") {
      let firstLink = document.querySelectorAll(".stylePage__link");
      firstLink[0].classList.add("stylePage__link--actif");
    }
  });

  function changestatNavSecond(e) {
    setNavSecondActif(e.target.title.toLowerCase());

    if (e.target.title === "Tous") {
      setDataCard(dataStyle);
    } else if (e.target.title === "Celtique") {
      setDataCard(
        dataStyle.filter((card) => card.name.toLowerCase() === "nordique")
      );
    } else {
      setDataCard(
        dataStyle.filter(
          (card) => card.name.toLowerCase() === e.target.title.toLowerCase()
        )
      );
    }

    // console.table(navSecondActif)
    // console.table(dataCard)

    let allLink = document.querySelectorAll(".stylePage__link");
    allLink.forEach((el) => {
      el.classList.remove("stylePage__link--actif");
    });
    e.target.classList.add("stylePage__link--actif");
  }

  const cardList = dataCard.map((el) =>
    el.book.map((ell) => (
      <CardInfoStyle
        urlImg={ell.urlImg}
        author={ell.author}
        nameBook={ell.nameBook}
      />
    ))
  );
 
  let i = 0;
  function setTableDataImg(key){
    
    let dataS1 = dataStyle[0].artiste.length
    console.log('Longeur tab artistes : '+dataS1);
    console.log('key: '+key);
    if(key <= dataS1 -1 && i <= dataS1 -1){
      console.log(allLinkImgArtsit[i])
      i++
      console.log(i);
      return allLinkImgArtsit[0][key]
    }else if (i > dataS1 -1){
      return allLinkImgArtsit[1][key]
    }
  }
  const cardArtiste = dataCard.map((el) =>
    el.artiste.map((ell, key) => (
      <CardInfoStyle
        urlImg={setTableDataImg(key)}
        author={ell.style}
        nameBook={ell.name}
      />
    ))
  );
  //console.log(dataStyle[2]);

  return (
    <>
      <div className="page">
        <div className="homepage__sect1 homepage__sect1--bgImg sect">
          <div
            className="sect__boxImg--big sect__boxImg"
            style={{ backgroundImage: `url(${HomeNordic})` }}
          >
            <div className="sect__boxTxt sect__boxTxt--bgNoir ">
              {/* Changer le titre  */}
              <h1 className="sect__title sect__title--ecart">
                <span className="sect__title--fontDruzokh ">Explore</span> les
                styles
              </h1>
              <h2
                className=" sect__title sect__title--2 sect__title--ecart"
                style={{ fontSize: "28px" }}
              >
                Pret pour <br /> une exploration <br /> approfondie ?
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
                linkBtn={"#infoContent"}
                ClassColor={"sect__btn"}
                linkHref={true}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <InterSectionBox backImg={{ backgroundImage: `url(${backImg})` }} />
        <section className="sect__contenu" id="infoContent">
          <div className="homepage__boxContent">
            <h2 className="sect__title sect__title--druzokh">
              Choisis un style pour + d'infos
            </h2>
            <div className="stylePage__boxLink">
              <ul className="boxLink__ul">{linkLandEl}</ul>
            </div>
          </div>
          <div className="stylePage__sect">
            <h2 className="sect__title sect__title--2">Des ouvrages :</h2>
            <ul className="stylePage__listBox">{cardList}</ul>
          </div>
          {/*  */}
          <div className="stylePage__sect stylePage__sect--ecart">
            <h2 className="sect__title sect__title--2">Des documentaires :</h2>
            <ul className="stylePage__listBox">{cardList}</ul>
          </div>
          {/*  */}
          <div className="stylePage__sect stylePage__sect--ecart">
            <h2 className="sect__title sect__title--2">Des artistes :</h2>
            <ul className="stylePage__listBox">{cardArtiste}</ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default LesStyles;
