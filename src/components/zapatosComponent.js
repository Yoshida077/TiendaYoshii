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

const zapatos = [
  {
    id: 1,
    nombre: "Zapatillas Urbanas",
    descripcion: "Estilo casual, ideales para uso diario.",
    imagen: "/assets/images/zapato1.jpeg",
    precio: "$50.00",
  },
  {
    id: 2,
    nombre: "Zapatos de Cuero",
    descripcion: "Elegantes y resistentes para ocasiones formales.",
    imagen: "/assets/images/zapato2.jpeg",
    precio: "$65.00",
  },
  {
    id: 3,
    nombre: "Zapatillas Deportivas",
    descripcion: "Comodidad y rendimiento para actividades físicas.",
    imagen: "/assets/images/zapato3.jpeg",
    precio: "$55.00",
  },
];

const ZapatosComponent = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Zapatos</h2>
      <Row>
        {zapatos.map((item) => (
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

export default ZapatosComponent;