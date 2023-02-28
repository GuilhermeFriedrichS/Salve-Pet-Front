import React from 'react'
import Navbar from '../../components/navbar'

import './styles.css'

function About() {
    return (
        <div className='componente-main-help'>
        <Navbar titles={['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?']} links={['/home', '/about', '/contacts', '/help']} />
        </div >
    )
}

export default About