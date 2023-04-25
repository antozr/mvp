import React from 'react'
import BoxeTitreDecor from '../components/BoxeTitreDecor';
import HeartSVG from '../assets/img/svg/coeur001.svg';
import RyuPatte from '../assets/img/japan/ryu01.svg';
import KoiCarpeColor from '../assets/img/japan/carpeColor.svg'
import SectHoriFull from '../components/SectHoriFull';

// les images 
import Horyoshi3 from '../assets/img/japan/horiyoshi-III.jpg';
import HoryoshiSan from '../assets/img/tebori.jpg';
function JapanPage() {


    /// le contenut texte 
    let texteTitleCol = ["Un style qui", " se demarque", "Les artistes", "Les hirondelles", " Les Pin-up", "Les ancres & navires", "Horiyoshi ", " Horiyoshi III"];
    let texteCol = [<>Le style se compose de contours noir épais avec des couleurs limitées avec les couleurs primaires  <span className="sect__txt--thin sect__txt--italic">( Jaune - Rouge - Bleu - Vert )</span> avec peux d’ombrage mais bien marqué. Avec une iconographie venue en partie de l’univers de la marine, on retrouve les motifs sous forme de FLASH. <br /> <br /></>,
    <>On peut situer ces premières apparition en tant que point d’influence dés le début du 20e siècles & principalement aux US ,<span className="sect__txt--thin sect__txt--italic"> comme à Honolulu, San Francisco, New-York mais aussi à Bristol.</span> <br /> <br /></>,
    <>On peut noter que certains artistes ont permis de faire naître cet effort ainsi que montrer cet art au grand public, pour se faire on retrouve <b>Sailor Jerry</b> qui vas faire évoluer le style en y intégrant des iconographies japonais en plus qu’un retravaille des anciennes iconographies. On lui doit aussi une amélioration des techniques de tatouages notamment avec l’intégration de celle-ci pour en améliorer. Avec son apprenti,<b> Don Ed Hardy</b>, qui va populariser le style au grand public dans les années 70-80, tout en y intégrant une plus grande iconographie japonaise. On peut retrouver certaines collaborations avec des marques de textiles & une marque de rhum pour Sailor Jerry.</>,
    <>On retrouve comme artistes qui ont fait la renommée et ont propagé ce style, on retrouve donc Sailor Jerry, Don Ed Hardy,  et bien d'autres. On peut leur donner comme point d’orgue qu’ils ont su apporter une nouvelle vague de design dans un univers qui étaient déjà riche mais aussi leur ouverture à une autre caste de personnes en dehors des marins / motards et autre personnes, ils ont sut faire croître leur popularité jusqu'à maintenant en maintenant l'authenticité des motifs et de l’esprit de liberté que beaucoup font ressortir. </>,
    <><br /><br /><span className="sect__txt--thin sect__txt--italic">Si aujourd’hui bien des styles existent, un bon nombre de personnes apprécient encore leur travail et se le font encrer.  </span> </>,
    <><span className='sect__txt--thin sect__txt--italic sect__txt--smallLength'>"Les créatures que je dessine ne prennent vie que sur la peau de quelqu'un. C'est pourquoi je ne montre jamais mes créations comme de l'art. Je dessine simplement pour le plaisir et pour avoir des échantillons à montrer à mes clients afin qu'ils puissent choisir un nouveau design. Les créatures représentées coupent le souffle de la personne une fois qu'elles sont sur sa peau - puis les deux commencent à respirer ensemble, à l'unisson. L'histoire humaine modifie l'apparence des animaux et des plantes que je peins, et lorsque la personne qui les porte meurt, elle aussi."<br /><br /><b> Horiyoshi III, Words to Live By</b></span></>,
    <>Une présence essentielle dans l’iconographie & tradition de la marine, on se la fait tatoué sur une au <span className='sect__txt--italic sect__txt--bold'> 5000 miles marins</span> et une seconde au <span className='sect__txt--italic sect__txt--bold'> 10.000miles marins</span>. Elle représente les voyages et les expériences de ces derniers dans leur aventures sur les mers. Partants sur de longue traversée mais revenant toujours à leur point de départ, ces oiseaux représentent le retour chez soi malgré les problèmes et la distance. </>,
    <>On retrouve bon nombre de flash avec des femmes, sous formes de sirènes, pin-up, elles ont pris un fort élan depuis la seconde guerre mondiale où bon nombre de ces dernières étaient peintes sur la carlingue des appareils et certains blousons des membres d’équipages. Pour représenter le but de leur combat et de porte bonheur, elles sont devenues des emblèmes de ceux partis loin de chez eux et de leur amour.   </>,
    <>Elle a une connotation forte à la marine, car étant une partie du bâtiment, elle sert à marquer son point d'ancrage quelque part, un point de stabilité et de repos. Servant à amarrer un navire dans les flot, elle montrera son attachement à une personne, à un lieu, jusqu’au prochain départ. Ainsi le Navire permet de donner une vision de la liberté, un gout de l’aventure.</>,


    ]
    //
    return (
        <div className="japan pagze">
            <section className="sect homepage__sect1--bgImg">
                <div className="sect__titre">
                    <BoxeTitreDecor decor={"&"} titleP1={"Le Japon 日本"} titleP2={"L'irezumi "} sizeDecor={{ fontSize: '200px' }} positionBox={{ margin: '360px 0 0 25vw' }} />
                    <img src={RyuPatte} alt="Voici une représentation d'un sacré coeur dans le style tradi américain." className="sect__imgDecor sect__imgDecor--marginLeftMin" />
                </div>
                <div className="sect__boxIntro sect--row sect__boxIntro--minHeigt">
                    <img src={KoiCarpeColor} alt="Voici une représentation d'un sacré coeur dans le style tradi américain." className="sect__imgDecor sect__imgDecor--min sect__imgDecor--rotateY sect__imgDecor--spaceLeft" />
                    <h2 className="sect__title sect__title--thin  sect__title--2 sect__title--italic">
                        Transmission<br />
                        par le sumi
                    </h2>
                    <p className="sect__txt sect__txt--smallLength sect__txt--margeRight sect__txt--margeTop">
                        Le tatouage traditionnel japonais ou plus communément appelé : Irezumi. L’art de pratiquer le tatouage en transmettant les rites et légendes de la culture nippone, en couvrant le corps de son porteur.
                    </p>
                </div>
            </section>
            <section className="sect sect--heigth100 sect--japInter">
                <h2 className="sect__title sect_title--2 ">
                    Une transmission entre maître & èlèves
                </h2>

            </section>
            {/* La presentation des artiste  */}
            <SectHoriFull BigTitle1={texteTitleCol[2]} BigTitle2={texteTitleCol[6]} imgArtiste1={Horyoshi3} imgArtiste2={HoryoshiSan}
                textcol1={texteCol[3]} textcol2={texteCol[4]} textcol3={""} textcol4={texteCol[5]} textcol5={""} textcol6={""}
                smallTitle1={texteTitleCol[7]} smallTitle2={""} smallTitle3={"Des conteurs "} smallTitle4={"d'histoires..."}
            />

            <div className="sect__nameBigBox sect__nameBigBox--fondImgJap1" >
                <h2 className="sect__title sect_title--2">
                    Les motifs emblématiques
                </h2>
            </div>

        </div>
    )
}

export default JapanPage