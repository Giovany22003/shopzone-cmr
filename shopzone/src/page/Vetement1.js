import React from "react";
import "./Vetement1.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import TSHIRT1 from "./tshirt1.jpeg";
import TSHIRT2 from "./tshirt2.jpeg";
import TSHIRT3 from "./tshirt3.jpeg";
import TSHIRT4 from "./tshirt4.jpeg";
import TSHIRT5 from "./tshirt5.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';

function vetement1(){
    return(
        <>
       <div className="vetement-container">
        <section className="collection1"> 
        <div className="product">
             <h1>T-SHIRT</h1>
         <div className="image3"> 
            <div className="product-item1 ">
                <img src={TSHIRT1} alt="tshirt1" />
                <h3>T-shirt 1</h3>
                <p>size:M,L,XL,XXL</p>
                <p>Prix: 50.000 Fcfa</p>
               <Link to={'/panier'}> <button>Ajouter au panier</button></Link>
               <Link to={'/like'}> <button  className="like">J'aime<FcLikePlaceholder /></button></Link>
            </div>
            
            <div className="product-item1 ">
                <img src={TSHIRT2} alt="tshirt2" />
                  <h3>T-shirt 2</h3>
                   <p>size:M,L,XL,XXL</p>
                <p>Prix: 60.000 Fcfa</p>
          <Link to={'/panier'}><button>Ajouter au panier</button> </Link> 
         <Link to={'/like'}> <button className="like">J'aime<FcLikePlaceholder /></button> </Link> 
            </div>
           
            <div className="product-item1">
                <img src={TSHIRT3} alt="tshirt3" />
                  <h3>Oversie-Drip</h3>
                   <p>size:M,L,XL</p>
                <p>Prix: 70.000 Fcfa</p>
            <Link to={'/panier'}> <button>Ajouter au panier</button></Link> 
           <Link to={'/like'}><button  className="like">J'aime<FcLikePlaceholder /></button></Link> 
            </div>
            </div>

            <div className="ros">
            <div className="product-item1">
                <img src={TSHIRT4} alt="tshirt4" />
                <h3>T-shirt Hamille</h3>
                 <p>size:M,L,XL,XXL</p>
                <p>Prix: 80.000 Fcfa</p>
              <Link to={'/panier'}>  <button>Ajouter au panier</button></Link> 
             <Link to={'/like'}>   <button  className="like">J'aime<FcLikePlaceholder /></button></Link> 
            </div>
           
            <div className="product-item1">
                <img src={TSHIRT5} alt="tshirt5" />
                 <h3>T-shirt Mail</h3>
                  <p>size:M,L,XXL</p>
                <p>Prix: 90.000 Fcfa</p>
        <Link to={'/panier'}><button>Ajouter au panier</button> </Link>   
             <Link to={'/like'}><button  className="like">J'aime<FcLikePlaceholder /></button></Link>
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
export default vetement1;