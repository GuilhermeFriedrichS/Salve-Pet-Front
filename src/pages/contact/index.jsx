import React from 'react'
import Navbar from '../../components/navbar'

import './styles.css'

function Contact() {
    return (
        <div className='componente-main-contact'>
        <Navbar titles={['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?']} links={['/home', '/about', '/contacts', '/help']} />
        </div >
    )
}

export default Contact