import React from "react";
import { Link } from "react-router-dom";
import BoutonNormal from "../components/BoutonComp";
import InterSectionBox from "../components/InterSectionBox";
import backInterOld from "../assets/img/svg/oldSchool/paternOldSchool.svg";
import Footer from "../components/Footer";
import SectionIntroPage from "../components/SectionIntroPage";
import SectHoriFull from "../components/SectHoriFull";
import ContentBoxHori from "../components/ContentBoxHori";
import SectionMotifHori from "../components/SectionHoriMotif";


//// les images
import HomeNordiq from '../assets/img/nordic/vikingHome.jpg';
import BackImgNordic from '../assets/img/nordic/interNordicnoir.jpg'
import vegvisir1 from '../assets/img/nordic/vegvisir.jpg'
import vegvisir2 from '../assets/img/nordic/vegvisir2.jpg'
import wirm1 from  '../assets/img/nordic/wyrd.jpg';
import ygdrasil1 from '../assets/img/nordic/ygdrazil1.jpg';
import ygdrasil2 from '../assets/img/nordic/ygdrazil2.jpg';

import momie1 from '../assets/img/nordic/momie1.jpg'
import momie2 from '../assets/img/nordic/momie2.jpg'
import amad1 from '../assets/img/nordic/amad1.jpg';
import amad2 from '../assets/img/nordic/amad2.jpg';
import drakar from  '../assets/img/nordic/drakar.jpg';
import history1 from  '../assets/img/nordic/histpry1.jpg';
import history2 from  '../assets/img/nordic/history2.jpg';

