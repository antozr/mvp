import React from 'react';
import './ImgOpenBig.scss';
import { PresenceContext, motion } from "framer-motion";
// import { closeImgBox } from '../logic/_openImg';

function ImgOpenbig({ closeModal, urlImgBig }) {
    return (

        // <div className="sect__imgOpenBig " onClick={closeModal}>
        //     <button className="imgOpenBig__btn" onClick={closeModal}><span className="imgOpenBig__barre"></span><span className="imgOpenBig__barre"></span></button>
        //     <img src="#" alt="" className="imgOpenBig__img" />
        // </div>

        <>
            {/* <motion.div animate={{ y: 100 }} className="sect__imgOpenBig " onClick={closeModal}>
                <button className="imgOpenBig__btn" onClick={closeModal}><span className="imgOpenBig__barre"></span><span className="imgOpenBig__barre"></span></button>
                <img src={urlImgBig} alt="Une illustration d'un motif de tatouage traditionelle. " className="imgOpenBig__img" />
            </motion.div> */}
            <motion.div
                    initial={{ y: '100vh' }}
                    animate={{ y: '0' }}
                    exit={{ y: '100vh' }}
                    className="sect__imgOpenBig " onClick={closeModal}>
                    <button className="imgOpenBig__btn" onClick={ closeModal}><span className="imgOpenBig__barre"></span><span className="imgOpenBig__barre"></span></button>
                    <img src={urlImgBig} alt="Une illustration d'un motif de tatouage traditionelle. " className="imgOpenBig__img" />
                </motion.div>
        </>


    )
}

export default ImgOpenbig