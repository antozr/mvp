import React from 'react'
import { Link } from 'react-router-dom'

function NordicPage() {
    return (
        <section className="sect sect__attente">
            <h1 className="sect__title">
                Le contenut arrive bientôt . </h1>

                <Link to='/' className='sect__txt sect__txt--italic' >Retour à la carte </Link>
        </section>
    )
}

export default NordicPage