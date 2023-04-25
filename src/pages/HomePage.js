import React from 'react'
import './HomePage.scss'
/// les images
import ImageHome from '../assets/img/homeImg3.jpg'
import ImageHome2 from '../assets/img/homeImg.jpg'
import BoutonNormal from '../components/BoutonComp'
import MapBox from '../components/MapBox'
import { initStatDataView } from '../logic/_status-map.js';


function HomePage() {
  initStatDataView();

  return (
    <>
    
    <div className='homepage'>
      

      <div className="homepage__sect1 homepage__sect1--bgImg sect">
        {/* <div className="sect__boxImg sect__boxImg--big">
          <img src={ImageHome2} alt="" className="sect__img" loading='lazy' />
        </div> */}
        <div className="sect__boxImg--big sect__boxImg">
          <div className="sect__boxTxt ">
            <h2 className=" sect__title sect__title--2 sect__title--ecart">
              Découvre les<br />tatouages du<br />monde
            </h2>
            <p className="sect__txt">

              Bienvenus dans cette univers, qui est de plus en plus visible de nos jours mais qui restes, pour certains assez flou sur le fond. Car l’histoire derrière certains courant, mouvement, style sont des histoires à part entière et celui qui connait l’histoire verra ces œuvres d’un autre regard que l’inculte.
            </p>
            <p className="sect__txt sect__txt--ecart sect__txt--italic sect__txt--thin">
              Alors je vous invite à voyager dans ces différents univers pour en apprendre plus sur les codes et les bases de ces styles venant des 4 coins du monde.
            </p>
            <BoutonNormal nameBtn={"Voir la carte"} linkBtn={'#mapWorld'} />
          </div>
        </div>
      </div>
      <div className="sect__interColor sect--heigth100">

      </div>

      <MapBox />

    </div>
    </>
  )
}

export default HomePage