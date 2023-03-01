import React from 'react'
import Navbar from '../../components/navbar'

import './styles.css'
import CardChangeAccount from '../../components/card-change-account'

function ChangePassword() {
    return (
        <div className='componente-main-changepassword'>
            <Navbar titles={['Inicio', 'Postar', 'Ajuda']} 
                    links={['/home', '/post', '/help']} />
            <CardChangeAccount />
        </div >
    )
}

export default ChangePassword