function NordicPage() {


    let allTitle = [
        <>Voyage dans les plaines&nbsp;nordiques</>,
        <>Les origines</>,
        <>L’explorateur et historien Ahmad Ibn Fadlan </>,
        <>Les poèmes nordiques</>,
        <>La momie de sibérie</>,
        <>La toile de Wyrd </>,
        <>Yggdrasil</>,
        <>Vegvisir</>
    ];
    let allTxt = [
        <>On retrouve des traces éparses d’hommes couvertes de peinture avec une peau pigmentée bleue pour les peuplades celtes et des hypothèses pour les vikings sur leurs pratiques. Mais ces styles ont su renaître par des artisans représentant les forces de la nature et des dieux sur nous, pauvres mortels. </>,
        <>Il y a une controverse sur si oui ou non les vikings <i>( et les gens des pays du Nord)</i> possédaient des tatouages vu le peu de preuve historique qui nous est parvenue. Avec un faible aperçu, encore de nos jours, des motifs tatoués à l’époque . </>,
        <>Selon ses récits, il donne le fait que les vikings étaient tatoués, avec le corps recouvert de motifs de couleur verdâtre de motifs d’arbre entrelacés. Mais ces récits sont mis en doute par le fait que le mot en arabe qu’il utilise est le même  qui est utilisé pour désigner les peintures murales. De ce point de vue, on pourrait se dire que faute de mot pour désigner, il a utilisé un mot générique pour donner une explication sur le corps de ces hommes . </>,
        <><br/><br/> <span className="sect__txt--thin"> De ce fait, on a une vision de ces personnes mais … </span> </>,
        <>Mais le problème, c'est qu’aucune mention de ces tatouages ne sont faits mention dans les récits du nord, or que ces derniers sont très détaillés sur la façon dont étaient les personnes vivant dans le nord.</>,
        <><br/><br/> <span className="sect__txt--thin sect__txt--italic">Comme avec des descriptions de leur façon de s’habiller, leurs coiffures, couleurs de cheveux … Cela ne veut pas dire que ces tatouages n’existaient pas, mais leurs origines restent inconnues.</span></>,
        <>On a retrouvé une momie dans les glaces de Sibérie recouverte de tatouages, mais quel est le lien ? Ce peuple faisant du commerce avec les pays du nord, on peut supposer que ces derniers aiment aussi partager leurs traditions pour le tatouage. Comme on retrouve des traces chez les peuples celtes, saxe, germain. </>,
        <> <br/><br/> <span className="sect__txt--thin">Des peuples que les nordiques ont rencontrés pour diverses raisons, et donc ces derniers importaient et s'approprient des éléments d’autres cultures, on peut se dire que certains membres des tribues nordiques étaient tatoués.        </span></>,
        <>est une composition de 9 lignes, qui regrouperait toutes les runes . Signifiant le tout les possibilités du passé, du futur et du présent, montrant l'interconnexion entre nos actions passées répercutant notre présent et qui modifiera notre futur.        </>,
        <>Plus connu sous ‘ l’arbre de la vie’, il représente l’arbre qui porte l’univers dans ses branches, en connectant notre monde à tous les autres mondes. Il permet de donner un point de vue plus spirituel sur notre vision de l’univers et de l’au-delà.</>,
        <>le compas runique, il sert à montrer d'où l’on vient et où on va, pouvant aussi servir d'amulette de protection, afin de retrouver son chemin.</>,
   
    ];

  return (
    <>
      <div className="page">
        <SectionIntroPage
          BTD1={"Peuple nordique"}
          BTD2={"voyage"}
          title={allTitle[0]}
          txt={allTxt[0]}
        />
        <InterSectionBox
          WhitThext={true}
          textTitle={<>Dans&nbsp;le froid&nbsp;nordique</>}
          backImg={{ backgroundImage: `url(${BackImgNordic})` }}
        />

        <div className="sect__historyland">
          <div className="hori__grid hori__box--black">
            <ContentBoxHori title01={allTitle[1]} text01={allTxt[1]} animImg={true} historicBox={true} linkImg01={HomeNordiq} linkImg02={drakar} colorTxt={{ color: '#FDF2DE' }}/>
          </div>
          <div className="hori__grid hori__box--black">
            <ContentBoxHori title01={allTitle[2]} text01={allTxt[2]} text02={allTxt[3]} animImg={true} historicBox={true} linkImg01={amad1} linkImg02={amad2} colorTxt={{ color: '#FDF2DE' }}/>
          </div>
          <div className="hori__grid hori__box--black">
            <ContentBoxHori title01={allTitle[3]} text01={allTxt[4]} text02={allTxt[5]} animImg={true} historicBox={true} linkImg01={history2} linkImg02={history1} colorTxt={{ color: '#FDF2DE' }}/>
          </div>
          <div className="hori__grid hori__box--black">
            <ContentBoxHori title01={allTitle[4]} text01={allTxt[6]} text02={allTxt[7]}  animImg={true} historicBox={true} linkImg01={momie1} linkImg02={momie2} colorTxt={{ color: '#FDF2DE' }}/>
          </div>
        </div>

        <InterSectionBox
          WhitThext={true}
          textTitle={<>De&nbsp;l'ancien, maintenant</>}
        />
        <div className="sect--heigth100">
          <SectHoriFull />
        </div>
        <InterSectionBox
          WhitThext={true}
          textTitle={<>De&nbsp;la pierre a&nbsp;l'homme</>}
          backImg={{ backgroundImage: `url(${HomeNordiq})` }}
        />
        <div className="sect--heigth100">
          <SectionMotifHori 
          title01={allTitle[5]} txt01={allTxt[8]} Img01={wirm1} Img012={wirm1} nameIllu1={allTitle[5]}  styleBoxIllu1={{margin : '0px'}}  OneImg1={true}
          title02={allTitle[7]} txt02={allTxt[10]} Img02={vegvisir1} Img021={vegvisir2} nameIllu2={allTitle[7]}
          title03={allTitle[6]} txt03={allTxt[9]} Img03={ygdrasil1} Img032={ygdrasil2} nameIllu3={allTitle[6]}
          />
        </div>
      </div>
    </>
  );
}

export default NordicPage;
