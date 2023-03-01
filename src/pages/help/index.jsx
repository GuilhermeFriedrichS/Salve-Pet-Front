import React from 'react'
import Navbar from '../../components/navbar'

import './styles.css'

function Help() {
    return (
        <div className='componente-main-help'>
            <Navbar titles={['Inicio', 'Postar', 'Ajuda']} 
                    links={['/home', '/post', '/help']} />
        </div >
    )
}

export default Help