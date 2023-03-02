import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function BrandExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>ISRO 🚀 API Apllication</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default BrandExample;