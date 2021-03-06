import { Form } from '@themesberg/react-bootstrap'

const AgregarCobrador = () => {
    
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
        </Form>
    )
}

export default AgregarCobrador