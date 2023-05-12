import React from 'react'
import SectionIntroPage from '../components/SectionIntroPage'
import InterSectionBox from '../components/InterSectionBox'
import ContentBoxHori from '../components/ContentBoxHori'

function RussiePage() {

  return (
    <div className="sect page">

      <SectionIntroPage BTD1={"CCCP"} BTD2={"Prison Russe"} title={<>Go to goulag! Kurwa!!</>} txt={<></>}/>
      <InterSectionBox WhitThext={false} />
      <section className="sect__historyLand">
        <div className="hori__box hori__box--black">
          <ContentBoxHori linkImg01={""} linkImg02={""} title01={""} title02={""} text01={""} animImg={true} />
         </div>
      </section>
      <InterSectionBox WhitThext={true}  textTitle={"Insalubrité & Beauté"} /> 
      {/* {la technique } */}
      <InterSectionBox WhitThext={true}  textTitle={"Au goulag en noir"} /> 

    </div>
  )
}

export default RussiePage