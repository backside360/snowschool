import React, { useMemo } from 'react';
import { Button, DatePicker, Typography } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import moment from 'moment';

import './styles.css';

const { Text } = Typography;

export type IProps = {
  onChange: (value: string) => void;
  onOpen: (value: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
};

export const Filter: React.FC<IProps> = ({ onChange, onOpen, value }) => {
  const date = useMemo(() => moment(value), [value]);

  return (
    <div className="filter">
      <Button onClick={onOpen}>Создать тренировку</Button>
      <Text strong>Выбери дату для просмотра тренировок</Text>
      <DatePicker
        size="large"
        value={date}
        className="date_picker"
        locale={locale}
        format={'DD-MM-YYYY'}
        onChange={date => onChange(date.format('YYYY-MM-DD'))}
      />
    </div>
  );
};
