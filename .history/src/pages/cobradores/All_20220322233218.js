import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb, Button } from '@themesberg/react-bootstrap';
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { Table, Card } from '@themesberg/react-bootstrap'
import axios from 'axios'

const AllCobradores = () => {
  const [cobradores, setCobradores] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getAll = async () => {
      try{
        const resp = await axios.get('http://localhost:8000/api/cobradores')
        console.log(resp)
        setCobradores(resp.data)
        setLoading(false)  
      }
      catch(e){
        setCobradores([])
        setLoading(false)
        console.log(e)
      }
    }

    getAll()

  }, [])


  return (
    <>
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
        <div className="col-4">
          <h1 className="fs-1">Cobradores</h1>
        </div>
        <div className="col-8">
          <div className="d-flex flex-row-reverse padd">
            <Button className="m-1" variant="primary" >Agregar</Button>
            <Button className="m-1" variant="primary" >Posiciones</Button>
          </div>
        </div>
        <hr/>
      </div>

      <Card className="col-12">
        { !loading ?
          <Table>
            <thead className="thead-light">
              <tr>
                <th className="border-0">Nombre</th>
                <th className="border-0">Telefono</th>
                <th className="border-0">Ruta</th>
                <th className="border-0">Sede</th>
                <th className="border-0">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-0">
                  <a href="#Unites States" className="d-flex align-items-center">
                    <div><span className="h6">Unites States</span></div>
                  </a>
                </td>
                <td className="border-0 fw-bold">106</td>
                <td className="border-0 text-danger">
                  <FontAwesomeIcon icon={faAngleDown} className="me-1" />
                  <span className="fw-bold">5</span>
                </td>
              </tr>
              <tr>
                <td className="border-0">
                  <a href="#Canada" className="d-flex align-items-center">
                    <div><span className="h6">Canada</span></div>
                  </a>
                </td>
                <td className="border-0 fw-bold">76</td>
                <td className="border-0 text-success">
                  <FontAwesomeIcon icon={faAngleUp} className="me-1" />
                  <span className="fw-bold">17</span>
                </td>
              </tr>
            </tbody>
          </Table>        
          : <p>Loading...</p>
        }

      </Card>
    </>
  );
};


export default AllCobradores