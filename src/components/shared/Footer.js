import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (<>
        <Navbar fixed='bottom' bg="light" expand="lg">
      <Container className='footerContainer'>
        <Nav.Link className='footerNavLink' href="/">Inicio</Nav.Link>
        <Nav.Link className='footerNavLink' href="contact">Contacto</Nav.Link>
        <Nav.Link className='footerNavLink' href="location">Location</Nav.Link>
      </Container>
    </Navbar>
    </>)
};
export default Footer;