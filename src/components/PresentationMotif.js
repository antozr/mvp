import React from 'react'
import TextColDroite from './TextColDroite'
import BoxImageAnim from './BoxImageAnim'


function PresentationMotif({ Img01, Img02, title1, txt1, style2, nameIllu, OneImg, StyleIlluBox }) {
    return (
        <>
            {OneImg === true ? <>

                <div className="sect__illu sect__illuGrid" style={StyleIlluBox}>
                    {window.innerWidth >= 900 ?  <BoxImageAnim positionTB={{ top:"-25vh", width: '100%', height: 'calc(140vh - 220px)', gridColumn : 0 / 1 ,gridRow: 0 / 2 }} urlImg={Img01} className={"imgBoxDiv imgBoxDiv__big  imgBoxDiv--toTop"} nameImg={nameIllu}/>:
                     <BoxImageAnim  urlImg={Img01} className={"imgBoxDiv imgBoxDiv__big  imgBoxDiv--toTop"} nameImg={nameIllu}/>}
                    {/* <BoxImageAnim positionTB={window.innerWidth >= 900 ? { top:"-25vh", width: '100%', height: 'calc(140vh - 220px)', gridColumn : 0 / 1 ,gridRow: 0 / 2 }:""} urlImg={Img01} className={"imgBoxDiv imgBoxDiv__big  imgBoxDiv--toTop"} nameImg={nameIllu}/> */}
                    {/* <BoxImageAnim positionTB={{ top: '-11vh', width: '100%', height: 'calc(140vh - 220px)', gridColumn : 0 / 1 ,gridRow: 0 / 2 }} urlImg={Img01} className={"imgBoxDiv imgBoxDiv__big  imgBoxDiv--toTop"} /> */}
                    {window.innerWidth >=900 ? <BoxImageAnim positionTB={{ position: "absolute", bottom: '-22vh', left: "35%", gridColumn :1/2,gridRow: 1 / 2 }} urlImg={Img02} className={"imgBoxDiv imgBoxDiv__big  imgBoxDiv__smallImg"} nameImg={nameIllu}/>:
                    <BoxImageAnim urlImg={Img02} className={"imgBoxDiv imgBoxDiv__big  imgBoxDiv__smallImg"} nameImg={nameIllu}/>}
                    <div className="illu__droite" style={{ padding: '0 3vw 0 0', gridColumn :1/2,gridRow:0 /1, width:'100%' }} >
                        <TextColDroite title1={title1} title2={""} txt1={txt1} txt2={""} txt3={""} />
                    </div>
                </div>
            </> : <>
                <div className="sect sect__illu" style={StyleIlluBox}>
                    {window.innerWidth >=900 ?<BoxImageAnim positionTB={window.innerWidth >= 900 ?{ top: '-25vh', height: 'calc(150vh - 220px)' }:""} urlImg={Img01} className={"imgBoxDiv imgBoxDiv--toTop"}  nameImg={nameIllu}/>:
                     <BoxImageAnim urlImg={Img01} className={"imgBoxDiv imgBoxDiv--toTop"}  nameImg={nameIllu}/>
                                    }
                    {window.innerWidth >=900 ?<BoxImageAnim positionTB={window.innerWidth >= 900 ?{ margin: '0 25px', bottom: '-10vh', height: 'calc(150vh - 220px)' }:""} urlImg={Img02} className={"imgBoxDiv imgBoxDiv--toBottom"} nameImg={nameIllu}/>:
                                        <BoxImageAnim urlImg={Img02} className={"imgBoxDiv imgBoxDiv--toBottom"} nameImg={nameIllu}/>}
                    <div className="illu__droite" style={style2} >
                        <TextColDroite title1={title1} title2={""} txt1={txt1} txt2={""} txt3={""} />
                    </div>
                </div>

            </>}

   



        </>
    )
}

export default PresentationMotif