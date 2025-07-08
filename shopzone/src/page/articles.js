import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaPersonHalfDress } from "react-icons/fa6";
import POLO1 from "./polo1.jpeg";
import PULL2 from "./pull2.jpeg";
import TSHIRT3 from "./tshirt3.jpeg";
import JOGGING4 from "./jogging4.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Pagination from './pagination.js'*/
import './articles.css';



function Articles() {
    return(
        <>
        <div className="vetement-container">
                <section className="collection1"> 
                <div className="product">
                     <h1>ARTICLES<FaPersonHalfDress /></h1>

                      <p className="art">Notre sélection de produits soigneusement choisis est conçue pour répondre à vos besoins et préférences. Chaque article de notre collection représente notre engagement envers la qualité, la fonctionnalité et le style. Que vous recherchiez des essentiels du quotidien ou quelque chose d'unique, nous avons quelque chose<br></br>
       pour tous les goûts et toutes les exigences.</p>
                 <div className="image3"> 
                    <div className="product-item1 ">
                        <img src={POLO1} alt="polo1" />
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
                        <img src={TSHIRT3} alt="tshirt3" />
                          <h3>Drip</h3>
                           <p>size:M,L,XL</p>
                        <p>Prix: 70.000 Fcfa</p>
                       <Link to={'/panier'}><button>Ajouter au panier</button></Link> 
                  <Link to={'/like'}><button  className="like">J'aime<FcLikePlaceholder /></button></Link> 
                    </div>
                    <div className="product-item1">
                        <img src={JOGGING4} alt="jogging4" />
                        <h3> Hamille</h3>
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
export default Articles;