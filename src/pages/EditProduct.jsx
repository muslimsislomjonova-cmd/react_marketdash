import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct, updateProduct } from "../services/api";
import "./EditProduct.scss";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const loadProduct = async () => {
      const res = await getProduct(id);
      setProduct(res.data);
    };
    loadProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, product);
    navigate("/products");
  };

  return (
    <div className="edit-container">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="make"
          value={product.make || ""}
          onChange={handleChange}
          placeholder="Make"
        />
        <input
          name="model"
          value={product.model || ""}
          onChange={handleChange}
          placeholder="Model"
        />
        <input
          name="price"
          value={product.price || ""}
          onChange={handleChange}
          placeholder="Price"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditProduct;