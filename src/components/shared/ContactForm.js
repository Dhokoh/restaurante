import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="¿Cómo te llamas?" />
                    <Form.Text className="text-muted">
                        O ¿cómo prefieres ser llamado?
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Su mensaje aquí"className="" />
                </Form.Group>
                <Button className="contactButtonStyling" variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </>
    )
};
export default ContactForm;