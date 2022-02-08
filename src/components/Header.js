import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import HeaderCSS from './Header.css'
import Logo from '../img/bola-de-futebol.png'

const Header = () => {
    return(
        <header className='header'>
            <section className='container header-container'>
                <a href="/" className="logo">
                    <img src={Logo} alt="Logo" width={70} height={50}/>
                </a>
                <ul className="menu">
                    <li className="menu-item">
                    <Link to="/" className='menu-item-link'>
                        <Button color="primary">Home</Button>
                    </Link>
                    </li>
                    <li className="menu-item">
                    <Link to="/contato" className='menu-item-link'>
                        <Button color="primary">Contato</Button>
                    </Link>
                    </li>
                </ul>
            </section>
        </header>
    )
}

export default Header;
