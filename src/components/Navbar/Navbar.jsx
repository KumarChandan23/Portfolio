import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar expand="lg" className='fs-4' style={{ backgroundColor: '#74afd9' }}>
      <Container>
        <Navbar.Brand href="/home" className='text-light fs-5 bi bi-house'> Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className='ms-auto'>
            <Nav.Link href="/skills" className='text-light'>Skills</Nav.Link>
            <Nav.Link href="/contact" className='text-light'>Contact</Nav.Link>
            <Nav.Link href="/about" className='text-light'>About</Nav.Link>
            <Nav.Link href="/project" className='text-light'>Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;