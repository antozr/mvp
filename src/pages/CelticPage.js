import React from 'react'
import SectionIntroPage from '../components/SectionIntroPage'
import InterSectionBox from '../components/InterSectionBox'
import ContentBoxHori from '../components/ContentBoxHori'
import SectHoriFull from '../components/SectHoriFull'
/// img
import HomeNordiq from '../assets/img/nordic/compressed/vikingHome.webp';
function CelticPage() {

    let allTitle = [
        <>Rencontre en forêt</>,
        <>Les origines</>,
        <>Les récits étrangers</>,
        <>Leur utilisation</>,
        <>La&nbsp;technique</>,
        <>teknikel</>,
        <>L’origine des motifs </>,
        <></>,
        <></>,
        <></>,
        <></>,
    ];
    let allTxt = [
        <>Nous allons voyager dans le temps et dans les plaines verdoyantes des tribus celtes, afin de découvrir la tradition qui les lies aux tatouages ainsi que la symbolique qu’a pris place la nature dans leur art. </>,
        <>On peut dire que ces origines remontent aux débuts de la civilisation celte, même si on ne connaît pas la date précise, avec des traces écrites du 2e siècle. 
        Sur les plus de 200 peuplades, on retrouve le peuple tatoué le plus connu : les pics. 
        <br/><br/><span className="sect__txt--italic sect__txt--thin">Leur nom signifie : ceux qui sont peints. Mais ils ne sont pas seuls, on retrouve aussi des peuples gaulois et germains ou une partie du clan était tatouée,  avec pour but d'effrayer les Romains. </span>
        </>,
        <></>,
        <>Vers la moitié du 2e siècle, Claude Ptolémée va décrire la tribu des pics ( breton) de smirtaée. De plus Isidore de Séville,  les décrit comme un peuple couvert de décoration fait par un artiste avec une aiguille. Qui par ces marques montre la position dans la société de ce dernier. 
        <br/><br/><span className="sect__txt--italic">Chez les Scots(irlandais) , on remarque leur corps peint de différentes figures par une pointe de fer et une encre. Même si on a peu de trace écrite de présence de tatouage dans les récits celtes,  on en retrouve chez les observateurs étrangers. </span></>,
        <>Les tatouages avaient plusieurs significations,  rôle. Premièrement, de définir leur rang social ainsi que leur fonction dans la société. Mais comme aujourd’hui, elle servait à montrer la personnalité de leur porteur. 
        <br/><br/> <span className="sect__txt--thin sect__thin--italic">On a retrouvé différentes sculptures représentant des celtes, mais il est difficile d'affirmer si c'était vraiment des tatouages ou bien des peintures corporelles. Mais ce qui est sûr, c'est que la disparition des peuples celtiques et de la plupart de leur tradition avec l'arrivée du christianisme.</span>
        </>,
        <>Les motifs, le design tire son esprit, dans la mer nature et la beauté qu'elle a créée, a la différence des nordiques, qui se tourne vers la guerre et l'humain. Même si on peut retrouver des similitudes dans la conception des motifs due à leur différend échange. Ce qu'on retrouve chez les deux sont des formes qui s'entrelacent, qui se lie pour donner naissance à tous autre chose en fonction de la région. </>,
        <><br/><br/> <span className="sect__txt--thin sect__txt--italic">On sait que le liquide utilisé comme encre était une poudre aux propriétés médicinales de couleur bleu verte une fois encrée. Et l'artiste utilisait une pointe en fer, pour la réalisation des motifs, mais qu'en est-il d'eux ?</span></>,
        <>On retrouve des motifs sur l’art celtes ainsi que sur des abjects du quotidien, comme sur des poutres, des rochers, de l’orfèvrerie et sur des armes. On peut noter une ressemblance avec l’art des peuples nordiques, mais cela est dû à leurs nombreuses rencontre et échange lors des expéditions de ces derniers. </>,
        <><br/><br/><span className="sect__txt--thin">Les motifs vont être tournés vers la représentation de la nature et des animaux les entourant, due à leur connaissance approfondie dans le sujet. Mais ils ont aussi un rôle plus divin, qui permettraient aux hommes de se rapprocher des dieux, suite au signe que les animaux transmettront et donnant sa protection spirituelle à son détenteur. </span></>,
        <></>,
        <></>,
        <></>,
        <></>,
    ]

  return (
    <>
        <div className="page">
            <SectionIntroPage BTD1={"Peuple celtes"}
            BTD2={"nature"}
            title={allTitle[0]}
            txt={allTxt[0]} />
            <InterSectionBox WhitThext={true}
            textTitle={<>Dans&nbsp;les plaines&nbsp;celtes</>}
            //backImg={{ backgroundImage: `url(${BackImgNordic})`}}
             />
            {/*  */}
            <div className="sect__historyLand">
                <div className="hori__grid hori__box--black">
                    <ContentBoxHori title01={allTitle[1]} text01={allTxt[1]} text02={allTxt[2]} animImg={true} historicBox={true} linkImg01={HomeNordiq} linkImg02={HomeNordiq}  colorTxt={{ color: '#FDF2DE' }}/>
                </div>

                <div className="hori__grid hori__box--black">
                    <ContentBoxHori title01={allTitle[2]} text01={allTxt[3]} animImg={true} historicBox={true} linkImg01={HomeNordiq} linkImg02={HomeNordiq}  colorTxt={{ color: '#FDF2DE' }}/>
                </div>

                <div className="hori__grid hori__box--black">
                    <ContentBoxHori title01={allTitle[3]} text01={allTxt[4]}  animImg={true} historicBox={true} linkImg01={HomeNordiq} linkImg02={HomeNordiq}  colorTxt={{ color: '#FDF2DE' }}/>
                </div>

                {/* <div className="hori__grid hori__box--black">
                    <ContentBoxHori title01={allTitle[0]} text01={allTxt[0]} animImg={true} historicBox={true} linkImg01={} linkImg02={}  colorTxt={{ color: '#FDF2DE' }}/>
                </div> */}
            </div>
        </div>
        <InterSectionBox  />

        {/*  */}
        <div className="sect--heigth100">
            <SectHoriFull  BigTitle1={allTitle[4]} BigTitle12={allTitle[5]} 
          textcol1={allTxt[5]} textcol2={allTxt[6]} imgArtiste1={HomeNordiq} smallTitle1={"Du point fait main"}
          BigTitle2={allTitle[6]}
          textcol4={allTxt[7]} textcol5={allTxt[8]} imgArtiste2={HomeNordiq} fullImgs={true} smallTitle3={"Des motifs "} smallTitle4={"riche de mythologie"}
           />
        </div>
        <InterSectionBox  />
        {/*  */}
    </>
  )
}

export default CelticPage