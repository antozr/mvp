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
import HomeNordiq from '../assets/img/nordic/compressed/vikingHome.webp';
import BackImgNordic from '../assets/img/nordic/compressed/interNordicnoir.webp'
import vegvisir1 from '../assets/img/nordic/compressed/vegvisir.webp'
import vegvisir2 from '../assets/img/nordic/compressed/vegvisir2.webp'
import wirm1 from  '../assets/img/nordic/compressed/wyrd.webp';
import ygdrasil1 from '../assets/img/nordic/compressed/ygdrazil1.webp';
import ygdrasil2 from '../assets/img/nordic/compressed/ygdrazil2.webp';

import momie1 from '../assets/img/nordic/compressed/momie1.webp'
import momie2 from '../assets/img/nordic/compressed/momie2.webp'
import amad1 from '../assets/img/nordic/compressed/amad1.webp';
import amad2 from '../assets/img/nordic/compressed/amad2.webp';
import drakar from  '../assets/img/nordic/compressed/drakar.webp';
import history1 from  '../assets/img/nordic/compressed/histpry1.webp';
import history2 from  '../assets/img/nordic/compressed/history2.webp';
import horyMotif from '../assets/img/nordic/compressed/motifHori.webp';
import motifImgHory from '../assets/img/nordic/compressed/motifBighory.webp'

function NordicPage() {


    let allTitle = [
        <>Voyage dans les plaines&nbsp;nordiques</>,
        <>Les origines</>,
        <>L’explorateur et historien Ahmad Ibn Fadlan </>,
        <>Les poèmes nordiques</>,
        <>La momie de sibérie</>,
        <>La toile de Wyrd </>,
        <>Yggdrasil</>,
        <>Vegvisir</>,
        <>La&nbsp;technique</>,
        // <>teknikken</>,
        <>ᛚᚨ ᛏᛖᚲᚾᛁᚲᛖ</>,
        <>Des motifs</>,
        <> </>,
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
        <> Il est une composition de 9 lignes, qui regrouperait toutes les runes . Signifiant le tout les possibilités du passé, du futur et du présent, montrant l'interconnexion entre nos actions passées répercutant notre présent et qui modifiera notre futur.        </>,
        <>Plus connu sous ‘ l’arbre de la vie’, il représente l’arbre qui porte l’univers dans ses branches, en connectant notre monde à tous les autres mondes. Il permet de donner un point de vue plus spirituel sur notre vision de l’univers et de l’au-delà.</>,
        <>Le compas runique, il sert à montrer d'où l’on vient et où on va, pouvant aussi servir d'amulette de protection, afin de retrouver son chemin.</>,//
        <>On peut supposer que la technique utilisée est un style de handpoke ( du point à la main), où l’artiste prenait un manche ( en bois) avec une aiguille et venait encrer le motif sur la peau avec une encre noire à base de charbon.</>,
        <><br/><br/><span className="sect__txt--thin sect__txt--italic">De nos jours, les artistes qui exercent ce style,  on explore les récits, les techniques, pour se rapprocher de comment c'était fait avant. Pour ce faire, comme leurs prédécesseurs, ils utilisent du handpoke & de l’encre noire pour réaliser les motifs inspirés de l’art nordique.</span> </>,
        <>On retrouve les motifs qui tiennent une part importante dans la mythologie et leurs arts, représentés sur les armes, maisons, manuscrits, sculptures… Ces peuples avaient un ‘amour’ pour leur représentation.</>,
        <><br/><br/> <span className="sect__txt--thin">Le style se veut plus agressif et montre une symbolique guerrière de son porteur qu’un côté doux / calme. On retrouve des entrelacs, des boucles, nœuds, … qui sert à représenter une armure pour protéger son hôte.</span> </>,
   
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
          <SectHoriFull BigTitle1={allTitle[8]} BigTitle12={allTitle[9]} 
          textcol1={allTxt[11]} textcol2={allTxt[12]} imgArtiste1={horyMotif} smallTitle1={"Du point fait main"}
          BigTitle2={allTitle[10]}
          textcol4={allTxt[13]} textcol5={allTxt[14]} imgArtiste2={motifImgHory} fullImgs={true} smallTitle3={"Des motifs "} smallTitle4={"riche de mythologie"}
           />
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
