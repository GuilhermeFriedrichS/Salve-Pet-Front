import React from 'react'
import CarouselListAnimals from '../../components/carousel-list-animals'
import Navbar from '../../components/navbar'
import DivBusca from '../../components/div-region-animals'

import './styles.css'

function Home() {
    return (
        <div className='container-home'>
          <Navbar titles={['Inicio', 'Postar', 'Ajuda']} 
                  links={['/home', '/post', '/help']} />
          <DivBusca />
          <CarouselListAnimals />
          
        </div >
    )
}

export default Home