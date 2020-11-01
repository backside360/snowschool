import React, { useEffect, useState } from 'react';

import { Header } from '@modules/commons/Header';
import { Footer } from '@modules/commons/Footer';
import { MainLayout } from '@UI/layouts/Main';
import { TrainingList } from './modules/TrainingList';
import { Filter } from './modules/Filter';
import api from '@services/api';
import moment from 'moment';
import { Create } from './modules/Create';
import { Row, Spin } from 'antd';
import { EmptyCard } from '@UI/basics/EmptyCard';
import { Content } from './UI/Layout/Content';

/**
 * Страница для Тренера
 */
export const Coach: React.FC = () => {
  const [data, setData] = useState([]);
  const [training, setTraining] = useState<any>(null);
  const [filter, setFilter] = useState<string>(moment().format('YYYY-MM-DD'));
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [placesLoading, setPlacesLoading] = useState<boolean>(true);

  const handleOpen = React.useCallback(() => setVisible(true), [visible]);
  const handleFilter = React.useCallback(value => setFilter(value), []);

  useEffect(() => {
    setLoading(true);
    api.training.getTrainingByDate(filter).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [filter]);

  useEffect(() => {
    api.training.get().then(data => {
      setTraining(data);
      setPlacesLoading(false);
    }) as any;
  }, []);

  const normalizeDate = (date: string): string => {
    return date
      .split('-')
      .reverse()
      .join('.');
  };

  return (
    <MainLayout
      header={() => <Header />}
      body={() => (
        <>
          <Create
            visible={visible}
            handleDrawerVisible={setVisible}
            data={data}
            training={training}
            updateData={setData}
            currentDate={filter}
          />
          <Filter value={filter} onChange={handleFilter} onOpen={handleOpen} />
          {placesLoading || loading ? (
            <Row justify="center">
              <Spin size="large" />
            </Row>
          ) : (
            <Content>
              {data.length !== 0 ? (
                data.map((trainings, index) => (
                  <TrainingList
                    data={trainings}
                    key={trainings.id}
                    index={index}
                    date={normalizeDate(trainings.date)}
                  />
                ))
              ) : (
                <EmptyCard description="Вы пока не запланировали тренировки на этот день" />
              )}
            </Content>
          )}
        </>
      )}
      footer={() => <Footer />}
    />
  );
};

export default Coach;
