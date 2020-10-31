import React from 'react';
import { Row, Col, Layout, Button } from 'antd';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

import MainLogo from '@static/images/--1.png';

import './styles.css';

export const Header: React.FC<any> = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Layout.Header>
      <Row align="middle" gutter={[10, 0]}>
        <Col span={1}>
          <NavLink location={location} to="/">
            <img src={MainLogo} alt="" className="logo" />
          </NavLink>
        </Col>
        {location.pathname !== '/coach' ? (
          <Col xs={{ push: 16 }} sm={{ push: 16 }} md={{ push: 20 }}>
            <Button onClick={() => history.push('/login')}>Войти</Button>
          </Col>
        ) : null}
      </Row>
    </Layout.Header>
  );
};
