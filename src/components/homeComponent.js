import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Spinner, Alert } from "reactstrap";

function RenderMenuItem({ clothes, onClick }) {
  return (
    <Card onClick={() => onClick(clothes.id)} style={{ cursor: "pointer" }}>
      <CardImg width="100%" src={clothes.image} alt={clothes.name} />
      <CardImgOverlay>
        <CardTitle tag="h5" className="text-white bg-dark bg-opacity-50 p-1 rounded">{clothes.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

const Home = ({ clothes, onClick, loading, error }) => {
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner color="primary" />
        <p>Cargando prendas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert color="danger" className="my-5 text-center">
        Error al cargar prendas: {error}
      </Alert>
    );
  }

  return (
    <div className="container">
      <div className="row">
        {clothes.map((item) => (
          <div key={item.id} className="col-12 col-sm-3 mb-4">
            <RenderMenuItem clothes={item} onClick={onClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
