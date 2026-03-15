import React, {useEffect,useState} from "react";
import {getProducts, deleteProduct} from "../services/api";
import ProductCard from "../components/ProductCard";
import {useNavigate} from "react-router-dom";

const Products = () => {

  const [products,setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () =>{
    const res = await getProducts();
    setProducts(res.data);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  const handleDelete = async(id)=>{
    await deleteProduct(id);
    fetchData();
  }

  const handleEdit = (id)=>{
    navigate(`/edit/${id}`);
  }

  return (
    <div>

      <button className="add-btn" onClick={()=>navigate("/add")}>
 Add Product
</button>

      <div className="grid">
        {
          products.map((p)=>(
            <ProductCard
              key={p.id}
              product={p}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Products;