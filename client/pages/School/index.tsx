import React from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '@modules/commons/Header';
import { Footer } from '@modules/commons/Footer';
import { MainLayout } from '@UI/layouts/Main';

import { CardsList } from './modules/CardList';

const Mainpage: React.FC = () => {
  const history = useHistory();

  const handleClick = React.useCallback(
    symbol => history.push(`/booking/${symbol}`),
    [history],
  );
  return (
    <MainLayout
      header={() => <Header />}
      body={() => (
        <>
          <CardsList onClick={handleClick} />
        </>
      )}
      footer={() => <Footer />}
    />
  );
};

export default Mainpage;
