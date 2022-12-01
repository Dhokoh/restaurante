import { Nav } from "react-bootstrap";
//import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <>
            <div>
                <Nav className="navMenu navLink align-content-center justify-content-end" defaultActiveKey='/'>
                    <div className="navLogoContainer">
                        <img className="navLogoImg" src="public/images/restaurantlogo.jpg" alt="restaurant logo"/>
                    </div>
                    <Nav.Item>
                        <Nav.Link as='a' href='/'>Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="contact">Contacto</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="location">Dirección</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </>
    )
}
export default Header;