  import React from 'react';
import { useNavigate } from 'react-router-dom';







function Forget(){
       const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de soumission
    navigate('/about'); // Redirige vers la page d'informations
  };
    return(
      
        <> 
          <div>
            <form className='border-primary'onSubmit= {handleSubmit}>
   <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     <div id="emailHelp" className="form-text"></div>
    </div>
    <div className="mb-3">
     <label for="exampleInputPassword1" className="form-label">Password</label>
     <input type="password" className="form-control" id="exampleInputPassword1"/>
   </div>

      <div className="mb-3">
     <label for="exampleInputPassword1" className="form-label">Password confirme</label>
     <input type="password" className="form-control" id="exampleInputPassword2"/>
   </div>
   <button type="submit" className="btn btn-primary">Submit</button><br></br>
   </form>
   </div>
   </>
    );
}
export default Forget;

  