import React, { useEffect, useRef } from 'react'
import ContentBoxHori from '../components/ContentBoxHori';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
import PresentationMotif from './PresentationMotif';
import { Link } from 'react-router-dom';


//img




gsap.registerPlugin(ScrollTrigger, Timeline);

function SectionMotifHori({ Img01, Img02, Img03, title01, title02, title03, txt01, txt02, txt03 }) {




    ///anim

    const boxRef = useRef();

    useEffect(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: boxRef.current,
                markers: false,
                start: "top center",
                end: "+=400",
                scrub: true,
                toggleActions: 'play none reverse none',
            }
        });

    }, []);
    return (
        <section className="sect sect__motif hori">
            <div className="hori__rowContainer hori__rowContainer--white" ref={boxRef}>
                <div className="hori__box ">
                    <PresentationMotif Img01={Img01} title1={title01} txt1={txt01} style2={{ width: '50%', objectFit: 'contain' }} />

                </div>
                <div className="hori__box " >
                    <PresentationMotif Img01={Img02} title1={title02} txt1={txt02} />

                </div>
                <div className="hori__box  " >
                    <PresentationMotif Img01={Img03} title1={title03} txt1={txt03} />

                </div>
                <div className="hori__box hori__box--black ">
                    <Link to='/'>
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