import React from "react";
import './styles.css';


function Navbar(props) {
    return (
            <body>
                <header>
                        <nav className="nav-navbar">
                            <a className="hvr-grow" id="logo-navbar" href="/">Salve Pets</a>
                            <ul className="navbar-list">
                                {
                                    props.titles.map((title, i) => (
                                        <li><a href={props.links[i]} className="hvr-grow">{title}</a></li>
                                    ))
                                }
                                
                            </ul>
                        </nav>
                </header>
                
            </body>
 
     
    )
}

export default Navbar