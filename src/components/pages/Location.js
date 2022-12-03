import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
const Location = () => {
    return (
        <>
        <Container>
            <h1 className="h1LocationTitle">Estamos aquí</h1>
            <iframe title="restaurantLocationMap" className="mapHolder" width="100%" height="400px" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=19.4935247, -99.1465932&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed">Nuestra dirección</iframe>
            <ListGroup>
                <ListGroup.Item className="listStyle">Dirección: Calle 1234 Av los Salvadores, Cali</ListGroup.Item>
                <ListGroup.Item className="listStyle">Teléfono: (602)522-2325, (602)344-2456</ListGroup.Item>
            </ListGroup>
        </Container>
        </>
    )
};
export default Location;