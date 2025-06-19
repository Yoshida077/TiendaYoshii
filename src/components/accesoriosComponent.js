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

const accesorios = [
  {
    id: 1,
    nombre: "Gorra Clásica",
    descripcion: "Perfecta para el sol y con estilo urbano.",
    imagen: "/assets/images/accesorio1.jpeg",
    precio: "$15.00",
  },
  {
    id: 2,
    nombre: "Mochila Moderna",
    descripcion: "Funcional y con mucho espacio.",
    imagen: "/assets/images/accesorio2.jpeg",
    precio: "$35.00",
  },
  {
    id: 3,
    nombre: "Reloj Deportivo",
    descripcion: "Resistente al agua y multifuncional.",
    imagen: "/assets/images/accesorio3.jpeg",
    precio: "$40.00",
  },
];

const AccesoriosComponent = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Accesorios</h2>
      <Row>
        {accesorios.map((item) => (
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

export default AccesoriosComponent;