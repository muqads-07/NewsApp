import React from 'react';
import '../styles/pagination.css'; // Add styles for pagination

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    return (
        <div className="pagination">
            <button
                disabled={currentPage === 1}
                onClick={() => handlePageClick(currentPage - 1)}
            >
                Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    className={currentPage === index + 1 ? 'active' : ''}
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageClick(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
