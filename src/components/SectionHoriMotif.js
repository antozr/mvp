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

function SectionMotifHori({ Img01, Img012, Img02, Img021, Img03, Img032, title01, title02, title03, txt01, txt02, txt03, nameIllu }) {



    function HelloMybox() {
        console.log(window.screenY);
        console.log('heu je suis con');
        alert('JOOJO')

    };
    ///anim

    const boxRef = useRef();

    useEffect(() => {

        let tlScroll = gsap.timeline({
            duration: 0.2,
            scrollTrigger: {
                trigger: "#rowMotf",
                markers: true,
                start: "200px",
                end: "+=600",
                toggleActions: 'play none reverse none',
                //scrub: true,
            }
        });
        let tlScroll2 = gsap.timeline({
            duration: 2,
            scrollTrigger: {
                trigger: "#Motif01",
                markers: true,
                start: "200px",
                end: "+=600",
                toggleActions: 'play none reverse none',
                //scrub: true,
            }
        });
        let tlScroll3 = gsap.timeline({
            duration: 3,
            scrollTrigger: {
                trigger: "#Motif03",
                markers: true,
                start: " +=200",
                end: "+=600",
                toggleActions: 'play none reverse none',
                //scrub: true,
            }
        });




        // gsap.set("#Motif01", {
        //     position: 'relative',
           
        // })

        // tlScroll.from("#Motif01", {
        //     position: "relative"
        // })

        // tlScroll.to("#Motif01", {
        //     x: '0vw',
        //     opacity: 1,
        //     top: 0,
        //     left: 0,
        //     zIndex: 9,
        // })
        //     .from("window", {
        //         overflowY: "hidden"
        //     })


        // tlScroll2.to("#Motif01", {
        //     x: "-90vw",
        //     opacity: 0,
        //     position: "absolute",

        // })
        // tlScroll2.from("#Motif02", {
        //     position: "relative"
        // }, '<')
        // tlScroll2.to('#Motif02', {
        //     left: 0,
        //     position: "fixed",
        //     opacity: 1,
        //     zIndex: 10,
        //     top: 0,

        // }, '<-0.6')
        // tlScroll3.to('#motif02', {
        //     x: "-100vw",
        //     opacity: 0,
        //     position: 'absolute',
        // })



    }, []);
    return (
        <section className="sect sect__motif sect__motif--GsapScroll hori" ref={boxRef} id='rowMotf' >
            <div className="hori__rowContainer  hori__rowContainer--white"  >
                <div className="hori__box " id='Motif01' >
                    <PresentationMotif Img01={Img01} Img02={Img012} title1={title01} txt1={txt01} style2={{ width: '50%', objectFit: 'contain' }} nameIllu={nameIllu} />

                </div>
                <div className="hori__box hori__box--absBox" id='Motif02'>
                    <PresentationMotif Img01={Img02} Img02={Img021} title1={title02} txt1={txt02} />

                </div>
                <div className="hori__box  hori__box--absBox" id='Motif03'>
                    <PresentationMotif Img01={Img03} Img02={Img032} title1={title03} txt1={txt03} />

                </div>
                <div className="hori__box hori__box--black sect__nameBigBox--fondImg hori__box--absBox" id='Motif04'>
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