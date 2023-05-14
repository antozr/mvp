import React, { useState } from 'react'
import { createPortal } from "react-dom"
import './BoxImageAnim.scss';
import { AnimatePresence, motion } from "framer-motion";
//import { openImg } from '../logic/_openImg';
import ImgOpenbig from './ImgOpenbig';
//import img
//import PinUpImg from '../assets/img/oldSchool/pinup1.jpg';

function BoxImageAnim({ positionTB, urlImg, className, nameImg }) {

    const [showImg, setShowImg] = useState(false);
    const [urlImgBox, seturlImgBox] = useState("#");

    function openImgBox(e) {

        let srcImg = e.target.src;
        seturlImgBox(srcImg);
        setShowImg(true);
    }
    function closeImgBox(e){
        let boxImgFull = document.querySelector('.sect__imgOpenBig');
        boxImgFull.classList.add("sect__imgOpenBig--anim")
        setTimeout(() => { setShowImg(false) }, 600)
    }
    return (
        <>

            <div className="sect__divImgAnim " style={positionTB}>
                <div className={className}>
                    <img src={urlImg} alt="Illustration d'un tatouage" className="imgBoxDiv imgBoxDiv__imgFond" title={nameImg} onClick={openImgBox} />
                </div>
            </div>

            {showImg && createPortal(
                // <motion.div
                //     initial={{ y: '100vh' }}
                //     animate={{ y: '0' }}
                //     exit={{ y: '100vh' }}
                //     className="sect__imgOpenBig " onClick={closeImgBox}>
                //     <button className="imgOpenBig__btn" onClick={ closeImgBox}><span className="imgOpenBig__barre"></span><span className="imgOpenBig__barre"></span></button>
                //     <img src={urlImgBox} alt="Une illustration d'un motif de tatouage traditionelle. " className="imgOpenBig__img" />
                // </motion.div>
                <ImgOpenbig closeModal={closeImgBox} urlImgBig={urlImgBox} />
                ,
                document.body
            )}




        </>
    )
}

export default BoxImageAnim