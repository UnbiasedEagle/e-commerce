import React from 'react';
import brandImage from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return ( 
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container">
                <a href="#" className='navbar-brand'>
                    <img src={brandImage} alt="brand"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className='collapse navbar-collapse' id='mobile-nav'>
                    <ul className='navbar-nav ml-auto'>
                        <li className="nav-item ml-4 mt-lg-0 mt-4">
                            <div className='nav__link'>
                                <i className="far fa-heart fa-2x"></i>
                                <div className='nav__linkInfo'>
                                    <span>0 Item</span>
                                    <span>Wish List</span>
                                </div>
                            </div>
                        </li>   
                        <li className="nav-item ml-4 mt-lg-0 mt-4">
                            <div className='nav__link'>
                                <i className="fas fa-user fa-2x"></i>
                                <div className='nav__linkInfo'>
                                    <span>My Account</span>
                                    <span>Login/Sign Up</span>
                                </div>
                            </div>
                        </li>   
                        <li className="nav-item ml-4 mt-lg-0 mt-4">
                            <div className='nav__link'>
                                <i className="fas fa-shopping-cart fa-2x"></i>
                                <div className='nav__linkInfo'>
                                    <span>3 Item</span>
                                    <span>My Cart</span>
                                </div>
                            </div>
                        </li>   
                    </ul>
                </div>
            </div>
           
        </nav>
     );
}
 
export default Navbar;