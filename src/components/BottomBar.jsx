import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const BottomBar = () => {
  return (
    <footer>
      <Navbar bg="dark" sticky="bottom" variant="dark">
        <Container className="justify-content-md-center m-3">
          <Row className="m-2">
            <Col>Thomas Harmeyer</Col>
            <Col>thomasmharmeyer@gmail.com</Col>
            <Col>262-444-2422</Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
};

export default BottomBar;
