import React from 'react'

function TextColDroite({title1, title2, txt1, txt2, txt3}) {
  return (
    <>
    <h2 className="sect__title sect__title--2 sect__title--margeColDr">
            {title1} <br/> {title2}
          </h2>
          <p className="sect__txt">
            {txt1}
            {txt2}
            {txt3}
          </p>
    </>
  )
}

export default TextColDroite