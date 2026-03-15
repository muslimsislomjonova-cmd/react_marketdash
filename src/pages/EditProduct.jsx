import React,{useState,useEffect} from "react";
import {getProduct, updateProduct} from "../services/api";
import {useParams,useNavigate} from "react-router-dom";

const EditProduct = () => {

 const {id} = useParams();
 const navigate = useNavigate();

 const [form,setForm] = useState({});

 useEffect(()=>{
  loadProduct();
 },[]);

 const loadProduct = async ()=>{
  const res = await getProduct(id);
  setForm(res.data);
 }

 const handleChange = (e)=>{
  setForm({...form,[e.target.name]:e.target.value});
 }

 const handleSubmit = async(e)=>{
  e.preventDefault();

  await updateProduct(id,form);

  navigate("/products");
 }

 return(

  <form onSubmit={handleSubmit}>

   <input name="make" value={form.make} onChange={handleChange}/>
   <input name="model" value={form.model} onChange={handleChange}/>
   <input name="year" value={form.year} onChange={handleChange}/>
   <input name="price" value={form.price} onChange={handleChange}/>
   <input name="color" value={form.color} onChange={handleChange}/>
   <input name="image" value={form.image} onChange={handleChange}/>

   <button>Update</button>

  </form>

 )

}

export default EditProduct;