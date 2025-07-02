import React from "react";
import { Card, CardBody, CardTitle, CardImg, CardText, Spinner, Alert } from "reactstrap";

function RenderClothes({ c }) {
  return (
    <Card>
      <CardImg width="100%" src={c.image} alt={c.name} />
      <CardBody>
        <CardTitle tag="h5">{c.name}</CardTitle>
        <CardText>{c.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments }) {
  if (!comments || comments.length === 0) {
    return <p>No hay comentarios para esta prenda.</p>;
  }

  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comentarios</h4>
      <ul className="list-unstyled">
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const DetalleComponent = ({ c, comments, isLoading, errMess }) => {
  if (isLoading) {
    return (
      <div className="text-center my-5">
        <Spinner color="primary" />
        <p>Cargando comentarios...</p>
      </div>
    );
  }

  if (errMess) {
    return (
      <Alert color="danger" className="my-5 text-center">
        Error: {errMess}
      </Alert>
    );
  }

  if (c != null) {
    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderClothes c={c} />
          </div>
          <RenderComments comments={comments} />
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default DetalleComponent;
