import React, { useState } from 'react'
import './HomePage.scss'
/// les images
import ImageHome from '../assets/img/homeImg3.jpg'
import ImageHome2 from '../assets/img/homeImg.jpg'
import BoutonNormal from '../components/BoutonComp'
import MapBox from '../components/MapBox'
import { initStatDataView } from '../logic/_status-map.js';
import ListMapMobile from '../components/ListMapMobile'
import InterSectionBox from '../components/InterSectionBox'
import Footer from '../components/Footer'


function HomePage() {

  if (window.location.pathname !== '/japon') {
    document.querySelector('body').classList.remove('App--hidden')
  }
  //initStatDataView();

  

  const [sizeWindow, setSizeWindow] = useState(window.innerWidth)
  React.useEffect(() => {
    function windowResize() {
      console.log('resize to : ' + window.innerHeight + 'X' + window.innerWidth);
      console.log(window.innerWidth);
      setSizeWindow(window.innerWidth);
    }
    window.addEventListener('resize', windowResize);
  }, [])


  return (
    <>

      <div className='homepage pageChangeSet'>


        <div className="homepage__sect1 homepage__sect1--bgImg sect">
          <div className="sect__boxImg--big sect__boxImg">
            <div className="sect__boxTxt ">
              {/* Changer le titre  */}
              <h1 className="sect__title sect__title--ecart">
                TattooExplore
              </h1>
              <h2 className=" sect__title sect__title--2 sect__title--ecart" style={{fontSize: '28px'}}>
                Découvre les<br />tatouages du<br /><i>monde</i>
              </h2>
              <p className="sect__txt">

              Bienvenu dans cet univers, qui est de plus en plus visible de nos jours, mais qui reste, pour certain assez flou sur le fond. Car l’histoire derrière certains courants, mouvements, styles sont des histoires à part entière et celui qui connaît l’histoire verra ses œuvres d’un autre regard que l’Inculte.           </p>
              <p className="sect__txt sect__txt--ecart sect__txt--italic sect__txt--thin">
                Alors je vous invite à voyager dans ses différents univers pour en apprendre plus sur les codes et les bases de ces styles venant des 4 coins du monde.
              </p>
              <BoutonNormal nameBtn={"Voir la carte"} linkBtn={'#mapWorld'} ClassColor={"sect__btn"} linkHref={true}/>
            </div>
          </div>
        </div>
        <InterSectionBox />


        {sizeWindow <= 900 ? <ListMapMobile /> : <MapBox />}
        <Footer />
      </div>
      
    </>
  )
}

export default HomePage