import { useEffect, useState } from "react";
import { Card, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () =>{
    const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    getPacientes();
  }, []);

  async function getPacientes() {
    await fetch("http://localhost:8080/pacientes").then(
      (response) => response.json().then((data) => setPacientes(data))
    );
  }

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          {pacientes.map((p, index) => (
            <Card key={index} style={{ width: "12rem" }}>
              <Card.Img src="pokebola.png" />
              <Card.Body>
                <Card.Title>{p.nome}</Card.Title>
                <Link to={`/}`}>
                  <Button variant="dark" >
                    Descrição
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Home