import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
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
          <p>
            {usdet.email}
            </p>
        </div>
        <div className="col-md-6">

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