import React from 'react';
import { Tag, Popover, Card, Typography } from 'antd';

import './styles.css';

const { Text } = Typography;

export type IProps = {
  data: any;
  index: number;
  date: string;
};

export const TrainingList: React.FC<IProps> = ({ index, date, data }) => {
  const students = (
    <div className="students">
      <p key={index}>{(index ? ', ' : '') + data.name}</p>
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
          Время: <Text strong>{data.time}</Text>
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
