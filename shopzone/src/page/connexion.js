import React from "react";
import './connexion.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"




function Connexion(){
   

 
  
    return(
           <>
            <form className='from'>
              <div className="text-3xl text-success">
                    <h2>Connexion</h2>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" />
                </div>
                 <div>
                    <label htmlFor="">mot de passe </label>
                    <input type="password" className="form-control" />
                </div>
                
  
  <Link to={'./DetailEnvoie.js'}> <button type="submit" className="btn btn-primary">connecter </button></Link> 
    <Link to={'./inscription.js'} className=" return">inscription</Link><br></br>
  <Link to={'./forget.'} className="forget">Mot de passe oublie?</Link>

   </form>
           </>
    );
}
export default Connexion;