import React from 'react'
import PostCard from '../../components/animal'
import CardOne from '../../components/cardOne'
import Navbar from '../../components/navbar'

import './index.css'

function PostPage() {
    return (
        <div className='container-home'>
            <PostCard/>
          <Navbar titles={['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?']} 
                  links={['/home', '/about', '/contacts', '/help']} />
        </div >
    )
}

export default PostPage