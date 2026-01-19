import React,{ useState } from 'react'

const useAddItem = () => {

    const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
    image: null,
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProduct({
      ...product,
      [name]: files ? files[0] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };
  return {handleChange, handleSubmit}
}

export default useAddItem