import React from 'react';
import './ImgOpenBig.scss';
import { closeImgBox } from '../logic/_openImg';

function ImgOpenbig() {
    return (

        <div className="sect__imgOpenBig sect__imgOpenBig--close">
            <button className="imgOpenBig__btn" onClick={closeImgBox}><span className="imgOpenBig__barre"></span><span className="imgOpenBig__barre"></span></button>
            <img src="#" alt="" className="imgOpenBig__img" />
        </div>

    )
}

export default ImgOpenbig