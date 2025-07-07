import React from "react";
import "./contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";



function Contact() {
    return(
         <>
     <h1 className="text-primary">Posez vos questions!</h1>
        <div className='contact-container '>
      
      

      <form className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
        />
         <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
        ></textarea>

        <button type="submit">Envoyer😄</button>
      </form>
      </div>
      <footer>
        <h1 className="text-success">contacter Nous Directement</h1>
        <ul className='d-flex align-items-center justify-content-center list-unstyled'>
          <li className='me-5'><Link to='https://wa.me/237695128036' target="_blank" rel="noopener noreferrer"><FaWhatsappSquare color='#25D366'  size={60}/> <span>+237 695128036</span></Link></li>
          <li className='me-5'><Link to='tel:+237695128036'><FaSquarePhone  color='#007bff' size={60} /> <span> +237 695128036</span></Link></li>
          <li className='me-5'><Link to='mailto:shopzone12@gmail.com'><SiGmail  color='#EA4335' size={60}/> <span>shopzone12@gmail.com</span></Link></li>
        </ul>
        <p>© 2023 ShopZone</p>
        </footer>
        
        </>
    );
}
export default Contact;