import React from "react";
import './styles.css';


function Navbar(props) {
    let signout = {}

    let navbar = {
        titles:['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?'],
        links:['/home', '/about', '/contacts', '/help']
    }
    
    if(localStorage.getItem('token')){
        signout.title = 'Sair'
        signout.link = '/log_out'
    }

    if(props.titles){
        props.titles.map(title => {
            navbar.titles.push(title)
        })
        props.links.map(link => {
            navbar.links.push(link)
        })
    }
    
    function left(){
        localStorage.removeItem('token')
    }

    function logged(){
        return localStorage.getItem('token') ? <li><a href="/home" onClick={left} className="hvr-grow">Sair</a></li> : ''
    }

    return (
            <body>
                <header>
                        <nav className="nav-navbar">
                            <a className="hvr-grow" id="logo-navbar" href="/">Salve Pets</a>
                            <ul className="navbar-list">
                                {
                                    navbar.titles.map((title, i) => (
                                        <li><a href={navbar.links[i]} className="hvr-grow">{title}</a></li>
                                    ))
                                }
                                {
                                    logged()
                                }
                            </ul>
                        </nav>
                </header>
                
            </body>
 
     
    )
}

export default Navbar