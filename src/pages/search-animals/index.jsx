import React from 'react'
import CarouselListAnimals from '../../components/carousel-list-animals'
import Navbar from '../../components/navbar'
import DivBusca from '../../components/div-region-animals'
import CardSearchAnimals from '../../components/card-search-animals'

import './styles.css'

function SearchAnimals() {
    return (
        <div className='container-search-animals'>
          <Navbar titles={['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?']} 
                  links={['/home', '/about', '/contacts', '/help']} />
                <CardSearchAnimals />
          <div className="container-content-search-animals">
            <div className='main-content-search-animals'>
                <DivBusca />
                <br/><br/><br/>
                <CarouselListAnimals />
                <br/><br/><br/>
                <CarouselListAnimals />
                <br/><br/><br/>
                <CarouselListAnimals />
            </div>
          </div>
        </div >
    )
}

export default SearchAnimals