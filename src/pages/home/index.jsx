import React from 'react'
import CardOne from '../../components/cardOne'
import Navbar from '../../components/navbar'

import './styles.css'

function Home() {
    return (
        <div className='container-home'>
          <Navbar titles={['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?']} 
                  links={['/home', '/about', '/contacts', '/help']} />
        </div >
    )
}

export default Home