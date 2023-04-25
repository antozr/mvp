import React, { useEffect, useRef } from 'react'
import ContentBoxHori from '../components/ContentBoxHori';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
import PresentationMotif from './PresentationMotif';
import { Link } from 'react-router-dom';
import { ChangeStateDataVisited } from '../logic/_status-map.js';

//img




gsap.registerPlugin(ScrollTrigger, Timeline);

function SectionMotifHori({ Img01, Img02, Img03, title01, title02, title03, txt01, txt02, txt03, nameIllu }) {




    ///anim

    const boxRef = useRef();

    useEffect(() => {
        let tl = gsap.timeline({
            duration: 3,
            repeat: -1,
            repeatDelay: 2
            // scrollTrigger: {
            //     trigger: boxRef.current,
            //     markers: false,
            //     start: "top center",
            //     end: "+=400",
            //     scrub: true,
            //     toggleActions: 'play none reverse none',
            // }

        });

        tl.to("#hirondelle", {
            //duration:2,
            translateX: 100,
            translateY: 160,
            translateZ: -10,
            scale: 0.4,
            rotate: -30
        })
            // inter

            .to("#hirondelle", {
                duration: 4,
                translateY: 100,
                translateX: 180,

                rotate: -20
            }, ">")
            .to("#hirondelle", {
                duration: 2,
                translateY: -140,
                translateX: 240,
                //scale: 0.5,
                rotate:-60

            }, ">")

            // critic point
            .to("#hirondelle", {
                //duration:2,
                translateY: -200,
                translateX: 300,
                scale: 0.6,
                rotate: 0
            }, ">")
            //iner
            .to("#hirondelle", {
                duration: 1.8,
                translateY: -240,
                translateX: 380,
                //scale: 0.6,
                rotate: 10
            }, ">+0.6")
            .to("#hirondelle", {
                duration: 1,
                translateY: -280,
                translateX: 400,
                //scale: 0.6,
                rotate: 10
            }, ">")
            .to("#hirondelle", {
                duration: 0.2,
                translateY: -200,
                translateX: 480,
                //scale: 0.6,
                rotate: 10
            }, ">")
            // critic point
            .to("#hirondelle", {
                duration: 1.8,
                translateY: -160,
                translateX: 600,
                scale: 0.3,
                
            }, ">")
            .to("#hirondelle", {
                rotateY: 180,
                //scale: 0.4,
                duration: 0.2
            }, ">")
            // critic point
            .to("#hirondelle", {
                translateX: 300,
                translateY: 100,
                scale: 0.6,
                rotate: 60,

            }, ">")
            .to("#hirondelle", {
                translateX: 200,
                translateY: -200,
                //scale: 0.3,
                rotate: 40,

            }, ">")
            // position final
            .to("#hirondelle", {
                translateX: 0,
                translateY: 0,
                scale: 1,
                rotate: 0,
                duration: 4

            }, ">")
            .to("#hirondelle", {
                rotateY: 0,
                duration: 0.2

            }, ">")

    }, []);
    return (
        <section className="sect sect__motif hori">
            <div className="hori__rowContainer hori__rowContainer--white" ref={boxRef}>
                <div className="hori__box ">
                    <PresentationMotif Img01={Img01} title1={title01} txt1={txt01} style2={{ width: '50%', objectFit: 'contain' }} nameIllu={nameIllu} />

                </div>
                <div className="hori__box " >
                    <PresentationMotif Img01={Img02} title1={title02} txt1={txt02} />

                </div>
                <div className="hori__box  " >
                    <PresentationMotif Img01={Img03} title1={title03} txt1={txt03} />

                </div>
                <div className="hori__box hori__box--black sect__nameBigBox--fondImg">
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