import React from 'react'
import CardOne from '../../components/cardOne'
import Navbar from '../../components/navbar'

import './styles.css'

function SignIn() {
    return (
        <div className='container-signin'>
            <div className='main-signin'>
                <Navbar />
                <CardOne/>
            </div>
        </div>
    )
}

export default SignIn