import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from "reactstrap";
import { FaTrash } from "react-icons/fa";

// Productos de ejemplo (puedes reemplazar con props o estado global más adelante)
const productosCarrito = [
  {
    id: 1,
    nombre: "Camiseta Blanca",
    precio: 25.0,
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Pantalón Negro",
    precio: 45.0,
    cantidad: 2,
  },
];

const CarritoComponent = () => {
  const total = productosCarrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <ListGroup>
            {productosCarrito.map((item) => (
              <ListGroupItem key={item.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.nombre}</strong> - {item.cantidad} x ${item.precio.toFixed(2)}
                </div>
                <Button color="danger" size="sm">
                  <FaTrash />
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
          <div className="text-right mt-3">
            <h5>Total: ${total.toFixed(2)}</h5>
            <Button color="success">Proceder al pago</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CarritoComponent;