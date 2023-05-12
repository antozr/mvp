import React from 'react'
import TextColDroite from './TextColDroite'
import BoxImageAnim from './BoxImageAnim'

function PresentationMotif({ Img01, Img02, title1, txt1, style2, nameIllu, OneImg, StyleIlluBox }) {
    return (
        <>
            {OneImg === true ? <>

                <div className="sect__illu sect__illuGrid" style={StyleIlluBox}>
                    <BoxImageAnim positionTB={{  width: '100%', height: 'calc(140vh - 220px)', gridColumn : 0 / 1 ,gridRow: 0 / 2 }} urlImg={Img01} className={"imgBoxDiv imgBoxDiv__big  imgBoxDiv--toTop"} />
                    {/* <BoxImageAnim positionTB={{ top: '-11vh', width: '100%', height: 'calc(140vh - 220px)', gridColumn : 0 / 1 ,gridRow: 0 / 2 }} urlImg={Img01} className={"imgBoxDiv imgBoxDiv__big  imgBoxDiv--toTop"} /> */}
                    <BoxImageAnim positionTB={{ position: "absolute", bottom: '-22vh', left: "35%", gridColumn :1/2,gridRow: 1 / 2 }} urlImg={Img02} className={"imgBoxDiv imgBoxDiv__big  imgBoxDiv__smallImg"} />
                    <div className="illu__droite" style={{ padding: '0 3vw 0 0', gridColumn :1/2,gridRow:0 /1, width:'100%' }} >
                        <TextColDroite title1={title1} title2={""} txt1={txt1} txt2={""} txt3={""} />
                    </div>
                </div>
            </> : <>
                <div className="sect sect__illu" style={StyleIlluBox}>
                    <BoxImageAnim positionTB={{ top: '-8vh' }} urlImg={Img01} className={"imgBoxDiv imgBoxDiv--toTop"} />
                    <BoxImageAnim positionTB={{ margin: '0 25px', bottom: '-3vh' }} urlImg={Img02} className={"imgBoxDiv imgBoxDiv--toBottom"} />
                    <div className="illu__droite" style={style2} >
                        <TextColDroite title1={title1} title2={""} txt1={txt1} txt2={""} txt3={""} />
                    </div>
                </div>

            </>}

            {/* <div className="illu__boxImg">
                <img src={Img01} alt="Une illustration " className="illu__img " style={style2} id={nameIllu}/>
            </div> */}



        </>
    )
}

export default PresentationMotif