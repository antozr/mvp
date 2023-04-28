import React from 'react'
import './BoxImageAnim.scss';

//import img
//import PinUpImg from '../assets/img/oldSchool/pinup1.jpg';

function BoxImageAnim({positionTB, urlImg, className}) {
    return (
        <div className="sect__divImgAnim " style={positionTB}>
            <div className={className}>
                <img src={urlImg} alt="Illustration d'un tatouage" className="imgBoxDiv__imgFond" />
            </div>
        </div>
    )
}

export default BoxImageAnim