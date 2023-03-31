import React from 'react'
import TextColDroite from './TextColDroite'

function PresentationMotif({ Img01, title1, txt1 ,style2}) {
    return (
        <section className="sect sect__illu">
            <div className="illu__boxImg">
                <img src={Img01} alt="Une illustration " className="illu__img " style={style2}/>
            </div>
            <div className="illu__droite">
                <TextColDroite title1={title1} title2={""} txt1={txt1} txt2={""} txt3={""} />
            </div>

        </section>
    )
}

export default PresentationMotif