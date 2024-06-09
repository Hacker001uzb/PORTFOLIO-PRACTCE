import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../components/img/logo.svg'


function Header() {
    return (
        <div className='header '>
            <div className="header__wrapper  container"></div>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container ">
                    <Link className="navbar-brand" href="#"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  d-flex justify-content-end " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/portfolio' className="nav-link" href="#">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="nav-link" href="#">services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link" href="#">contact</Link>
                            </li>
                            
            
                        </ul>
                    </div>
                </div>
            </nav>

        </div>


        
    )
}

export default Header