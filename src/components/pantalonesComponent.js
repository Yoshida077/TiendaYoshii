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
  Button,
} from "reactstrap";

const pantalones = [
  {
    id: 1,
    nombre: "Pantalón Jeans Clásico",
    descripcion: "Perfecto para un look casual.",
    imagen: "/assets/images/pantalon1.jpeg",
    precio: "$30.00",
  },
  {
    id: 2,
    nombre: "Pantalón Cargo Verde",
    descripcion: "Ideal para actividades al aire libre.",
    imagen: "/assets/images/pantalon2.jpeg",
    precio: "$35.00",
  },
  {
    id: 3,
    nombre: "Pantalón Deportivo Negro",
    descripcion: "Cómodo y funcional para el día a día.",
    imagen: "/assets/images/pantalon3.jpeg",
    precio: "$28.00",
  },
];

const PantalonesComponent = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Pantalones</h2>
      <Row>
        {pantalones.map((item) => (
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

export default PantalonesComponent;