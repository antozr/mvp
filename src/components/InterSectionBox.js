import React from 'react'

function InterSectionBox({ WhitThext, backImg, textTitle }) {


    function noTextBox() {
        return (
            <div className="sect__interColor sect--heigth100  " style={backImg}>

            </div>
        )
    }

    function textBoxOn() {
        return (
            <div className="sect__nameBigBox sect__nameBigBox--fondImg sect--snapChild" style={backImg}>
                <h2 className="sect__title sect_title--2 sect__title--druzokh">
                    {textTitle}
                </h2>
            </div>
        )
    }



    return (
        <>
            {WhitThext === true ? textBoxOn() : noTextBox()}



        </>
    )
}

export default InterSectionBox