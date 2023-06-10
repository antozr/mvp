import React from 'react'

import InterSectionBox from '../components/InterSectionBox'
import backInterOld from '../assets/img/svg/oldSchool/paternOldSchool.svg';
import BoutonNormal from '../components/BoutonComp';
import Footer from '../components/Footer';
import { useRouteError } from 'react-router';


function Page404() {

    const error = useRouteError()
    console.error(error)

    if (window.location.pathname !== '/japon') {
        document.querySelector('body').classList.add('App--hidden')
    } else {
        document.querySelector('body').classList.remove('App--hidden')
    }
    return (
        <>
            <section className="sect sect__attente">
                <h1 className="sect__title">
                    Vous vous êtes perdus.</h1>
                <h2 className="sect__title sect__title--2">
                    Retourner en lieu sûr.
                </h2>
                <BoutonNormal linkBtn={"/"} nameBtn={"Retour à la carte "} ClassColor={"sect__btn sect__btn--yellow"}/>
            </section>
            <InterSectionBox  backImg={{ backgroundImage: `url(${backInterOld})`, height: "20vh" }}/>
            <Footer />
        </>
    )
}

export default Page404