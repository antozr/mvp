import React, { useEffect } from 'react'
import TextColDroite from './TextColDroite';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';
import { motion } from 'framer-motion'

// import hirondelle from '../assets/img/svg/hirondelle_1.svg';


gsap.registerPlugin(ScrollTrigger, Timeline);

function ContentBoxHori({ linkImg01, title01, title02, text01, text02, text03, colorTxt, linkImg02, animImg, historicBox, fullImg }) {

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



    function changeImg(e) {
        setTimeout(() => {
            e.target.src = linkImg02;
        }, 1500);
        e.target.classList.add("hori__img--change")

    }

    function changeImgRemove(e) {
        e.target.classList.remove("hori__img--change");

    }
    function returnImgSrc(e) {
        e.target.src = linkImg01;
    }

    return (
        <>
            {historicBox === true ?
                <>


                    <img src={linkImg01} alt="Sailor Jerry" className="hori__img hori__img--grid i1" loading='lazy' />

                    <h2 className="sect__title sect__title--2 h1 hori__grid--title">
                        {title01}
                    </h2>
                    <div className="hori__colMedium  b1">
                        <img src={linkImg02} alt="Une représentation d'un moment historique dans le monde du tatouage." className="hori__img hori__img--small" />
                        <p className="sect__txt">
                            {text01}
                        </p>
                    </div>
                </> : <>
                    {fullImg === true ?
                        <>
                            <div className="hori__colGaucheImg hori__colGaucheImg--full">
                                {/* <img src={hirondelle} alt="" className="hori__hirondelle" id='imgBoxHori' /> */}
                               <img src={linkImg01} alt="Sailor Jerry" className="hori__img hori__img--full" loading='lazy'  /> 
                                {/* <img src={linkImg01} alt="Sailor Jerry" className="hori__img" loading='lazy'   onMouseOver={changeImg} onMouseOut={returnImgSrc} onAnimationEnd={changeImgRemove}/> */}
                            </div>
                            {/* <motion.div className="hori__colDroite hori__colDroite--full " style={colorTxt} initial={{ opacity: 0 ,x:'50%', color:"#FDF2DE"}} */}
                            <motion.div className="hori__colDroite hori__colDroite--full " style={colorTxt} initial={{ opacity: 0 ,x:'50%', color:"#FDF2DE"}}
                                whileInView=
                                    
                                    {window.innerWidth > 900? {opacity: 1,x:'65%', color: "#000"}:{ opacity: 1,x:'5%', color: "#000"}}
                                >
                                <TextColDroite title1={title01} title2={title02} txt1={text01} txt2={text02} txt3={text03} />

                            </motion.div>

                        </> : <>
                            <div className="hori__colGaucheImg ">
                                {animImg === true ? <img src={linkImg01} alt="Sailor Jerry" className="hori__img " loading='lazy' onMouseOver={changeImg} /> : <img src={linkImg01} alt="Sailor Jerry" className="hori__img" loading='lazy' />}
                            </div>
                            <div className="hori__colDroite  " style={colorTxt} >
                                <TextColDroite title1={title01} title2={title02} txt1={text01} txt2={text02} txt3={text03} />

                            </div>

                        </>}

                </>}
        </>
    )
}

export default ContentBoxHori