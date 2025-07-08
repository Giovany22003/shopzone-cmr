import React from "react";
import "./Vetement3.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import POLO1 from "./polo1.jpeg";
import POLO2 from "./polo2.jpeg";
import POLO3 from "./polo3.jpeg";
import POLO4 from "./polo4.jpeg";
import POLO5 from "./polo5.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';





function Vetement3(){
    return(
<>
       <div className="vetement-container">
        <section className="collection1"> 
        <div className="product">
             <h1>POLO</h1>
         <div className="image3"> 
            <div className="product-item1 ">
                <img src={POLO1} alt="polo1" />
                <h3>polo 1</h3>
                <p>size:M,L,XL,XXL</p>
                <p>Prix: 50.000 Fcfa</p>
                 <Link to={'/panier'}>  <button>Ajouter au panier</button></Link>   
                    <Link to={'/like'}> <button  className="like">J'aime<FcLikePlaceholder /></button>   </Link>  
            </div>
            
            <div className="product-item1 ">
                <img src={POLO2} alt="polo2" />
                  <h3>polo 2</h3>
                   <p>size:M,L,XL,XXL</p>
                <p>Prix: 60.000 Fcfa</p>
                 <Link to={'/panier'}>   <button>Ajouter au panier</button></Link>   
                     <Link to={'/like'}><button className="like">J'aime<FcLikePlaceholder /></button>   </Link>  
            </div>
           
            <div className="product-item1">
                <img src={POLO3} alt="polo3" />
                  <h3>Oversie-Drip</h3>
                   <p>size:M,L,XL</p>
                <p>Prix: 70.000 Fcfa</p>
                <Link to={'/panier'}>  <button>Ajouter au panier</button></Link>   
                     <Link to={'/like'}><button  className="like">J'aime<FcLikePlaceholder /></button>   </Link>  
            </div>
            </div>

            <div className="ros">
            <div className="product-item1">
                <img src={POLO4} alt="polo4" />
                <h3>T-shirt Hamille</h3>
                 <p>size:M,L,XL,XXL</p>
                <p>Prix: 80.000 Fcfa</p>
                 < Link to={'/panier'}>   <button>Ajouter au panier</button></Link>   
                     <Link to={'/like'}><button  className="like">J'aime<FcLikePlaceholder /></button>   </Link>  
            </div>
           
            <div className="product-item1">
                <img src={POLO5} alt="polo5" />
                 <h3>T-shirt Mail</h3>
                  <p>size:M,L,XXL</p>
                <p>Prix: 90.000 Fcfa</p>
               <Link to={'/panier'}>    <button>Ajouter au panier</button></Link>   
                   <Link to={'/like'}><button  className="like">J'aime<FcLikePlaceholder /></button>   </Link>  
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
export default Vetement3;