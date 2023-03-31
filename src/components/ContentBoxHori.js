import React, { useEffect } from 'react'
import TextColDroite from './TextColDroite';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';

import hirondelle from '../assets/img/svg/hirondelle_1.svg';


gsap.registerPlugin(ScrollTrigger, Timeline);

function ContentBoxHori({linkImg01,title01, title02, text01,text02, text03, colorTxt}) {

    // useEffect(()=>{
    //     let tl = gsap.timeline({
    //         repeat: -1
    //     })

    //     tl.to('#imgBoxHori',{
    //         duration:3,
    //         x:150,
    //         y:60,

    //     })
    //     .to('#imgBoxHori',{
    //         duration:2,
    //         x:200,
    //         y:100
    //     })
    // }, [])

    return (
        <>
            <div className="hori__colGaucheImg">
                {/* <img src={hirondelle} alt="" className="hori__hirondelle" id='imgBoxHori' /> */}
                <img src={linkImg01} alt="Sailor Jerry" className="hori__img" loading='lazy'/>
            </div>
            <div className="hori__colDroite " style={colorTxt} >
                <TextColDroite title1={title01} title2={title02} txt1={text01} txt2={text02} txt3={text03} />

            </div>
        </>
    )
}

export default ContentBoxHori