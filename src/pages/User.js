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
        <h1>List User </h1>
        {users.map((pengguna) => (
          <div className="col-5 mb-4 ">
            <Card className="Card">
              <Card.Body>
                <Card.Title>{pengguna.name.lastname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {pengguna.username}
                </Card.Subtitle>
                <Card.Text>{pengguna.email}</Card.Text>
                <Card.Text>{pengguna.password}</Card.Text>
                <NavLink to={`/usdet/${pengguna.id}`}>Card Link</NavLink>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

// function UserList(prop) {
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Body>
//         <Card.Title>{prop.name}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">
//           {prop.username}
//         </Card.Subtitle>
//         <Card.Text>{prop.email}</Card.Text>
//         <Card.Text>{prop.password}</Card.Text>
//         <NavLink to={`/usdet/${prop.id}`}>Card Link</NavLink>
//       </Card.Body>
//     </Card>
//   );
// }

export default User;
