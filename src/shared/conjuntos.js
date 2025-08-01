import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

const ConjuntosComponent = (props) => {
  const conjuntos = props.conjuntos || []; // para evitar errores si no hay datos

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Conjuntos</h2>
      <Row>
        {conjuntos.map((item) => (
          <Col md="6" lg="4" className="mb-4" key={item.id}>
            <Card className="h-100">
              <CardImg top src={item.imagen} alt={item.nombre} />
              <CardBody>
                <CardTitle tag="h5">{item.nombre}</CardTitle>
                <CardText>{item.descripcion}</CardText>
                <CardText className="text-primary fw-bold">{item.precio}</CardText>
                <Button color="dark">Agregar al carrito</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ConjuntosComponent;
