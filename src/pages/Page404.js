import React from 'react'
import { Link } from 'react-router-dom'
import InterSectionBox from '../components/InterSectionBox'
import backInterOld from '../assets/img/svg/oldSchool/paternOldSchool.svg';


function Page404() {
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

                <Link to='/' className='sect__txt sect__txt--italic' >Retour à la carte </Link>
            </section>
            <InterSectionBox  backImg={{ backgroundImage: `url(${backInterOld})` }}/>
        </>
    )
}

export default Page404