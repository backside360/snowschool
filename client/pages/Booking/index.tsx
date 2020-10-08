import React, { useState, useEffect } from 'react';
import { match as IMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { Footer } from '@modules/commons/Footer';
import { MainLayout } from '@UI/layouts/Main';
import { Header } from '@modules/commons/Header';
import { Training } from './modules/Training';
import { Schedule } from './modules/Schedule';

export const BookingInfo: React.FC<any> = () => {
  const [speciality, setSpeciality] = useState<string | undefined>('');

  const history = useHistory();

  useEffect(() => {
    setSpeciality(history.location.pathname.split('/').pop());
  }, [history, speciality]);

  const times = ['15-00', '17-00', '20-30'];

  return (
    <MainLayout
      header={() => <Header />}
      body={() => <Schedule speciality={speciality} />}
      footer={() => <Footer />}
    />
  );
};
export default BookingInfo;
