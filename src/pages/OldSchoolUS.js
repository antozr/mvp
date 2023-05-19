import React, { useState } from 'react'
import BoxeTitreDecor from '../components/BoxeTitreDecor'
import HeartSVG from '../assets/img/svg/coeur001.svg';
import TextColDroite from '../components/TextColDroite';
import AnimColGauche from '../components/AnimColGauche';
//import ContentBoxHori from '../components/ContentBoxHori';
//import PresentationMotif from '../components/PresentationMotif';
import SectionMotifHori from '../components/SectionHoriMotif';

//img
// import SailorJerry01 from '../assets/img/oldSchool/sailorJerry.jpg';
import SailorJerry02 from '../assets/img/oldSchool/sailor02.jpg';
import DonEdHardy01 from '../assets/img/oldSchool/donEdHardy01.jpg';
import Hirondelle from '../assets/img/svg/hirondelle_2.svg';
import HirondelleSJ from '../assets/img/oldSchool/hirondelletat.jpg';
import PinUp01 from '../assets/img/oldSchool/pinup1.jpg';
import Pinup2 from '../assets/img/oldSchool/pinup2.jpg'
import Navire from '../assets/img/oldSchool/marinBat.jpg';
import AncreSvg from '../assets/img/svg/oldSchool/ancre.svg';
import SectHoriFull from '../components/SectHoriFull';
import SectionIntroPage from '../components/SectionIntroPage';
import InterSectionBox from '../components/InterSectionBox';
import DarkSkin from '../assets/img/oldSchool/fondPeauNoir.jpg';
import PaternUS from '../assets/img/svg/oldSchool/paternOldSchool.svg';

