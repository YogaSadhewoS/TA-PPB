import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Product = () => {

    const {id} = useParams();
    const url = 'https://fakestoreapi.com/products/${id}';
    const [product, setProduct] = useState([]);
    const getDataProduct = async () => {
      const response = await fetch(url);
      const dataProducts = await response.json();
      setProduct(dataProducts);
      console.log(product);
    };
  
    useEffect(() => {
      getDataProduct();
    },[input] );

    return(
        <div className="row">
        <h1>My Products </h1>
        {products.map((produk) => (
          <div className="col-3 mb-4 "><CardProduct 
          key={produk.id}
          title={produk.title}
          price={produk.price}
          description={produk.description}
          image={produk.image}
          />
      </div>
        ))}
      </div>
    );
}

export default Product;