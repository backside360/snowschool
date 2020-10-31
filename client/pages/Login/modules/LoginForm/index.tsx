import React from 'react';
import { Button, Form, Input } from 'antd';

import './styles.css';
import api from '@services/api';

export const LoginForm = ({ handleClick }) => {
  const onFinish = async values => {
    const auth = await api.user.getUser(values);

    handleClick(auth);
  };
  return (
    <div className="login_form">
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Логин"
          name="username"
          rules={[{ required: true, message: 'Логин плиз' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Пароль бы не мешал' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
