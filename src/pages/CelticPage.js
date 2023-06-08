import React from 'react'
import SectionIntroPage from '../components/SectionIntroPage'
import InterSectionBox from '../components/InterSectionBox'
import ContentBoxHori from '../components/ContentBoxHori'
import SectHoriFull from '../components/SectHoriFull'

function CelticPage() {
  return (
    <>
        <div className="page">
            <SectionIntroPage  />
            <InterSectionBox  />
            {/*  */}
            <div className="sect__historyLand">
                <div className="hori__grid hori__box--black">
                    <ContentBoxHori title01={allTitle[0]} text01={allTxt[0]} animImg={true} historicBox={true} linkImg01={} linkImg02={}  colorTxt={{ color: '#FDF2DE' }}/>
                </div>

                <div className="hori__grid hori__box--black">
                    <ContentBoxHori title01={allTitle[0]} text01={allTxt[0]} animImg={true} historicBox={true} linkImg01={} linkImg02={}  colorTxt={{ color: '#FDF2DE' }}/>
                </div>

                <div className="hori__grid hori__box--black">
                    <ContentBoxHori title01={allTitle[0]} text01={allTxt[0]} animImg={true} historicBox={true} linkImg01={} linkImg02={}  colorTxt={{ color: '#FDF2DE' }}/>
                </div>

                <div className="hori__grid hori__box--black">
                    <ContentBoxHori title01={allTitle[0]} text01={allTxt[0]} animImg={true} historicBox={true} linkImg01={} linkImg02={}  colorTxt={{ color: '#FDF2DE' }}/>
                </div>
            </div>
        </div>
        <InterSectionBox  />

        {/*  */}
        <div className="sect__height100">
            <SectHoriFull  BigTitle1={allTitle[8]} BigTitle12={allTitle[9]} 
          textcol1={allTxt[11]} textcol2={allTxt[12]} imgArtiste1={horyMotif} smallTitle1={"Du point fait main"}
          BigTitle2={allTitle[10]}
          textcol4={allTxt[13]} textcol5={allTxt[14]} imgArtiste2={motifImgHory} fullImgs={true} smallTitle3={"Des motifs "} smallTitle4={"riche de mythologie"}
           />
        </div>
        <InterSectionBox  />
        {/*  */}
    </>
  )
}

export default CelticPage