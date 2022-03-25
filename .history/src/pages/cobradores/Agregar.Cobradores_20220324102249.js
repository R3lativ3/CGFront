import React, {useState} from 'react'
import { Form, Breadcrumb, Button } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const AgregarCobrador = () => {

    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [dpi, setDpi] = useState('')
    const [telefono, setTelefono] = useState('')

    const mostrar = async () => {
        const resp = await axios.post('http://localhost:8000/api/cobradores', {
            nombres,
            apellidos,
            dpi,
            telefono
        })
        console.log(resp)
    }

    return (
        <div>
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <div className="d-block mb-4 mb-xl-0">
                <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                    <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                    <Breadcrumb.Item>Cobradores</Breadcrumb.Item>
                    <Breadcrumb.Item active>Todos</Breadcrumb.Item>
                </Breadcrumb>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                <h1 className="fs-1">Cobradores</h1>
                </div>
                <hr/>
            </div>
            <Form className="row g-3">
                <Form.Group className="mb-3 col-md-6">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setNombres(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3 col-md-6">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control  onChange={(e) => setApellidos(e.target.value)}/>
                </Form.Group>
                <Form.Group className="col-md-6">
                    <Form.Label>DPI</Form.Label>
                    <Form.Control type="email" onChange={(e) => setDpi(e.target.value)}/>
                </Form.Group>
                <Form.Group className="col-md-6">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control onChange={(e) => setTelefono(e.target.value)}/>
                </Form.Group>
                <Button variant="success" color="dark" className="mt-5 w-100" onClick={mostrar}>Block</Button>
            </Form>
        </div>
    )
}

export default AgregarCobrador