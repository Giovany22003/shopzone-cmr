import './App.css'
import { BrowserRouter ,  Route, Routes } from 'react-router-dom';

import Header from "./component/header.js";
import Articles from "./page/articles.js";
import Contact from "./page/contact.js";
import Home from "./page/home.js";
import Like from "./page/like.js";
import Inscription from "./page/inscription.js"
import Faq from "./page/faq.js";
import Panier from "./component/panier.js";
import { Button } from 'bootstrap';
import Connexion from './page/connexion.js';
import DEtailEnvoie from './DetailEnvoie.js';
import Vetement1  from './page/Vetement1.js';
import Vetement2 from './page/Vetement2.js';
import Vetement3 from './page/Vetement3.js';
import Vetement4  from './page/Vetement4.js';




function App() {
 
  return (
    <div className="App">
       <BrowserRouter>
        <Header/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/articles" element={<Articles/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/like" element={<Like/>}/>
          <Route path="/inscription" element={<Inscription/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/panier" element={<Panier/>}/>
          <Route path='/contact' element={<span>+237 695128036</span>}/>
          <Route path="/contact" element={<span>+237 695128036</span>}/>
          <Route path='/contact' element={<span>shopzone@gmail.com</span>}/>
          <Route path='/articles' element={<Button/>}/>
          <Route path='/connexion'element={<Connexion/>}/>
            <Route path="/inscription" element={<Inscription/>}/>
           
           <Route path='/Vetement1' element={<Vetement1/>} />
          <Route path='/Vetement2' element={<Vetement2/>} />
           <Route path='/Vetement3' element={<Vetement3 />} />
           <Route path='/Vetement4' element={<Vetement4 />} />
          <Route path='/DetailEnvoie.js' element={<DEtailEnvoie/>}/>
           

         
        </Routes>
       </BrowserRouter>

         
    </div>
  );
}

export default App;
