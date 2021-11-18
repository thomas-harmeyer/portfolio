import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const BottomBar = () => {
  return (
    <footer>
      <Container fluid className="p-0">
        <Navbar
          bg="dark"
          sticky="bottom"
          variant="dark"
          className="justify-content-md-center"
        >
          <Row className="m-2">
            <Col>Thomas Harmeyer</Col>
            <Col>thomasmharmeyer@gmail.com</Col>
            <Col>262-444-2422</Col>
          </Row>
        </Navbar>
      </Container>
    </footer>
  );
};

export default BottomBar;
