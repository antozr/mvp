import React from 'react'
import RyuPatte from '../assets/img/japan/ryu01.svg';
import KoiCarpeColor from '../assets/img/japan/carpeColor.svg'
import SectHoriFull from '../components/SectHoriFull';
import SectionMotifHori from '../components/SectionHoriMotif';
import SectionIntroPage from '../components/SectionIntroPage';
import InterSectionBox from '../components/InterSectionBox';
import ContentBoxHori from '../components/ContentBoxHori';
// les images 
import Horyoshi3 from '../assets/img/japan/horiyoshi-III-min.webp';
import HoryoshiSan from '../assets/img/tebori.jpg';
import RestartHorishi1 from '../assets/img/japan/tebori.jpeg';
import Ainu1 from '../assets/img/japan/ainu1.jpg';
import Ainu2 from '../assets/img/japan/ainu2.jpg'
import Meiji1 from '../assets/img/japan/meiji1-min.webp';
import Meiji2 from '../assets/img/japan/meiji2-min.webp';
import BackImgJap from '../assets/img/japan/irezumiBack2-min.webp';
import backImgjap02 from '../assets/img/japan/arrierePlanYakuza.jpg';
import BackImg3 from '../assets/img/japan/horishiFullWork-min.webp';
import Ryu01 from "../assets/img/japan/dragon2.webp";
import Ryu02 from "../assets/img/japan/dragon02.webp";
import Koi01 from "../assets/img/japan/koi1.webp";
import Koi02 from "../assets/img/japan/koi2.webp";
import Jigoku1 from '../assets/img/japan/jigoku1.webp'
import Jigoku2 from '../assets/img/japan/jigoku2.webp'

