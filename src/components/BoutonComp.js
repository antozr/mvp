import React from 'react'
import './BoutonComp.scss'

function BoutonNormal({nameBtn, linkBtn}) {
  return (
    <a href={linkBtn} className="sect__btn" >
        {nameBtn}
    </a>
  )
}

export default BoutonNormal