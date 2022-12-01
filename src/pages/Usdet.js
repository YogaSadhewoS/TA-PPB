import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Usdet = () => {
  const { id } = useParams();
  const [usdet, setUsdet] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsdet = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/users/${id}`);
      setUsdet(await response.json());
      setLoading(false);
    };
    getUsdet();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowUsdet = () => {
    return (
      <>
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {usdet.username}
              </Card.Subtitle>
              <hr></hr>
              <Card.Text>Email: {usdet.email}</Card.Text>
              <Card.Text>Password: {usdet.password}</Card.Text>
              <NavLink to={`/user`} className="btn btn-dark">Back</NavLink>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowUsdet />}</div>
      </div>
    </div>
  );
};

export default Usdet;
