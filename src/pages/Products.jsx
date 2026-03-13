import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { useNavigate } from "react-router-dom";
import "../App.scss"; 

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = (id) => {
    console.log("Delete clicked for id:", id); // UI’da tugma mavjud
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container">
      {loading ? (
        <div className="loading-container">
          <p className="loading-text">Loading products... ☕</p>
        </div>
      ) : (
        <>
          <h1>Car Catalog</h1>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>
                    <img src={p.image} alt={p.model} />
                  </td>
                  <td>{p.make}</td>
                  <td>{p.model}</td>
                  <td>{p.year}</td>
                  <td>${p.price.toLocaleString()}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(p.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Products;