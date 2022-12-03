import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
    return (
        <Container className='jumbotron'>
            <h1 className='restaurantBrandHome'>Restaurante</h1>
            <Row className="homeRow justify-content-md-center">
                <Col>
                    <div>
                        <img className='jumbotronDishPicture' src='images/LuRouFan.jpg' alt='Lu Rou Fan dish'/>
                    </div>
                </Col>
                <Col>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}
export default Home;