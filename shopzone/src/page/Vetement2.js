import React from "react";
import "./Vetement2.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import PULL1 from "./pull1.jpeg";
import PULL2 from "./pull2.jpeg";
import PULL3 from "./pull3.jpeg";
import PULL4 from "./pull4.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';


function Vetement2(){
    return(
    <>
       <div className="vetement-container">
        <section className="collection1"> 
        <div className="product">
             <h1>PULLS</h1>
         <div className="image3"> 
            <div className="product-item1 ">
                <img src={PULL1} alt="pull1" />
                <h3>Laurent 1</h3>
                <p>size:M,L,XL,XXL</p>
                <p>Prix: 50.000 Fcfa</p>
                <Link to={'/panier'}>      <button>Ajouter au panier</button></Link> 
        <Link to={'/like'}><button  className="like">J'aime<FcLikePlaceholder /></button></Link> 
            </div>
            
            <div className="product-item1 ">
                <img src={PULL2} alt="pull2" />
                  <h3>Adams 2</h3>
                   <p>size:M,L,XL,XXL</p>
                <p>Prix: 60.000 Fcfa</p>
                <Link to={'/panier'}>      <button>Ajouter au panier</button></Link> 
           <Link to={'/like'}> <button className="like">J'aime<FcLikePlaceholder /></button></Link> 
            </div>
           
            
            </div>

            <div className="ros">
                <div className="product-item1">
                <img src={PULL3} alt="pull3" />
                  <h3>Pull-Drip</h3>
                   <p>size:M,L,XL</p>
                <p>Prix: 70.000 Fcfa</p>
               <Link to={'/panier'}>       <button>Ajouter au panier</button></Link> 
          <Link to={'/like'}> <button  className="like">J'aime<FcLikePlaceholder /></button></Link> 
            </div>
            <div className="product-item1">
                <img src={PULL4} alt="pull4" />
                <h3>Pull Hamille</h3>
                 <p>size:M,L,XL,XXL</p>
                <p>Prix: 80.000 Fcfa</p>
                  <Link to={'/panier'}>    <button>Ajouter au panier</button></Link> 
        <Link to={'/like'}> <button  className="like">J'aime<FcLikePlaceholder /></button></Link>      
            </div>
            </div>
            

        </div>
          </section>
       </div>

       <footer className="footer">
              <p className="phase">
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
export default Vetement2;