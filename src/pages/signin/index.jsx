import React from 'react'
import CardOne from '../../components/cardOne'
import Navbar from '../../components/navbar'

import './styles.css'

function SignIn() {
    return (
        <div className='container-signin'>
            <div className='main-signin'>
                <Navbar titles={['Inicio', 'Postar', 'Ajuda']} 
                        links={['/home', '/post', '/help']} />
                <CardOne/>
            </div>
        </div>
    )
}

export default SignIn