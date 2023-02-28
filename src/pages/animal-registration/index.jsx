import React from 'react'
import Navbar from '../../components/navbar'
import PostAnimal from '../../components/post-animal'

import './styles.css'

function AnimalRegistration() {
    return (
        <div className='componente-main-animal-registration'>
            <Navbar titles={['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?']} 
                    links={['/home', '/about', '/contacts', '/help']} />
            <PostAnimal />
        </div >
    )
}

export default AnimalRegistration