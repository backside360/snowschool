import React from 'react';
import { Row, Col, Layout, Typography } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

import MainLogo from '@static/images/--1.png';

import './styles.css';

export const Header: React.FC<any> = () => {
  const location = useLocation();
  return (
    <Layout.Header>
      <Row align="middle" gutter={[10, 0]}>
        <Col span={1}>
          <NavLink location={location} to="/">
            <img src={MainLogo} alt="" className="logo" />
          </NavLink>
        </Col>
        <Col xs={{ push: 4 }} md={{ push: 0 }}>
          <Typography.Title level={3}>Школа Сноуборда №1</Typography.Title>
        </Col>
      </Row>
    </Layout.Header>
  );
};
