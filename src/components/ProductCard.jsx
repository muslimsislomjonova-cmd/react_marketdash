import { Link } from "react-router-dom";

function ProductCard({ product, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 15 }}>
      <img src={product.image} width="200" />

      <h3>
        {product.make} {product.model}
      </h3>

      <p>${product.price}</p>

      <Link to={`/edit/${product.id}`}>Edit</Link>

      <button onClick={() => onDelete(product.id)}>
        Delete
      </button>
    </div>
  );
}

export default ProductCard;