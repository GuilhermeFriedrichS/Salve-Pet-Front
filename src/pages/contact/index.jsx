import React from 'react'
import Navbar from '../../components/navbar'

import './styles.css'

function Contact() {
    return (
        <div className='componente-main-contact'>
        <Navbar titles={['Inicio', 'Postar', 'Ajuda']} 
                links={['/home', '/post', '/help']} />
        </div >
    )
}

export default Contact