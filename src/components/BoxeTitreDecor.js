import React from 'react'

function BoxeTitreDecor({decor,titleP1, titleP2, sizeDecor, positionBox}) {
  return (
    <div className="sect__boxTitle" style={positionBox}>
                <p className="sect__txt sect__txt--big sect__txt--jaune" style={sizeDecor}>
                    {decor}
                </p>
                <h2 className="sect__title  sect__title--margeLeftMin sect__title--medium sect__title--lineHSmall">

                    {titleP1}<br />
                    <span className="sect__title--italic sect__txt--thin">
                        {titleP2}
                    </span>
                </h2>

            </div>
  )
}

export default BoxeTitreDecor