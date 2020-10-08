import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import { Link, NavLink, useLocation } from 'react-router-dom';

import MainLogo from '@static/images/--1.png';
import './styles.css';

export const Footer = (): JSX.Element => {
  const { location } = useLocation();
  return (
    <Layout.Footer>
      <Row justify="space-between" align="middle">
        <Col>
          <NavLink location={location} to="/">
            <img src={MainLogo} alt="" className="logo" />
          </NavLink>
        </Col>
      </Row>
    </Layout.Footer>
  );
};
