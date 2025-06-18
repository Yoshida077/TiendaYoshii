import React from "react";
import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardText, Button } from "reactstrap";

const productos = [
  {
    id: 1,
    nombre: "Conjunto Deportivo",
    descripcion: "Cómodo y elegante para el día a día.",
    imagen: "/assets/images/conjunto1.jpeg",
    precio: "$45.00"
  },
  {
    id: 2,
    nombre: "Conjunto Casual",
    descripcion: "Perfecto para una salida informal.",
    imagen: "/assets/images/conjunto2.jpg",
    precio: "$55.00"
  },
  {
    id: 3,
    nombre: "Conjunto pepa",
    descripcion: "Perfecto para una salida pepa.",
    imagen: "/assets/images/conjunto3.jpeg",
    precio: "$75.00"
  }
  // Puedes añadir más productos aquí
];

const ConjuntosComponent = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Conjuntos</h2>
      <Row>
        {productos.map((item) => (
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