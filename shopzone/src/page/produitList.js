import React, { useState } from 'react';
import ProductCart from './productCart';
import Pagination from './pagination';
import './produitList.css';

const ProduitList = (/*{AjoutFavorites}*/) => {
  const products = [
    { id: 1, name: "Chemise", image: "/Tip1.jpeg", price: 5000, sizes: ['S', 'M', 'L'] },
    { id: 2, name: "T-Shirt", image: "/Tip4.jpeg", price: 6000, sizes: ['M', 'L', 'XL'] },
    { id: 3, name: "Polo", image: "/Tip3.jpeg", price: 8000, sizes: ['S', 'M', 'L'] },
     { id: 4, name: "Chemise", image: "/Tip1.jpeg", price: 5000, sizes: ['S', 'M', 'L'] },
      { id: 5, name: "Chemise n1", image: "/Tip1.jpeg", price: 5000, sizes: ['S', 'M', 'L'] },
       { id: 6, name: "Chemise n2", image: "/Tip1.jpeg", price: 5000, sizes: ['S', 'M', 'L'] },
    // Ajoutez d'autres produits ici
  ]; 

  const itemsPerPage = 3; // Nombre de produits par page 
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [panier, setPanier] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; // Vérifie les limites
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const AjoutAuPanier = (product) => {
    setPanier([...panier, product]);
    /*alert(`${product.name} ajouté au panier`);*/
  };

  const AjoutAuxFavorites = (product) => {
    setFavorites([...favorites, product]);
    alert(`${product.name} ajouté aux favoris`);
  };

  return (
    <div className='section'>
      <h1>Liste des Produits</h1>
      <p>Notre sélection de produits soigneusement choisis est conçue pour répondre à vos besoins et préférences. Chaque article de notre collection représente notre engagement envers la qualité, la fonctionnalité et le style. Que vous recherchiez des essentiels du quotidien ou quelque chose d'unique, nous avons quelque chose<br></br>
       pour tous les goûts et toutes les exigences.</p>
      <div  className="produit">
        {currentProducts.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            AjoutAuPanier={AjoutAuPanier}
            AjoutFavorites={AjoutAuxFavorites}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
      );
};
export default ProduitList;