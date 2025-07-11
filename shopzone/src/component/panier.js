import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";  
import { useNavigate } from 'react-router-dom';





function Panier(){
   const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/connexion'); // Redirige vers la page de connexion
  }
    return(
      <>

  <Link to={'/connexion'}><button onClick={handleLoginRedirect} className="discover-button1">Commander </button></Link> 

   <footer className="footer">
              <p>
                  ShopZone est une boutique en ligne spécialisées dans la mode Mixte et accessoires.
                  Nous vous proposons notre sélection à votre style✨ .
                </p>
                <ul  className='d-flex align-items-center justify-content-center list-unstyled'>
               <li className='me-5'><Link to={'/contact'}><FaWhatsappSquare color='#25D366'/> <span>+237 695128036</span></Link></li> 
               <li className='me-5'><Link to={'/contact'}><FaSquarePhone color='#007bff' /> <span> +237 695128036 </span></Link></li>
               <li className='me-5'><Link to={'/contact'}><SiGmail color='#EA4335' /><span> shopzone12@gmail.com </span></Link></li>
                </ul>
              <p>© 2023 ShopZone</p>
            </footer>
            </>
    );
}
export default Panier;