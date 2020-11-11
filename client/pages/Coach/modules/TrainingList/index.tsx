import React, { useState, useEffect } from 'react';
import { Tag, Popover, Card, Typography } from 'antd';

import './styles.css';
import api from '@services/api';
import { ITraining } from '@services/api/types';

const { Text } = Typography;

export type IProps = {
  data: ITraining;
  index: number;
  date: string;
};

export const TrainingList: React.FC<IProps> = ({ index, date, data }) => {
  const [time, setTime] = useState<string>(data.time);

  useEffect(() => {
    if (time !== data.time) {
      api.training.update({ id: data.id, time });
    }
  }, [time]);

  const students = (
    <div className="students">
      <p key={index}>
        {data.name.length !== 0 ? data.name.join(',') : 'Пока никого'}
      </p>
    </div>
  );
  return (
    <div className="training_list">
      <Card
        title={data.type}
        extra={data.place}
        key={data.id}
        className="list_card"
      >
        <p>
          Дата: <Text strong>{date}</Text>
        </p>
        <p>
          Время:{' '}
          <Text editable={{ onChange: setTime }} strong>
            {time}
          </Text>
        </p>
        <p>
          Время:{' '}
          <Text editable={{ onChange: setTime }} strong>
            {data.coach}
          </Text>
        </p>
        <p>
          Ребятки:{' '}
          <Popover content={students} title="Имена" trigger="click">
            <Tag color={data.name?.length !== 0 ? '#87d068' : '#f50'}>
              {data.name?.length}
            </Tag>
          </Popover>
        </p>
      </Card>
    </div>
  );
};
