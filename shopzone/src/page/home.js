import React from 'react';
import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TSHIRT1 from './tshirt1.jpeg';
import photo2 from './photo2.jpeg';
import photo3 from './photo3.jpeg';
import photo4 from './photo4.jpeg';


function Home() {
    return(
        <> 
     <div className="home-container">
        <section className="collection">
          
          <div className="products">
            <div className="product-item ">
              <Link to={'/Vetement1'}><img src={TSHIRT1} alt="tshirt1" /></Link>
              
            </div>
            <div className="product-item ">
             <Link to={'/Vetement2'}><img src={photo2} alt="photo2" /></Link>
            </div>
            <div className="product-item">
            <Link to={'/Vetement3'}><img src={photo3} alt="photo3" /></Link> 
            </div>

             <div className="product-item">
              <Link to={'/Vetement4'}><img src={photo4} alt="photo4" /></Link>
            </div>
          </div>
      
          <Link to={'/Articles'}><button className="discover-button">Découvrir🛒 </button></Link> 
          
          <h3>Nouvelle collection de vêtements de qualité</h3>

          <p className='description'>Decouvrez des pieces elegantes, durable et tendances,parfaites pour ajouter une touches
            sophistiquer a votre style.n'hesitez pas a explorer notre selection et a trouver la piece qui vous correspond le mieux! </p>
        </section>


     </div>
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
export default Home;