import { Nav } from "react-bootstrap";
//import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <>
            <div className="navMenu">
                <div className="navLogoContainer">
                        <img className="navLogoImg" src="images/restaurantlogo.jpg" alt="restaurant brand"/>
                </div>
                <Nav defaultActiveKey='/'>
                    <Nav.Item className="navLink">
                        <Nav.Link as='a' href='/'>Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navLink">
                        <Nav.Link href="/contact">Contacto</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="navLink"> 
                        <Nav.Link href="/location">Dirección</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </>
    )
}
export default Header;