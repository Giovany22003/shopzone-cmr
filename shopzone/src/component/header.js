import React from 'react';
import  Logos3 from './Logos3.png';
import { FcLike } from "react-icons/fc";
import { SlBasket } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { GrValidate } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom"
import Search from './search.js';

import  { useState } from 'react';
import "./header.css";



function Header(  ){
     const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
    return(
         <div className="AppNav">
             <section className="hero1">
              <h2><GrValidate />Livraison gratuite à partir de 50.000 fxfa✨</h2>
            </section>
         <header className='Header'>
         <img src={Logos3}  className='picture' alt="logo" />
         <nav> 
    <ul  className="d-flex align-items-center justify-content-center list-unstyled">
        <li className='me-5'><Link to={'/'}>Home</Link></li>
         <li className='me-5'><Link to={'/articles'}>Articles</Link></li>
          <li className='me-5'><Link to={'/contact'}>contact</Link></li>
           <li className='me-5'><Link to={'/faq'}>Faq</Link></li>
            <li className='me-5'><Link to={'/like'}><FcLike /></Link></li>
             <li className='me-5'><Link to={'/panier'}><SlBasket /></Link></li>
             <li className='me-5'><Link to={'/inscription'}><CiUser /></Link></li>
            <li className='me-5'><Link to={'/search'} onClick={togglePopup}><IoSearch /> </Link></li>
    </ul>
      {isPopupVisible && <Search onClose={togglePopup} />}
  
    </nav>
    </header>
    </div>

    );
}
export default Header;