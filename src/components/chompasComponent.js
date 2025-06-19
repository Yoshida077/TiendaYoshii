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

const chompas = [
  {
    id: 1,
    nombre: "Chompa de Lana",
    descripcion: "Ideal para el clima frío, suave y abrigada.",
    imagen: "/assets/images/chompa1.jpeg",
    precio: "$40.00",
  },
  {
    id: 2,
    nombre: "Chompa Deportiva",
    descripcion: "Perfecta para entrenar o usar de forma casual.",
    imagen: "/assets/images/chompa2.jpeg",
    precio: "$38.00",
  },
  {
    id: 3,
    nombre: "Chompa con Capucha",
    descripcion: "Cómoda, con estilo urbano y moderno.",
    imagen: "/assets/images/chompa3.jpeg",
    precio: "$42.00",
  },
];

const ChompasComponent = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Chompas</h2>
      <Row>
        {chompas.map((item) => (
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

export default ChompasComponent;