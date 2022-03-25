import React from 'react'
import { Form, Breadcrumb } from '@themesberg/react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const AgregarCobrador = () => {

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
            <Form>
                <Form.Group className="mb-3 col-8">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3 col-8">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control  />
                </Form.Group>
            </Form>
        </div>
    )
}

export default AgregarCobrador