function JapanPage() {
    if (window.location.pathname === '/japon') {
        document.querySelector('body').classList.add('App--hidden')
    } else {
        document.querySelector('body').classList.remove('App--hidden')
    }

    /// le contenut texte 
    let texteTitleCol = [<>Les&nbsp;artistes</>, "Horishi ", " Horiyoshi III", <>La&nbsp;beauté&nbsp;des&nbsp;femmes</>, <>La&nbsp;répression sous&nbsp;Meiji</>, <>L’ouverture&nbsp;au&nbsp;monde, l’ère&nbsp;des&nbsp;Horishi</>, <>La&nbsp;traditions&nbsp;dans un&nbsp;monde&nbsp;moderne</>, " Le dragon, Ryu", " Le Koi", <>Jigoku dayu, <br/>la courtisane de l'enfer. </>, "Les 108 héros"];
    let texteCol = [<></>,
    <>On peut retrouver des traces de tatouages allant vers la préhistoire jusqu’à l’ère Meiji dans certaines archipels. Où les femmes se faisaient tatouer les mains, bras pour signifier des moments clés dans leur vie, et pour leur apporter une beauté tout autre, avec une célébration pour la personne, une fois que les motifs furent finis. Les motifs changent d’une région à une autre, comme avec les Aïnous, qui mettaient leurs lèvres en valeur par un tatouage autour, le but était de se mettre en valeur, d’être plus belle même si cette coutume a commencé à se dissiper pour être remplacée par d’autres critères de beauté comme avec des parfums et des vêtements. <br /><br /><br /> <span className="sect__txt--thin">Ainsi la beauté se perpétue par des rythmes différents et des coutumes se font absoudre par des lois répressives. </span></>,
    <>Avec l’ouverture sur le monde à partir de 1868, le gouvernement veut construire son pays comme les autres grandes nations industrielles. En recevant les voyageurs et émissaires du monde entier, elle fit interdire ses mœurs pour correspondre à une image d’un pays comme les autres. De ce fait l’irezumi fut interdit, comme le fait de devoir s’habiller pour sortir, mais le fait de devoir se couvrir va donner un nouvel essor pour le tatouage en le rendant invisible aux yeux de tous mais en perpétuant la tradition en la cachant sous un voile. Le fait d’avoir voulu faire disparaître cette coutume va dépeindre cet art de mystère, d’une beauté renouvelée, mais aussi d'une spiritualité nouvelle, par la main de quelque maître artisan tatoueur <span className="sect__txt--boldsect__txt--italic">qu’on nomme Horishi</span>. </>,
    <>L’ombre apportée sur cet art va être mis en lumière par quelque que grand maître par le tatouage de certains grands monarques, comme le tsar Nicolas II lors de leur séjour au pays du soleil levant. Cette activité se faisant dans les ports ou bien dans des demeures, caché aux yeux de tous, pour ne pas subir la répression, de plus en plus de marins virent dans ces ports pour avoir un souvenir dans leur peau. Mais les maîtres artisans devaient rester cachés, dès lors ils vécurent entre deux feux, exerçant un métier “normal” le jour & dans l’ombre entretenait les mythes & légendes de l’irezumi.
        <br /><br /><span className="sect__txt--thin">Certains ont préféré quitter l'île pour rejoindre une autre patrie pour exercer son art aux yeux de tous, et le montrer à qui le veut. Mais les occidentaux avaient une relation différente sur les motifs, voulant de petits motifs avec un exercice en une séances et non un projet qui se ferait sur plusieurs mois. Dès lors, les étendues de leurs talents restent cachées au fond de leur encre.</span><br /><span className="sect__txt--bold">Ainsi, l’ouverture au monde a donné une reconnaissance de ces motifs tout autour de la planète et au grand de ce monde. </span></>,
    <>La renaissance, après le feu et les radiations, lors de l'occupation par les Américains, ils vont lever les interdictions sur les tatouages & donner une nouvelle vie aux artisans qui se feront une renommée dans les ports et autour des bases américaines. Où les motifs les plus faits seront de l’occidental, tradi-américain, mais aussi un peu de traditionnel japonais. <br /><br /><span className="sect__txt--thin sect__txt--italic">On note aussi avec l’ouverture au monde dans les années 80-90, un mélange de savoir entre les maîtres japonais et américains comme entre Maître Horiyoshi III & Sailor Jerry, mais aussi avec Filip Leu qui fut l’apprenti de ce dernier lors de sa jeunesse.
       L’art de l’irezumi se répand encore de nos jours, sous sa forme première, en complétant les corps de ses processeurs en suivant les règles et en perpétuant la tradition & le folklore autour de cet art.
    </span></>,
    <><span className="sect__txt--thin sect__text--italic">“Les clefs pour un magnifique shishei : le dessin, sans bon dessin, tu ne peux pas avoir de bon contour. Sans contour précis, tu ne peux pas avoir d’ombrage. Et seulement après ça, tu peux avoir les couleurs. “ </span>
    </>,
    <><br/><br/> <span className="sect__txt--ecart">Son premier contact avec les tatouages fut dans les années 50-60 dans des onsens, où il aperçut des Yakuzas ayant le corps couvert de motifs et c’est à l’âge de 21 ans qu’il décide de devenir tatoueur. Il rencontre maître Horiyoshi I, il est d'abord son client et à l’âge de 25 ans, il devient son apprenti, où il recevra le titre d’Hori ( maître ) à ses 33 ans. 
    Il forme plusieurs apprentis à son tour comme l’allemand <b>Hori Kitsune</b> sur une période de +/- 15 ans, ainsi que son fils . 
    Il tatoue de manière traditionnelle, au tebori, mais avec la rencontre et correspondance de son ami Don Ed Hardy, il utilisera les dermographes pour faire ses contours.</span> </>,
    <> Il est un symbole de protection, de sagesse, de sérénité ainsi qu’une représentation de l’empereur du Japon. On le retrouve dans différents pays d’Asie, mais selon la tradition plus le dragon s’éloigne plus de la Chine, plus il perd de doigts, c’est pour ça qu’il a 3 doigts au Japon.<br/><br/><span className="sect__txt--thin">Il est composé d’une tête de chameau, de bois de cerf, des yeux de lièvre, oreilles de taureau, crête de phénix, un corps de serpent couvert d’écaille de poisson avec des pattes de tigre aux griffes d’aigles. </span>  </>,
    <>Il symbolise la détermination, des forces, des résistances face à l’adversité. Selon la tradition, ils nagent à contre-courant de la rivière jaune, où seuls les plus forts pourront atteindre la porte du dragon. Et ils pourront se transformer en dragon avec la joie éternelle.<br/><br/><span className="sect__txt--thin">On retrouve différents types de Koi sur les motifs de leur écailles ainsi que sur sa position, la composition et sera souvent liée avec l’élément de l’eau.</span></>,
    <>C'est une professionnelle des divertissements pour adultes, mais un jour, elle va rencontrer un moine qui l'aidera à atteindre l'éveil spirituel. On la représente avec une robe dont le dos est recouvert d'une imagerie des enfers et sur le devant avec une imagerie signifiant la miséricorde avec les fleurs de cerisier ( symbolisant l'éphémérité de la condition humaine et de la beauté).<br/><br/> <span className="sect__txt--thin">Elle symbolise la rédemption et le changement de cap dans la vie .</span>
    </>    ,
    <>Ce sont 108 brigands qui vont se retourner contre le pouvoir en place , qui est corrompu. Ils viennent du <b>Suikoden</b> illustré par <b>Utagawa Kuniyoshi </b> et qui servent depuis pour la réalisation des grosses pièces d'irezumi.<br/><br/> <span className="sect__txt--thin">Il représente le courage , la loyauté et d'autres valeurs en fonction des personnages. </span> </>,
]
    //
    return (
        <div className="japan page sect--snap pageChangeSet">

            <SectionIntroPage BTD1={"日本"} BTD2={"L'irezumi"} Img01={RyuPatte} Img02={KoiCarpeColor} title={<>Transmission<br />par le sumi</>} txt={<>Le tatouage traditionnel japonais ou plus communément appelé : <b>Irezumi</b>. L’art de pratiquer le tatouage en transmettant les rites et légendes de la culture nippone, en couvrant le corps de son porteur.</>} />

            <InterSectionBox WhitThext={true} textTitle={<>Une transmission entre <br /><span className=" sect__title--thin sect__title--big">maitre & eleves</span></>} backImg={{ backgroundImage: `url(${BackImg3})` }} />

            <div className="sect--heigth100 sect--snapChild">
                <SectHoriFull BigTitle1={texteTitleCol[0]} BigTitle12={"芸術家"} BigTitle2={texteTitleCol[1]} imgArtiste1={Horyoshi3} imgArtiste2={HoryoshiSan}
                    textcol1={texteCol[5]} textcol2={texteCol[6]} textcol3={""} textcol4={texteCol[5]} textcol5={""} textcol6={""}
                    smallTitle1={texteTitleCol[2]} smallTitle2={""} smallTitle3={"Des conteurs "} smallTitle4={"d'histoires..."} fullImgs={true}
                />
            </div>

            <InterSectionBox WhitThext={true} textTitle={"L'histoire de l'Irezumi"} backImg={{ backgroundImage: `url(${BackImgJap})` }} />

            <section className="sect__historyLand sect--snapChild">
                <div className=" hori__grid hori__box--black" id='contentSailor'>
                    <ContentBoxHori linkImg01={Ainu1} title01={texteTitleCol[3]} text01={texteCol[1]} colorTxt={{ color: '#FDF2DE' }} linkImg02={Ainu2} animImg={true} historicBox={true}/>
                </div>
                <div className="hori__box hori__box--bigHeight sect--snapChild" id='contentSailor'>
                    <ContentBoxHori linkImg01={Meiji1} title01={texteTitleCol[4]} text01={texteCol[2]} linkImg02={Meiji2} animImg={true} historicBox={false} fullImg={true}/>
                </div>
                <div className=" hori__grid hori__grid--big hori__box--black sect--snapChild" id='contentSailor'>
                    <ContentBoxHori linkImg01={RestartHorishi1} title01={texteTitleCol[5]} text01={texteCol[3]} linkImg02={BackImgJap} animImg={true} historicBox={true} />
                </div>
                <div className=" hori__grid  hori__box--black sect--snapChild" id='contentSailor'>
                    <ContentBoxHori linkImg01={BackImg3} title01={texteTitleCol[6]} text01={texteCol[4]} linkImg02={backImgjap02}  colorTxt={{ color: '#FDF2DE' }} animImg={true} historicBox={true}/>
                </div>

            </section>
            <InterSectionBox WhitThext={true} textTitle={"Les motifs amblematiques"} backImg={{ backgroundImage: `url(${backImgjap02})` }} />


            <div className="sect--heigth100 sect--snapChild" >
                <SectionMotifHori Img01={Ryu01} Img012={Ryu02} title01={texteTitleCol[7]}  txt01={texteCol[7]} nameIllu={"Ryu / Dragon"} OneImg1={true} styleBoxIllu1={{margin : '0px'}}
                    Img02={Koi01} Img021={Koi02} title02={texteTitleCol[8]}  txt02={texteCol[8]} nameIllu2={texteTitleCol[8]} 
                     Img03={Jigoku1} Img032={Jigoku2}  title03={texteTitleCol[9]} txt03={texteCol[9]} nameIllu3={texteTitleCol[9]} />

            </div>

        </div>
    )
}

export default JapanPage