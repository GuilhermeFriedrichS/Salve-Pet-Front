import React from 'react'
import CarouselListAnimals from '../../components/carousel-list-animals'
import Navbar from '../../components/navbar'
import DivBusca from '../../components/div-region-animals'

import './styles.css'

function Home() {
    return (
        <div className='container-home'>
          <Navbar titles={['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?']} 
                  links={['/home', '/about', '/contacts', '/help']} />
          <DivBusca />
          <CarouselListAnimals />
          <br/>
          <br/><br/>
          <CarouselListAnimals />
          <br/><br/>
          <br/>
          <CarouselListAnimals />
        </div >
    )
}

export default Home