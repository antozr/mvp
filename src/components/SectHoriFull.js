import React, { useEffect, useRef } from 'react'
import ContentBoxHori from '../components/ContentBoxHori';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from 'gsap/gsap-core';


//img
import SailorJerry01 from '../assets/img/oldSchool/sailorJerry.jpg';
import SailorJerry02 from '../assets/img/oldSchool/sailor02.jpg';
import DonEdHardy01 from '../assets/img/oldSchool/donEdHardy01.jpg';



gsap.registerPlugin(ScrollTrigger, Timeline);

function SectHoriFull({BigTitle1, BigTitle2, imgArtiste1, imgArtiste2, textcol1,textcol2,textcol3,textcol4,textcol5, textcol6, smallTitle1, smallTitle2, smallTitle3, smallTitle4}) {
    // let texteTitleCol = ["Un style qui", " se demarque", "Sailor Jerry", "Les artistes"," Don Ed Hardy"];
    // let texteCol = [<>Le style se compose de contours noir épais avec des couleurs limitées avec les couleurs primaires  <span className="sect__txt--thin sect__txt--italic">( Jaune - Rouge - Bleu - Vert )</span> avec peux d’ombrage mais bien marqué. Avec une iconographie venue en partie de l’univers de la marine, on retrouve les motifs sous forme de FLASH. <br /> <br /></>,
    // <>On peut situer ces premières apparition en tant que point d’influence dés le début du 20e siècles & principalement aux US ,<span className="sect__txt--thin sect__txt--italic"> comme à Honolulu, San Francisco, New-York mais aussi à Bristol.</span> <br /> <br /></>,
    // <>On peut noter que certains artistes ont permis de faire naître cet effort ainsi que montrer cet art au grand public, pour se faire on retrouve <b>Sailor Jerry</b> qui vas faire évoluer le style en y intégrant des iconographies japonais en plus qu’un retravaille des anciennes iconographies. On lui doit aussi une amélioration des techniques de tatouages notamment avec l’intégration de celle-ci pour en améliorer. Avec son apprenti,<b> Don Ed Hardy</b>, qui va populariser le style au grand public dans les années 70-80, tout en y intégrant une plus grande iconographie japonaise. On peut retrouver certaines collaborations avec des marques de textiles & une marque de rhum pour Sailor Jerry.</>,
    // <>On retrouve comme artistes qui ont fait la renommée et ont propagé ce style, on retrouve donc Sailor Jerry, Don Ed Hardy,  et bien d'autres. On peut leur donner comme point d’orgue qu’ils ont su apporter une nouvelle vague de design dans un univers qui étaient déjà riche mais aussi leur ouverture à une autre caste de personnes en dehors des marins / motards et autre personnes, ils ont sut faire croître leur popularité jusqu'à maintenant en maintenant l'authenticité des motifs et de l’esprit de liberté que beaucoup font ressortir. </>,
    // <><span className="sect__txt--thin sect__txt--italic">Si aujourd’hui bien des styles existent, un bon nombre de personnes apprécient encore leur travail et se le font encrer.  </span> </>,
    // <><span className='sect__txt--thin sect__txt--italic sect__txt--smallLength'>"A tattoo is an affirmation: that this body is yours to have and to enjoy while you're here.<br /> Nobody else can control what you do with it."</span></>

    // ];



    ///anim

    const boxRef = useRef();

    useEffect(()=>{
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: boxRef.current,
                markers: false,
                start: "top center",
                end: "+=400",
                scrub: true,
                toggleActions: 'play none reverse none',
            }
        });
        tl.fromTo("#contentSailor",{
            x: '0vw',
            
        },{
            delay:4,
            x:'-30vw',
            duration:6
        })
        .from("#nameSecond",{
            //delay:6,
            x:'-30vw'
        })
    }, []);
    return (
        <section className="sect sect__artiste hori">
            <div className="hori__rowContainer" ref={boxRef}>
                <div className="hori__box ">
                    <h2 className='sect__title sect__title--big'>
                        {BigTitle1}
                    </h2>

                </div>
                <div className="hori__box hori__box--black" id='contentSailor'>

                    <ContentBoxHori linkImg01={imgArtiste1} title01={smallTitle1} title02={smallTitle2} text01={textcol1} text02={textcol2} text03={textcol3} colorTxt={{ color: '#FDF2DE' }} />
                </div>
                <div className="hori__box hori__box--black " id='nameSecond'>
                    <h2 className='sect__title sect__title--big sect__title--italic sect__title--white'>
                        {BigTitle2}
                    </h2>

                </div>
                <div className="hori__box ">
                    <ContentBoxHori linkImg01={imgArtiste2} title01={smallTitle3} title02={smallTitle4} text01={textcol4} text02={textcol5} text03={textcol6} colorTxt={{ color: '#000' }} />

                </div>
            </div>

        </section>
    )
}

export default SectHoriFull