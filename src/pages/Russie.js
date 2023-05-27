import React from 'react'
import SectionIntroPage from '../components/SectionIntroPage'
import InterSectionBox from '../components/InterSectionBox'
import ContentBoxHori from '../components/ContentBoxHori'
import SectHoriFull from '../components/SectHoriFull'
import SectionMotifHori from '../components/SectionHoriMotif'

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
import EndArea from "../assets/img/russie/endEre.jpg";
import CastePrisonnier from "../assets/img/russie/Caste.jpg";
import Vierge1 from "../assets/img/russie/vierge1.jpg";
import Vierge2 from "../assets/img/russie/vierge2.jpg";
import Etoile1 from "../assets/img/russie/etoile1.jpg";
import Etoile2 from "../assets/img/russie/etoile2.jpg";
import Epaullette1 from "../assets/img/russie/epaullette1.jpg";
import Epaullette2 from "../assets/img/russie/epaullette2.jpg";
//
import EtoileSvg from '../assets/img/svg/russie/EtoileRusse.svg';
import KremlinSvg from "../assets/img/svg/russie/kremlin.svg";


function RussiePage() {

  let titleArray = ["Le collecteur", "Коллектор", "вор в законе", <>Le signe de la&nbsp;répression</>, <>Leur&nbsp;iconographie</>, "L’hygiène, une autre histoire", "La fin d'une ère", "Les épaulettes", <>L'étoiles&nbsp;à 8&nbsp;branches</>, <>La Vierge&nbsp;à l’enfant</>]
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
    </>,
    <>
      A la chute de l’union soviétique, l’ouverture au monde occidental, la fin de la seconde guerre mondiale et diverses crises inter-prisonniers. Le tatouage de des <b>vor v zakone</b>, devient une marque de la zone, et ne fut plus “encensée” par le reste de la population.
      <br /><br /><span className="sect__txt--thin sect__txt--italic sect__txt--jaune"> Ils ont perdu une partie de leur statut, et de nos jours plus grand monde continue ne perpétue ce style dans cet objectif-là. Même si on continue à se faire tatouer dans les prisons, les styles ont évolué, mais les traces du passé sont et resteront présentes.</span>
    </>,
    <>
      Une iconographie reprenant le style, la forme et un réalisme des épaulettes des uniformes de l’armée rouge. Avec l’ajout de grade, de symbole, elles sont portées sur les deux épaules, comme sur un costume. On en retrouve certaines avec des crânes, elles font référence aux officiers de l'allemagne du 3e reich, dont le porteur approuve l’idéologie ou souhaite provoquer une fois de plus les dirigeants soviétiques.
      <br /><br /><span className="sect__txt--thin">
        Elles représentent le grade des criminelle dans la hiérarchie de la mafia, dont seul les plus haut gradé les portes, normalement. Mais elles représentent aussi la défiance envers la hiérarchie militaire en spoliant l’un de leur emblème et symbole de puissance.
      </span>
    </>,
    <>
      Une étoile semblable à un design de compas, de rose des vents, avec ses 8 branches. Elle est portée par paire sur le torse et / ou sur les genoux. On trouve une autre variante, celle-ci avec un nombre de branches différent qui représente le nombre d’années passées en prison, avec une branche par année.
      <br /><br /><span className="sect__txt--thin sect__txt--italic">
        Son design est simple et “disponible” pour tous les détenus, à condition de respecter certains préceptes. Comme celui qui les porte ne portera jamais l'uniforme ( pour le torse) et je ne s'agenouillera devant personne et surtout pas la justice.
      </span>
    </>,
    <>
      On peut retrouver différentes compositions, mais le principe reste le même, on aura une sainte Vierge tenant un enfant dans ses bras. Les Russes étant catholiques orthodoxes, on retrouve divers motifs religieux avec une signification double.
      <br /><br /><span className="sect__txt--thin">
        La vierge représente la protection maternelle et divine avec la loyauté de son porteur envers Dieu et son groupe. L’enfant a une signification un peu plus sombre, car il représente une vie de crime présente depuis l’enfance et dans certains cas un emprisonnement à un jeune âge.
      </span>
    </>
  ]
  return (
    <div className="sect page sect--snap pageChangeSet">

      <SectionIntroPage BTD1={"Russie"} BTD2={"ГУЛАГ"} Img01={KremlinSvg} Img02={EtoileSvg} title={<>Direction le Goulag.<br /> честь ,боль!</>} txt={<>On se trouve dans le bloc soviétique, en voyageant de goulag à camp de travail dans la Sibérie. On part à la découverte des illustrations faites par les prisonniers sur d'autres par amour, haut-fait ou patriotisme.</>} />


      <InterSectionBox WhitThext={true} textTitle={<>Insalubrite &&nbsp;Beaute</>} />
      {/* {la technique } */}
      <div className="sect--heigth100 sect--snapChild">
        <SectHoriFull BigTitle1={titleArray[0]} BigTitle12={titleArray[1]} imgArtiste1={Danzing1} textcol1={textArray[0]} textcol2={textArray[1]} textcol3={""}
          BigTitle2={titleArray[2]} imgArtiste2={VoleurLoi} textcol4={textArray[2]} textcol5={""} textcol6={""}
        />
      </div>
      <InterSectionBox WhitThext={true} textTitle={<>Au&nbsp;goulag en&nbsp;noir</>} />

      <section className="sect__historyland sect--snapChild">
        <div className="hori__grid hori__box--black">
          <ContentBoxHori linkImg01={PrisonnierTsar} linkImg02={Prisonnier1} title01={titleArray[3]} text01={textArray[3]} animImg={true} historicBox={true} colorTxt={{ color: '#FDF2DE' }} />
        </div>
        <div className="hori__grid hori__box--black">
          <ContentBoxHori linkImg01={Prisonnier3} linkImg02={Prisonnier4} title01={titleArray[4]} text01={textArray[4]} animImg={true} historicBox={true} colorTxt={{ color: '#FDF2DE' }} />
        </div>
        <div className="hori__grid hori__box--black">
          <ContentBoxHori linkImg01={ArtistPrison} linkImg02={CoilPrison} title01={titleArray[5]} text01={textArray[5]} animImg={true} historicBox={true} colorTxt={{ color: '#FDF2DE' }} />
        </div>
        <div className="hori__grid hori__box--black">
          <ContentBoxHori linkImg01={EndArea} linkImg02={CastePrisonnier} title01={titleArray[6]} text01={textArray[6]} animImg={true} historicBox={true} colorTxt={{ color: '#FDF2DE' }} />
        </div>
      </section>
      <InterSectionBox WhitThext={true} textTitle={"Les motifs amblematiques"} />
      <div className="section sect--heigth100 sect--snapChild">
        <SectionMotifHori 
        Img01={Epaullette1} Img012={Epaullette2} title01={titleArray[7]} txt01={textArray[7]} nameIllu1={"Les épaulettes"} OneImg1={true} styleBoxIllu1={{margin : '0px'}}
        Img02={Etoile1} Img021={Etoile2} title02={titleArray[8]} txt02={textArray[8] } nameIllu2={"L'étoile à 8 branches"}
        Img03={Vierge1} Img032={Vierge2}  title03={titleArray[9]} txt03={textArray[9]} nameIllu3={"La vierge à l'enfant"} 
        />
      </div>

    </div>
  )
}

export default RussiePage