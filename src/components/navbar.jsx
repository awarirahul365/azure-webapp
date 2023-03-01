import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{backgroundColor:'#b0c4de'}}>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#sapse" activ>SAP SE</Nav.Link>
            <Nav.Link href="#sapsharedtenant">SAP SHARED TENANT</Nav.Link>
            <Nav.Link href="#azurechina">AZURE CHINA</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default ColorSchemesExample;