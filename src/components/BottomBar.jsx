import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

const BottomBar = () => {
  return (
    <footer>
      <Navbar variant="dark" bg="dark">
        <Container fluid className="justify-content-md-center">
          <Navbar.Brand>
            <Row>
              <Col>Thomas Harmeyer</Col>
              <Col>thomasmharmeyer@gmail.com</Col>
              <Col>262-444-2422</Col>
            </Row>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  );
};

export default BottomBar;