function OldSchoolUS() {

  let texteTitleCol = ["Un style qui", " se démarque", "Les artistes", "Les hirondelles", " Les Pin-up", "Les ancres & navires", "Sailor Jerry", " Don Ed Hardy"];
  let texteCol = [<>Le style se compose de contours noirs épais avec des couleurs limitées avec les couleurs primaires  <span className="sect__txt--thin sect__txt--italic">( Jaune - Rouge - Bleu - Vert )</span> avec peut d’ombrage mais bien marqué. Avec une iconographie venue en partie de l’univers de la marine, on retrouve les motifs sous forme de FLASH. <br /> <br /></>,
  <>On peut situer ces premières apparitions en tant que point d’influence dès le début du 20 siècles & principalement aux US,<span className="sect__txt--thin sect__txt--italic"> comme à Honolulu, San Francisco, New-York ,mais aussi à Bristol.</span> <br /> <br /> <br /></>,
  <><span  >On peut noter que certains artistes ont permis de faire naître cet effort ainsi que montrer cet art au grand public, pour ce faire on retrouve < b > Sailor Jerry </b> qui va faire évoluer le style en y intégrant des iconographies japonaises en plus d’un retravaille des anciennes iconographies. On lui doit aussi une amélioration des techniques de tatouage notamment avec l’intégration de celle-ci pour en améliorer. Avec son apprenti,<b> Don Ed Hardy</b>, qui va populariser le style au grand public dans les années 70-80, tout en y intégrant une plus grande iconographie japonaise. On peut retrouver certaines collaborations avec des marques de textile & une marque de rhum pour Sailor Jerry.</span></>,
  <>On retrouve comme artistes qui ont fait la renommée et ont propagé ce style, on retrouve donc Sailor Jerry, Don Ed Hardy,  et bien d'autres. On peut leur donner comme point d’orgue qu’ils ont su apporter une nouvelle vague de design dans un univers qui était déjà riche, mais aussi leur ouverture à une autre caste de personnes en dehors des marins / motards et autres personnes, ils ont su faire croître leur popularité jusqu'à maintenant en maintenant l'authenticité des motifs et de l’esprit de liberté que beaucoup font ressortir. </>,
  <><br /><br /><span className="sect__txt--thin sect__txt--italic">Si aujourd’hui bien des styles existent, un bon nombre de personnes apprécient encore leur travail et se le font encrer.  </span> </>,
  <><span className='sect__txt--thin sect__txt--italic sect__txt--smallLength'>"A tattoo is an affirmation: that this body is yours to have and to enjoy while you're here.<br /><br /> Nobody else can control what you do with it."</span></>,
  <>Une présence essentielle dans l’iconographie & tradition de la marine, on se la fait tatouer sur une aux <span className='sect__txt--italic sect__txt--bold'> 5000 milles marins</span> et une seconde aux <span className='sect__txt--italic sect__txt--bold'> 10.000 milles marins</span>.Elles représentent les voyages et les expériences de ces derniers dans leur aventure sur les mers. Partant sur de longues traversées, mais revenant toujours à leur point de départ, ces oiseaux représentent le retour chez soi malgré les problèmes et la distance. </>,
  <>On retrouve bon nombre de flashs avec des femmes, sous forme de sirènes, pin-up, elles ont pris un fort élan depuis la seconde guerre mondiale où bon nombre de ces dernières étaient peintes sur la carlingue des appareils et certains blousons des membres d’équipage. Pour représenter le but de leur combat et de porte bonheur, elles sont devenues des emblèmes de ceux partis loin de chez eux et de leur amour.  </>,
  <>Elle a une connotation forte à la marine, car étant une partie du bâtiment, elle sert à marquer son point d'ancrage quelque part, un point de stabilité et de repos. Servant à amarrer un navire dans les flot, elle montrera son attachement à une personne, à un lieu, jusqu’au prochain départ. Ainsi le Navire permet de donner une vision de la liberté, un goût de l’aventure.</>,


  ];
  
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth)
  React.useEffect(() => {

    if (window.location.pathname ==='/oldschool'){
      document.querySelector('body').classList.add('App--hidden')
    }else{
      document.querySelector('body').classList.remove('App--hidden')
    }


    function windowResize() {
      console.log('resize to : ' + window.innerHeight + 'X' + window.innerWidth);
      console.log(window.innerWidth);
      setSizeWindow(window.innerWidth);

    }
    window.addEventListener('resize', windowResize);

  }, [])



  return (
    <div className="oldschool page sect--snap pageChangeSet">
      <SectionIntroPage BTD1={"L’old school"} BTD2={"Américain"} Img01={HeartSVG} Img02={AncreSvg} title={<>Vogue vers <br/>la découverte</>} txt={<>Une mode vieille comme le navire qui la porte. C’est un style qui est née avec les marins qui voguait d’un port à l’autre, en marquant leur amour du monde sur leur&nbsp;corps.</>} />

      <InterSectionBox WhitThext={false}  backImg={{ backgroundImage: `url(${PaternUS})` }} />

      <div className="sect sect__firstContenut sect--rowReverse sect--snapChild">
        <div className="sect__colGauche">
          <AnimColGauche />


        </div>
        <div className="sect__colDroite ">
          <TextColDroite title1={texteTitleCol[0]} title2={texteTitleCol[1]} txt1={texteCol[0]} txt2={texteCol[1]} txt3={texteCol[2]} />
        </div>
      </div>

      <div className="sect--snapChild sect--heigth100">
        <SectHoriFull BigTitle1={texteTitleCol[2]} BigTitle12={"artists"}  BigTitle2={texteTitleCol[6]} imgArtiste1={SailorJerry02} imgArtiste2={DonEdHardy01}
          textcol1={texteCol[3]} textcol2={texteCol[4]} textcol3={""} textcol4={texteCol[5]} textcol5={""} textcol6={""}
          smallTitle1={texteTitleCol[6]} smallTitle2={""} smallTitle3={"L\'apprenti "} smallTitle4={"du marin"}
        />
      </div>


      
      
      <InterSectionBox WhitThext={true} textTitle={"Les motifs amblematiques"} backImg={{ backgroundImage: `url(${DarkSkin})` }} />
      <div className="sect--heigth100 sect--snapChild">
        <SectionMotifHori Img01={Hirondelle} Img012={HirondelleSJ} nameIllu={"hirondelle"} OneImg1={true} styleBoxIllu1={{margin : '0px'}}
          Img02={PinUp01} Img021={Pinup2} Img03={Navire} Img032={AncreSvg} title01={texteTitleCol[3]} title02={texteTitleCol[4]} title03={texteTitleCol[5]} txt01={texteCol[6]} txt02={texteCol[7]} txt03={texteCol[8]} />

      </div>
    </div>
  )
}

export default OldSchoolUS