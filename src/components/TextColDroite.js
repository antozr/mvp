import React from 'react'
import { delay, motion } from 'framer-motion'

function TextColDroite({ title1, title2, txt1, txt2, txt3 }) {
  return (
    <>
      <motion.h2 className="sect__title sect__title--2 sect__title--margeColDr" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition:{delay:0.2} }}>
        {title1} <br /> {title2}
      </motion.h2>
      <motion.p className="sect__txt" initial={{ opacity: 0, x:-200 }} whileInView={{ opacity: 1,x:0, transition:{delay:0.6} }}>
        {txt1}
        {txt2}
        {txt3}
      </motion.p>
    </>
  )
}

export default TextColDroite