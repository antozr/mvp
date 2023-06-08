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
import edo from "../assets/img/artistes/edo.jpg";
import annaOld from "../assets/img/artistes/anna.jpg";
import alexplunk from "../assets/img/artistes/alexplunk.jpeg";
import ludo from "../assets/img/artistes/ludo.jpg";
import matt from "../assets/img/artistes/matt.jpg";
import Footer from "../components/Footer";

function LesStyles() {
  if (window.location.pathname !== '/plus-dinfos') {
    document.querySelector('body').classList.add('App--hidden')
} else {
    document.querySelector('body').classList.remove('App--hidden')
}

  const [navSecondActif, setNavSecondActif] = useState("Tous");
  const [dataCard, setDataCard] = useState(dataStyle);

  const allLinkImgArtsit = [
    [horisumi, asakusa, edo],
    [annaOld, alexplunk, matt, ludo],
  ];
  const [dataImgArtist, setDataImgArtist] = useState(allLinkImgArtsit);

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

    let nameLink = e.target.title.toLowerCase();

    if (e.target.title === "Tous") {
      setDataCard(dataStyle);
      setDataImgArtist(allLinkImgArtsit);
    } else if (e.target.title === "Celtique") {
      setDataCard(
        dataStyle.filter((card) => card.name.toLowerCase() === "nordique")
      );
      setDataImgArtist("");
    } else {
      setDataCard(
        dataStyle.filter(
          (card) => card.name.toLowerCase() === e.target.title.toLowerCase()
        )
      );

      if (nameLink === "japon") {
        setDataImgArtist(allLinkImgArtsit[0]);
      }
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
        urlTarget={ell.linkProduit}
      />
    ))
  );


  const cardArtiste = dataCard.map((el) =>
    el.artiste.map((ell, key) => (
      <CardInfoStyle
        urlImg={ell.urlImg}
        author={ell.style}
        nameBook={ell.name}
        urlTarget={ell.linkInsta}
      />
    ))
  );
  //console.log(dataStyle[2]);

  //// les video 

  const cardFilm = dataCard.map((el)=>
  el.film.map((ell, key)=>(
    <CardInfoStyle
    urlImg={ell.urlImg}
    author={ell.author}
    nameBook={ell.nameFilm}
    urlTarget={ell.linkVideo}
    video={true}/>
  )))

  /// close part of info

  function closePartInfoList(e) {
    console.log(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.classList.toggle(
      "stylePage__sect--small"
    );
    e.target.children[0].classList.toggle("stylePage__svgArrow--click");

    
  }

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
                Prêt pour <br /> une exploration <br /> approfondie ?
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
        <section className="sect__contenu " id="infoContent">
          <div className="homepage__boxContent ">
            <h2 className="sect__title sect__title--druzokh">
              Choisis un style pour + d'infos
            </h2>
            
          </div>
          <div className="stylePage__boxLink">
              <ul className="boxLink__ul">{linkLandEl}</ul>
            </div>
          <div className="stylePage__sect ">
            <div className="stylePage__boxTitle">
              <h2 className="sect__title sect__title--2">Des ouvrages :</h2>
              <p
                className="sect__txt stylePage__btnToggle"
                onClick={closePartInfoList}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stylePage__svgArrow"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#010101"
                >
                  <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                </svg>{" "}
                <span>Réduire</span>{" "}
              </p>
            </div>
            <ul className="stylePage__listBox">{cardList}</ul>
          </div>
          {/*  */}
          <div className="stylePage__sect stylePage__sect--ecart  ">
            <div className="stylePage__boxTitle">
              <h2 className="sect__title sect__title--2">
                Des documentaires :
              </h2>
              <p
                className="sect__txt stylePage__btnToggle"
                onClick={closePartInfoList}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stylePage__svgArrow"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#010101"
                >
                  <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                </svg>{" "}
                <span>Réduire</span>{" "}
              </p>
            </div>

            <ul className="stylePage__listBox">{cardFilm}</ul>
          </div>
          {/*  */}
          <div className="stylePage__sect " style={{backgroundImage :`url(${backImg})` }}>
            <div className="stylePage__boxTitle stylePage__listBox--black">
              <h2 className="sect__title sect__title--2">Des artistes :</h2>
              <p
                className="sect__txt stylePage__btnToggle"
                onClick={closePartInfoList}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stylePage__svgArrowstylePage__svgArrow--black"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#010101"
                >
                  <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                </svg>{" "}
                <span>Réduire</span>{" "}
              </p>
            </div>
            <ul className="stylePage__listBox stylePage__listBox--black">{cardArtiste}</ul>
          </div>
          <Footer />
        </section>
       
      </div>
      
    </>
  );
}

export default LesStyles;
