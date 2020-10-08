import React, { useEffect, useState } from 'react';

import { Header } from '@modules/commons/Header';
import { Footer } from '@modules/commons/Footer';
import { MainLayout } from '@UI/layouts/Main';
import { TrainingList } from './modules/TrainingList';
import { Filter } from './modules/Filter';
import api from '@services/api';
import moment from 'moment';
import { Create } from './modules/Create';

/**
 * Передать в фильтр колбэк onChange={setFilter}
 */

export const Coach: React.FC = () => {
  const [data, setData] = useState();
  const [filter, setFilter] = useState(moment().format('L'));
  const [visible, setVisible] = useState<boolean>(false);

  console.log(visible);

  useEffect(() => {
    (async () => {
      const data = await api.training.getAll();
      setData(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await api.training.getTrainingByDate(filter);
      setData(data);
    })();
  }, [filter]);

  return (
    <MainLayout
      header={() => <Header />}
      body={() => (
        <>
          <Create
            visible={visible}
            handleDrawerVisible={setVisible}
            data={data}
          />
          <Filter onChange={setFilter} handleDrawerVisible={setVisible} />
          {data ? <TrainingList data={data} /> : 'loading'}
        </>
      )}
      footer={() => <Footer />}
    />
  );
};

export default Coach;
