import React from 'react'
import CardAbout from '../../components/card-about'
import Navbar from '../../components/navbar'

import './styles.css'

function About() {
    return (
        <div className='componente-main-help'>
            <Navbar titles={['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?']} 
                    links={['/home', '/about', '/contacts', '/help']} />
            <CardAbout />
        </div>
    )
}

export default About