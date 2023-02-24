import React from 'react'
import CardOne from '../../components/cardOne'
import Navbar from '../../components/navbar'

import './styles.css'

function SignIn() {
    return (
        <div className='componente-main-signin'>
        <Navbar titles={['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?']} links={['/home', '/about', '/contacts', '/help']} />
        <CardOne />
        </div >
    )
}

export default SignIn