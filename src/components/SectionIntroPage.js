import React from 'react'
import BoxeTitreDecor from './BoxeTitreDecor'


function SectionIntroPage({Img01, Img02, BTD1, BTD2, title, txt}) {
  return (
    <section className="homepage__sect1--bgImg sect--snapChild ">
        <div className="sect__titre">
        
          <BoxeTitreDecor decor={"&"} titleP1={BTD1} titleP2={BTD2} sizeDecor={window.innerWidth <= 900 ? { fontSize: '160px' , width: 'auto'} : { fontSize: '200px' }} positionBox={window.innerWidth <= 900 ? { margin: '-13px 0 44px -20vw' } : { margin: '360px 0 0 25vw' }} />
          <img src={Img01} alt="Voici une représentation d'un sacré coeur dans le style tradi américain." className="sect__imgDecor sect__imgDecor--marginLeftMin" />
        </div>
        <div className="sect__boxIntro sect--row sect__boxIntro--minHeigt">
          <img src={Img02} alt="Voici une représentation d'un sacré coeur dans le style tradi américain." className="sect__imgDecor sect__imgDecor--min  sect__imgDecor--spaceLeft" />
          <h2 className="sect__title sect__title--thin  sect__title--2 sect__title--italic">
            {title}
          </h2>
          <p className="sect__txt sect__txt--smallLength sect__txt--margeRight sect__txt--margeTop">
            {txt}
          </p>
        </div>
      </section>
  )
}

export default SectionIntroPage