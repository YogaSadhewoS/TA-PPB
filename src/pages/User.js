import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const User = () => {
  const url = "https://fakestoreapi.com/users";
  const [users, setUsers] = useState([]);
  const getDataUsers = async () => {
    const response = await fetch(url);
    const dataUser = await response.json();
    setUsers(dataUser);
    console.log(users);
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="judul">List User </h1>
        {users.map((pengguna) => (
          <div className="col-5 mb-4 ">
            <Card className="Card">
              <Card.Body>
                <Card.Title>{pengguna.name.firstname} {pengguna.name.lastname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {pengguna.username}
                </Card.Subtitle>
                <NavLink to={`/usdet/${pengguna.id}`} className="btn btn-outline-dark">User Detail</NavLink>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
