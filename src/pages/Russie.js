import React from 'react'
import SectionIntroPage from '../components/SectionIntroPage'
import InterSectionBox from '../components/InterSectionBox'
import ContentBoxHori from '../components/ContentBoxHori'
import SectHoriFull from '../components/SectHoriFull'


//images
import Danzing1 from '../assets/img/russie/danzing.jpg';
import VoleurLoi from '../assets/img/russie/voleurloi.jpg';
import PrisonnierTsar from '../assets/img/russie/prissonierTsar.jpg';
import Prisonnier1 from '../assets/img/russie/prissonier1.jpg';
import Prisonnier2 from '../assets/img/russie/prisonnier3.jpg';
import Prisonnier3 from '../assets/img/russie/prisonnier4.jpg';
import Prisonnier4 from '../assets/img/russie/prisonnier5.jpg';
import ArtistPrison from '../assets/img/russie/prisonnier2.jpg'
import CoilPrison from '../assets/img/russie/coilPrison.jpg';

function RussiePage() {

  let titleArray = ["Le collecteur", "Коллектор", "вор в законе", "Le signe de répression", "Les prisonniers et leur iconographie", "L’hygiène, une autre histoire"]
  let textArray = [
    <>A la chute de l'URSS,  on a pu voir l'iconographie de ce côté-là du monde et surtout grâce à un gardien de prison, < b > Danzig Baldaev</b>  qui a recueilli les dessins sur les prisonniers ainsi que leur signification. Grâce à lui , on sait que le tatouage se faisait peu de temps après le crime et que plus la personne en avait,  plus elle avait fait de prison et plus elle était dangereuse.
    </>,
    <><br /><br />
      <span className="sect__txt--thin sect__txt--italic"> De ce fait, on retrouve environ <b>65 %</b> des prisonniers de prison à sécurité minimale, <b> 80 % </b>des prisonniers à sécurité moyenne et <b>95 %</b> des prisonniers à sécurité élevée tatoués.</span>
    </>,
    <>
      <span className="sect__title sect__title--2">Les voleurs dans la loi</span><br /><br />
      Une organisation criminelle dans la prison , qui s'est vite hiérarchisée tout en créant une iconographie spécifique en mettant en lien leur passé,  leur pouvoir ainsi que leur tourment.
    </>,
    <>
      L’époque Soviétique, de Staline à Gorbatchev : depuis au moins 1861, le prisonnier se faisait marquer /tatouer par la prison dans un but pratique,  afin de savoir leurs crimes  et leur dangerosité. Ainsi les voleurs recevaient un V au fer rouge sur le visage , les déserteurs un SP.<br /> Mais à un moment , dans le début du 20e siècle,  ces derniers ont pris possession de leur supplice pour le transformer en un art, en un moyen de défier le système.
      <br /><br /><span className="sect__txt--thin">En se constituant en groupe rebelle, ils ont pris comme credo de respecter l’ancien système et de préserver ses traditions. Ils se sont couvert le corps de ces motifs, on les appelait les < b >vory v zakone</b> “ les voleurs dans la loi”.</span>
    </>,
    <>
      Leur corps tatoué est une sorte de passeport servant à montrer à ceux qui savent le lire, ce qu'ils ont fait comme crimes , leur orientation sexuelle, leur rang dans "la mafia " de la prison ainsi que leurs idéaux politiques. Chacun était fier de les porter mais gare aux faux et aux menteurs, un traitement spécial leur était réservé.
      <br /><br /><span className="sect__txt--thin sect__txt--italic">Les faux tatouages étaient au mieux enlevés au pire recouvert par des motifs non glorieux et ces personnes devenaient la victime des autres prisonniers. Car on ne ment pas sur son passé pour en avoir un plus glorieux, mais on l’accepte sinon on doit en subir les conséquences.</span>
    </>,
    <>
      Cela se faisait dans les cellules ou autre endroit disposant de l'intimité . Comme dermographe on retrouvait une construction avec des rasoirs électriques,  des brosses à dent custom avec un moteur , des boîtes en métal et 1 à 2 aiguilles.
      <br /><br /><span className="sect__txt--thin sect__txt--italic">
        Même avec les précautions prises les maladies n'étaient pas éloignées,  certains souffraient de fièvre post tatouage,  de la syphilis,  du SIDA,  d'hépatite…
      </span>
    </>
  ]
  return (
    <div className="sect page">

      <SectionIntroPage BTD1={"Russie"} BTD2={"ГУЛАГ"} title={<>Direction le Goulag. честь ,боль!</>} txt={<>On se trouve dans le bloc soviétique, en voyageant de goulag à camp de travail dans la Sibérie. On part à la découverte des illustrations faites par les prisonniers sur d'autres par amour, haut-fait ou patriotisme.</>} />
      
      
      <InterSectionBox WhitThext={true} textTitle={"Insalubrite & Beaute"} />
      {/* {la technique } */}
      <div className="sect--height100">
        <SectHoriFull BigTitle1={titleArray[0]} BigTitle12={titleArray[1]} imgArtiste1={Danzing1} textcol1={textArray[0]} textcol2={textArray[1]} textcol3={""}
          BigTitle2={titleArray[2]} imgArtiste2={VoleurLoi} textcol4={textArray[2]} textcol5={""} textcol6={""}
        />
      </div>
      <InterSectionBox WhitThext={true} textTitle={<>Au&nbsp;goulag en&nbsp;noir</>} />

      <section className="sect__historyland">
        <div className="hori__grid hori__box--black">
          <ContentBoxHori linkImg01={PrisonnierTsar} linkImg02={Prisonnier1} title01={titleArray[3]} text01={textArray[3]} animImg={true} historicBox={true} colorTxt={{ color: '#FDF2DE' }} />
        </div>
        <div className="hori__grid hori__box--black">
          <ContentBoxHori linkImg01={Prisonnier3} linkImg02={Prisonnier4} title01={titleArray[4]} text01={textArray[4]} animImg={true} historicBox={true} colorTxt={{ color: '#FDF2DE' }} />
        </div>
        <div className="hori__grid hori__box--black">
          <ContentBoxHori linkImg01={ArtistPrison} linkImg02={CoilPrison} title01={titleArray[5]} text01={textArray[5]} animImg={true} historicBox={true} colorTxt={{ color: '#FDF2DE' }} />
        </div>
      </section>
      <InterSectionBox WhitThext={true} textTitle={"Les motifs amblematiques"} />

    </div>
  )
}

export default RussiePage