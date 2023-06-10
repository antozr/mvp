import React from 'react'
import './ListMapMobile.scss';

import Hirondelle from '../assets/img/svg/hirondelle.svg';
import Dragon from '../assets/img/japan/carpeColor.svg';
import Etoile from "../assets/img/svg/russie/kremlin.svg";
import crossSvg from '../assets/img/svg/celtic/croixCelte.svg';
import nordicSvg from '../assets/img/svg/nordic/wyrd.svg';

import { Link } from 'react-router-dom';
function ListMapMobile() {

    let arrayAllName = ["Old-school Américain", "Japonais, irezumi", "Prison russe & URSS", "Tradition nordique ", 'Tradition celtique', "Traditionnel des iles pacifiques"];
    let arrayLinkName = ["/oldschool", "/japon", "/russie", "nordic", "/celte", "pacifique"];
    let arraySvgLand = [Hirondelle, Dragon, Etoile, nordicSvg, crossSvg, Hirondelle];


    return (
        <div className="sect__listMapMob homepage__sect1--bgImg">

            <div className="listMapMob__boxTitle">
                <p className="sect__txt sect__txt--big sect__txt--jaune">
                    &
                </p>
                <h2 className="sect__title listMapMob__titleBig">

                    Choisis&nbsp;ton&nbsp;Style<br />
                    <span className="sect__title--italic sect__txt--thin">
                        une région
                    </span>
                </h2>

            </div>
            <ul className="listMapMob__list" id="mapWorld">

                {arrayAllName.map((nameLand, index) =>

                    <Link to={arrayLinkName[index]} className='listMapMob__link listMapMob__el' aria-label={nameLand}>
                        <img src={arraySvgLand[index]} alt="Illustration d'un hirondelle, dans un style oldschool. " loading='lazy' title='Hirondelle' className="listMapMob__img" />
                        <p className=" sect__title listMapMob__title">{nameLand} </p>
                    </Link>

                    //    Pas d'utilisation du LI à cause du nth-child(2n)
                )}
            </ul>
        </div>
    )
}

export default ListMapMobile