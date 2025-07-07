import React from 'react';
import { WiDirectionLeft } from "react-icons/wi";
import { WiDirectionRight } from "react-icons/wi";


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ marginRight: '10px' }}
      >
        <WiDirectionLeft />
      </button>
       
      <span>{currentPage} / {totalPages}</span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ marginLeft: '10px' }}
      >
     <WiDirectionRight />
      </button>
    </div>
  );
};

export default Pagination;