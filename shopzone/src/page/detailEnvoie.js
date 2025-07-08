import './DetailEvoie.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Envoie(){
    return(

          <div className="container">
               <form  className="mx-auto mt-15 from" >
                <div className="text-3xl text-Danger">
                    <h2>Detail D'envoie</h2>
                </div>
                <div>
                    <label htmlFor="">Nom</label>
                    <input type="text" className="form-control" />
                </div>
                 <div>
                    <label htmlFor="">Telephone</label>
                    <input type="tel" className="form-control" />
                </div>
                
                 <div>
                    <label htmlFor="">Email</label>
                    <input type="email" className="form-control" />
                </div>

                <div>
                    <label htmlFor="">Ville</label>
                    <input type="password" className="form-control" />
                </div>

               <div>
                    <label htmlFor="">Adresse</label>
                    <input type="password" className="form-control" />
                </div>
                <div>
                    <button className="btn btn-success btn-block mt-3">
                        Suivant
                    </button>
                </div>


               </form>
           </div>
 
   
    );
}
export default Envoie;