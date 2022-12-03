import ContactForm from "../shared/ContactForm";
import Container from "react-bootstrap/Container";

const Contact = () => {
    return (<>
        <Container>
            <h1 className="contactTitle">¿Qué se te ofrece?</h1>
            <ContactForm />
        </Container>
    </>)
};
export default Contact;