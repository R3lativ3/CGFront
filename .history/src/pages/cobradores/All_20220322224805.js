
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';

import { PageTrafficTable, RankingTable } from "../../components/Tables";


export default () => {
  return (
    <>
      <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-xl-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Tables</Breadcrumb.Item>
            <Breadcrumb.Item active>Bootstrap tables</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Cobradores</h4>
        </div>
      </div>

      <Table>
  <thead className="thead-light">
    <tr>
      <th className="border-0">Country</th>
      <th className="border-0">All</th>
      <th className="border-0">All Change</th>
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
    <tr>
      <td className="border-0">
        <a href="#United Kingdom" className="d-flex align-items-center">
          <div><span className="h6">United Kingdom</span></div>
        </a>
      </td>
      <td className="border-0 fw-bold">147</td>
      <td className="border-0 text-success">
        <FontAwesomeIcon icon={faAngleUp} className="me-1" />
        <span className="fw-bold">10</span>
      </td>
    </tr>
    <tr>
      <td className="border-0">
        <a href="#France" className="d-flex align-items-center">
          <div><span className="h6">France</span></div>
        </a>
      </td>
      <td className="border-0 fw-bold">112</td>
      <td className="border-0 text-success">
        <FontAwesomeIcon icon={faAngleUp} className="me-1" />
        <span className="fw-bold">3</span>
      </td>
    </tr>
    <tr>
      <td className="border-0">
        <a href="#Japan" className="d-flex align-items-center">
          <div><span className="h6">Japan</span></div>
        </a>
      </td>
      <td className="border-0 fw-bold">115</td>
      <td className="border-0 text-danger">
        <FontAwesomeIcon icon={faAngleDown} className="me-1" />
        <span className="fw-bold">12</span>
      </td>
    </tr>
    <tr>
      <td className="border-0">
        <a href="#Germany" className="d-flex align-items-center">
          <div><span className="h6">Germany</span></div>
        </a>
      </td>
      <td className="border-0 fw-bold">220</td>
      <td className="border-0 text-danger">
        <FontAwesomeIcon icon={faAngleDown} className="me-1" />
        <span className="fw-bold">56</span>
      </td>
    </tr>
  </tbody>
</Table>
    </>
  );
};
