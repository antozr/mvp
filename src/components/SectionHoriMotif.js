import React, { useEffect, useRef } from 'react'
//import ContentBoxHori from '../components/ContentBoxHori';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
import { Tween } from 'gsap/gsap-core';
import PresentationMotif from './PresentationMotif';
import { Link } from 'react-router-dom';
import { ChangeStateDataVisited } from '../logic/_status-map.js';

//img




gsap.registerPlugin(ScrollTrigger, Timeline, Tween);

function SectionMotifHori({ Img01, Img012, Img02, Img021, Img03, Img032, title01, title02, title03, txt01, txt02, txt03, nameIllu1, nameIllu2, nameIllu3 , containerStyle,columStyle, boxStyle, OneImg1, styleBoxIllu1, styleBoxIllu2 , styleBoxIllu3}) {

    const boxRef = useRef();
    function animateChangePage(e) {
        // e.target.preventDefault();
    
       
        let blocChangePage = document.querySelector('.sect__changePage');
        blocChangePage.classList.remove("sect__changePage--close")
        blocChangePage.classList.remove("sect__changePage--closeNav")
        blocChangePage.classList.add('sect__changePage--close');
        document.querySelector('.pageChangeSet').style.visibility = "hidden";
        setTimeout(() => {
          window.scrollTo(0, 0);
    
        }, 100);
    
        setTimeout(() => {
          //routChange(namePath);
          window.scrollTo(0, 0);
          document.querySelector('.pageChangeSet').style.visibility = "visible";
        }, 1100);
        blocChangePage.addEventListener('animationend', (e) => {
          e.target.classList.remove("sect__changePage--close")
        });
    
      }

      function changeDataLand(){
        let arrayListPathName = [
            "/projets/tfe/suite/oldschool",
            "/projets/tfe/suite/japon",
            "/projets/tfe/suite/nordic",
            "/projets/tfe/suite/russie",
            "/projets/tfe/suite/europe",
            "/projets/tfe/suite/pacifique",
          ];
          let pathNamePage = window.location.pathname;
          console.log(pathNamePage);
          console.log(arrayListPathName[1]);
          localStorage.setItem("ViewCheckPageStart", false);
          let SecondVisiteSelect = false;
        
          if (SecondVisiteSelect === true) {
            localStorage.setItem("ViewCheckPageStart", true);
          } else {
            localStorage.setItem("ViewCheckPageStart", false);
          }
          //alert(pathNamePage)
        
          if (pathNamePage === arrayListPathName[0]) {
            console.log("je suis bon");
            localStorage.setItem("US", true);
            SecondVisiteSelect = true;
            localStorage.setItem("ViewCheckPageStart", true);
          } else if (pathNamePage === arrayListPathName[1]) {
            localStorage.setItem("Japan", true);
            SecondVisiteSelect = true;
            localStorage.setItem("ViewCheckPageStart", true);
          } else if (pathNamePage === arrayListPathName[2]) {
            localStorage.setItem("Nordic", true);
            SecondVisiteSelect = true;
            localStorage.setItem("ViewCheckPageStart", true);
          } else if (pathNamePage === arrayListPathName[3]) {
            localStorage.setItem("Russia", true);
            SecondVisiteSelect = true;
            localStorage.setItem("ViewCheckPageStart", true);
          } else if (pathNamePage === arrayListPathName[4]) {
            localStorage.setItem("EU", true);
            SecondVisiteSelect = true;
            localStorage.setItem("ViewCheckPageStart", true);
          } else if (pathNamePage === arrayListPathName[5]) {
            localStorage.setItem("Maori", true);
            SecondVisiteSelect = true;
            localStorage.setItem("ViewCheckPageStart", true);
          }
      }



    
    return (
        <section className="sect sect__artiste sect__artiste--rotate  hori"  >
            <div className="hori__rowContainer hori__rowContainer--artiste hori__rowContainer--motif  hori__rowContainer--white" style={columStyle} id='rowMotf' ref={boxRef}>
                <div className="hori__box hori__box--motif" id='Motif01' >
                    <PresentationMotif Img01={Img01} Img02={Img012} title1={title01} txt1={txt01} style2={{ width: '50%', objectFit: 'contain' }} nameIllu={nameIllu1} OneImg={OneImg1} StyleIlluBox={styleBoxIllu1}/>

                </div>
                <div className="hori__box hori__box--motif hori__box--black" id='Motif02'>
                    <PresentationMotif Img01={Img02} Img02={Img021} title1={title02} txt1={txt02} style2={{color:"#FDF2DE", width:"60ch"}} nameIllu={nameIllu2}  StyleIlluBox={styleBoxIllu2}/>

                </div>
                <div className="hori__box hori__box--motif " id='Motif03'>
                    <PresentationMotif Img01={Img03} Img02={Img032} title1={title03} txt1={txt03} nameIllu={nameIllu3}  StyleIlluBox={styleBoxIllu3} />

                </div>
                <div className="hori__box hori__box--changeMap hori__box--black sect__nameBigBox--fondImg " id='Motif04'>
                    <Link to='/#mapWorld' onClick={changeDataLand()} >
                        <h2 className='sect__title  sect__title--italic sect__title--white sect__title--link' onClick={animateChangePage}>
                            Part voir d'autre motif.
                        </h2>
                    </Link>

                </div>
            </div>

        </section>
    )
}

export default SectionMotifHori