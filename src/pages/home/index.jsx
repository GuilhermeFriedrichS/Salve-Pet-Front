import React from 'react'
import Navbar from '../../components/navbar'
import CardSearchAnimals from '../../components/card-search-animals'

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