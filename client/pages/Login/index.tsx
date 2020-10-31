import React from 'react';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import { Header } from '@modules/commons/Header';
import { Footer } from '@modules/commons/Footer';
import { MainLayout } from '@UI/layouts/Main';
import { LoginForm } from './modules/LoginForm';

const Login: React.FC = () => {
  const history = useHistory();

  const handleClick = React.useCallback(
    param => {
      if (!param.error) {
        window.localStorage.setItem('token', param.id);
        history.push(`/coach`);
      } else {
        message.error('Ошибка входа');
      }
    },
    [history],
  );

  return (
    <MainLayout
      header={() => <Header />}
      body={() => (
        <>
          <LoginForm handleClick={handleClick} />
        </>
      )}
      footer={() => <Footer />}
    />
  );
};

export default Login;
