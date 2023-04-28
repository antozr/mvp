import React from 'react'
import TextColDroite from './TextColDroite'
import BoxImageAnim from './BoxImageAnim'

function PresentationMotif({ Img01, Img02, title1, txt1 ,style2, nameIllu}) {
    return (
        <section className="sect sect__illu">
            <BoxImageAnim positionTB={{top: '-8vh'}} urlImg={Img01} className={"imgBoxDiv imgBoxDiv--toTop"} />
            <BoxImageAnim  positionTB={{ margin : '0 25px', bottom: '-3vh'}} urlImg={Img02} className={"imgBoxDiv imgBoxDiv--toBottom"}/>
            {/* <div className="illu__boxImg">
                <img src={Img01} alt="Une illustration " className="illu__img " style={style2} id={nameIllu}/>
            </div> */}
            <div className="illu__droite">
                <TextColDroite title1={title1} title2={""} txt1={txt1} txt2={""} txt3={""} />
            </div>

        </section>
    )
}

export default PresentationMotif