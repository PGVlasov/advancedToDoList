import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavMenu: React.FC = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link color="primary" href="/">
            ToDoList
          </Nav.Link>
          <Nav.Link href="/about">Information</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
