import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Skeleton, Empty } from 'antd';

import { Footer } from '@modules/commons/Footer';
import { MainLayout } from '@UI/layouts/Main';
import { Header } from '@modules/commons/Header';
import api from '@services/api';

import { Schedule } from './modules/Schedule';
import { Content } from './UI/Layout/Content';
import { EmptyCard } from '@UI/basics/EmptyCard';
import moment from 'moment';

const Head = () => <Header />;

export const BookingInfo: React.FC<any> = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [schedules, setSchedule] = useState<any>([]);

  useEffect(() => {
    api.training.getSchedule(id).then(data => {
      data.map(training =>
        moment(training.date).isSameOrAfter(moment().format('YYYY-MM-DD'))
          ? setSchedule(oldSchedule => [...oldSchedule, training])
          : setSchedule([]),
      );
      setLoading(false);
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
      header={Head}
      body={() =>
        loading ? (
          <Skeleton active />
        ) : (
          <Content>
            {schedules.length !== 0 ? (
              schedules.map(schedule => (
                <Schedule
                  key={schedule.id}
                  title={id}
                  schedule={schedule}
                  date={normalizeDate(schedule.date)}
                />
              ))
            ) : (
              <EmptyCard description="Пока нет запланированных тренировок" />
            )}
          </Content>
        )
      }
      footer={() => <Footer />}
    />
  );
};
export default BookingInfo;
