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
  });

  return (
    <div className="container">
      <div className="row">
        <h1>My Products </h1>
        {products.map((produk) => (
          <div className="col-3 mb-4 ">
            <CardProduct
              key={produk.id}
              title={produk.title}
              price={produk.price}
              description={produk.description}
              image={produk.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function CardProduct(props) {
  return (
    <Card className="Card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.price}</Card.Text>
        <NavLink to={"/product"} variant="primary">
          Buy Now
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default Products;
