import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Links from "./Links";

const TopBar = () => {
  return (
    <Navbar expand="lg" bg="primary" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand href={Links.Home}>Thomas Harmeyer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={Links.Home}>About Me</Nav.Link>
            <Nav.Link href="projects">Personal Projects</Nav.Link>
            <NavDropdown title="Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item href={Links.Algorithms.BFS}>
                DFS
              </NavDropdown.Item>
              <NavDropdown.Item href={Links.Algorithms.BFS}>
                BFS
              </NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
              <NavDropdown.Item href={Links.Algorithms.Dijkstra}>
                Dijkstra's
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
