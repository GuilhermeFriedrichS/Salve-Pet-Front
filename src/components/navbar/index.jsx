import React from "react";
import './styles.css';


function Navbar(props) {
    let navbar = {
        titles:['Inicio', 'Sobre', 'Contato', 'Precisa de ajuda?'],
        links:['/home', '/about', '/contacts', '/help']
    }
    let signout = {}
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
                                    <li><a href="#"  className="hvr-grow"></a></li>
                                }
                            </ul>
                        </nav>
                </header>
                
            </body>
 
     
    )
}

export default Navbar