// src/components/SearchPopup.js
import React, { useState } from 'react';
import './search.css';
import { IoSearch } from "react-icons/io5";

const Search = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Recherche:', searchTerm);
    onClose(); // Fermer le popup après la recherche
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Entrez un article"
        />
        <button  className="btn1"onClick={handleSearch}><IoSearch /></button>
        <button  className="btn2"onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Search;