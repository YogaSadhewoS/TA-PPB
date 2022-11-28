import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

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
  });

  return (
    <div className="container">
      <div className="row">
        <h1>List User </h1>
        {users.map((pengguna) => (
          <div className="col-5 mb-4 ">
            <UserList
              key={pengguna.id}
              email={pengguna.email}
              username={pengguna.username}
              password={pengguna.password}
            //   name={pengguna.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function UserList(prop) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{prop.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{prop.username}</Card.Subtitle>
          <Card.Text>{prop.email}</Card.Text>
          <Card.Text>{prop.password}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }

export default User;