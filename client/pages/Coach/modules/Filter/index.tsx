import React from 'react';
import { Button, DatePicker } from 'antd';
import moment from 'moment';

export type IProps = {
  onChange: (value: string) => void;
  handleDrawerVisible: (value: boolean) => void;
};

export const Filter = (props: IProps) => {
  const { onChange, handleDrawerVisible } = props;
  return (
    <div>
      <DatePicker
        size="large"
        defaultValue={moment()}
        format={'DD-MM-YYYY'}
        onChange={date => onChange(date.format('L'))}
      />
      <Button onClick={() => handleDrawerVisible(true)}>
        Создать тренировку
      </Button>
    </div>
  );
};
