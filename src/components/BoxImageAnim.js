import React from 'react'
import './BoxImageAnim.scss';
import { openImg } from '../logic/_openImg';
//import img
//import PinUpImg from '../assets/img/oldSchool/pinup1.jpg';

function BoxImageAnim({positionTB, urlImg, className, nameImg}) {
    return (
        <div className="sect__divImgAnim " style={positionTB}>
            <div className={className}>
                <img src={urlImg} alt="Illustration d'un tatouage" className="imgBoxDiv imgBoxDiv__imgFond" title={nameImg} onClick={openImg}/>
            </div>
        </div>
    )
}

export default BoxImageAnim