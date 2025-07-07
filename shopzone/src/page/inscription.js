import 'bootstrap/dist/css/bootstrap.min.css';
import './inscription.css';
import React from "react"


function Inscription() {
    return(
        

           <div className="container">
               <form  className="mx-auto mt-15 from" >
                <div className="text-3xl text-success">
                    <h2>Veuillez vous inscrire</h2>
                </div>
                <div>
                    <label htmlFor="">Nom</label>
                    <input type="text" className="form-control" />
                </div>
                 <div>
                    <label htmlFor="">Tel</label>
                    <input type="tel" className="form-control" />
                </div>
                
                 <div>
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" />
                </div>

                <div>
                    <label htmlFor="">Mot De Passe</label>
                    <input type="password" className="form-control" />
                </div>

               <div>
                    <label htmlFor="">Confirmer Mot De Passe</label>
                    <input type="password" className="form-control" />
                </div>
                <div>
                    <button className="btn btn-success btn-block mt-3">
                        S'inscrire
                    </button>
                </div>


               </form>
           </div>
 
    
   ); 
}
export default Inscription;