import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Products = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
    console.log(products);
  };

  useEffect(() => {
    getDataProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>My Products </h1>
        {products.map((produk) => (
          <div className="col-3 mb-4 ">
            <Card className="Card">
              <Card.Img variant="top" src={produk.image} key={produk.id} />
              <Card.Body>
                <Card.Title>{produk.title}</Card.Title>
                <Card.Text>${produk.price}</Card.Text>
                <NavLink to={`/product/${produk.id}`} variant="primary">
                  Buy Now
                </NavLink>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
