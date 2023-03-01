import React from 'react'
import PostCard from '../../components/animal'
import Navbar from '../../components/navbar'
import CardOneAnimal from '../../components/content-one-animal'

import './styles.css'

function PostPage() {
    return (
        <div className='container-home'>
            <PostCard/>
            <Navbar titles={['Inicio', 'Postar', 'Ajuda']} 
                  links={['/home', '/post', '/help']} />
            <CardOneAnimal />
            
        </div >
    )
}

export default PostPage