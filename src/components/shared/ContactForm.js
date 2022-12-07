import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { db } from "../../config/firebase.js";
import { addDoc, collection } from "firebase/firestore";


const ContactForm = () => {
    return (
        <>
            <Container className="contactContainer">
                <Form onSubmit={sendData}>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control id="namefield" className="nameField" type="text" placeholder="¿Cómo te llamas?" />
                        <Form.Text className="text-muted">
                            O ¿cómo prefieres ser llamado?
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Tel</Form.Label>
                        <Form.Control id="telephonefield" className="nameField" type='number' placeholder="Tel o Cel"></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control id="emailfield" className="nameField" type="email" placeholder="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control id="msgfield" className='messageField' as="textarea" placeholder="Escribe aquí tu mensaje, o especifica tu reserva" />
                        <Button id="sendButton" className="contactButtonStyling" variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form.Group>
                </Form>
                <Container>
                    <img alt='orderfood' width='600px' src='images/AsianOrderFood.jpeg' />
                </Container>
            </Container>
        </>
    )
};


const sendData = async (event) => {
    console.log("enviar datos");
    event.preventDefault();
    try {
        let newClient = {
            name: document.getElementById('namefield').value,
            tel: document.getElementById('telephonefield').value,
            email: document.getElementById('emailfield').value,
            msg: document.getElementById('msgfield').value
        }
        const client = collection(db, "Clients");
        const resp = await addDoc(client, newClient);
        console.log("Exitoso");
        return resp;
    } catch (e) {
        console.error("Hubo un error");
        console.error(e);
    }
}

export default ContactForm;