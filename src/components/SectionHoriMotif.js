import React, { useEffect, useRef } from 'react'
import ContentBoxHori from '../components/ContentBoxHori';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
import { Tween } from 'gsap/gsap-core';
import PresentationMotif from './PresentationMotif';
import { Link } from 'react-router-dom';
import { ChangeStateDataVisited } from '../logic/_status-map.js';

//img




gsap.registerPlugin(ScrollTrigger, Timeline, Tween);

function SectionMotifHori({ Img01, Img012, Img02, Img021, Img03, Img032, title01, title02, title03, txt01, txt02, txt03, nameIllu , containerStyle,columStyle, boxStyle, OneImg1, styleBoxIllu1}) {

    const boxRef = useRef();

    
    return (
        <section className="sect sect__artiste sect__artiste--rotate  hori"  >
            <div className="hori__rowContainer hori__rowContainer--artiste hori__rowContainer--motif  hori__rowContainer--white" style={columStyle} id='rowMotf' ref={boxRef}>
                <div className="hori__box hori__box--motif" id='Motif01' >
                    <PresentationMotif Img01={Img01} Img02={Img012} title1={title01} txt1={txt01} style2={{ width: '50%', objectFit: 'contain' }} nameIllu={nameIllu} OneImg={OneImg1} StyleIlluBox={styleBoxIllu1}/>

                </div>
                <div className="hori__box hori__box--motif hori__box--black" id='Motif02'>
                    <PresentationMotif Img01={Img02} Img02={Img021} title1={title02} txt1={txt02} style2={{color:"#FDF2DE"}}/>

                </div>
                <div className="hori__box hori__box--motif " id='Motif03'>
                    <PresentationMotif Img01={Img03} Img02={Img032} title1={title03} txt1={txt03} />

                </div>
                <div className="hori__box hori__box--black sect__nameBigBox--fondImg " id='Motif04'>
                    <Link to='/#mapWorld' onClick={ChangeStateDataVisited()}>
                        <h2 className='sect__title  sect__title--italic sect__title--white sect__title--link'>
                            Part voir d'autre motif.
                        </h2>
                    </Link>

                </div>
            </div>

        </section>
    )
}

export default SectionMotifHori