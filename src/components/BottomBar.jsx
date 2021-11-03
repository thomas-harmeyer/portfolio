import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
const BottomBar = () => {
  return (
    <footer>
      <Navbar expand="sm" bg="dark" fixed="bottom" variant="dark">
        <Container className="justify-content-md-center">
          <Row>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <NavDropdown.Item>Thomas Harmeyer</NavDropdown.Item>
                <NavDropdown.Item>thomasmharmeyer@gmail.com</NavDropdown.Item>
                <NavDropdown.Item>262-444-2422</NavDropdown.Item>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
};

export default BottomBar;
