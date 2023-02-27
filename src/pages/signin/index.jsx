import React from 'react'
<<<<<<< HEAD
import './styles.css'

function Singin() {
    return (
        <h1>Sing-In</h1>
    )
}

export default Singin
=======
import CardOne from '../../components/cardOne'
import Navbar from '../../components/navbar'

import './styles.css'

function SignIn() {
    return (
        <div className='container-signin'>
            <div className='main-signin'>
                <Navbar titles={['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?']} links={['/home', '/about', '/contacts', '/help']} />
                <CardOne/>
            </div>
        </div>
    )
}

export default SignIn
>>>>>>> main
