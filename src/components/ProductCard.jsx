import React from "react";

const ProductCard = ({ product, onDelete, onEdit }) => {
  return (
    <div className="card">

      <img src={product.image} alt={product.model} />

      <h3>
        {product.make} {product.model}
      </h3>

      <p>Year: {product.year}</p>

      <p>Color: {product.color}</p>

      <p className="price">${product.price}</p>

      <div className="card-buttons">
        <button
          className="edit-btn"
          onClick={() => onEdit(product.id)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
};

export default ProductCard;