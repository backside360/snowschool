import React, { useState, useEffect } from 'react';
import { Tag, Popover, Card, Typography, Popconfirm, message } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';

import './styles.css';
import api from '@services/api';
import { ITraining } from '@services/api/types';

const { Text } = Typography;

export type IProps = {
  data: ITraining;
  index: number;
  date: string;
  updateData: (value: ITraining[]) => void;
};

/**
 *
 * Отображение списка тренировок для тренера
 */
export const TrainingList: React.FC<IProps> = ({
  index,
  date,
  data,
  updateData,
}) => {
  const [time, setTime] = useState<string>(data.time);

  useEffect(() => {
    if (time !== data.time) {
      try {
        api.training.update({ id: data.id, time });
        message.success('Изменения успешны');
      } catch (error) {
        message.error('Ошибка изменения времени');
      }
    }
  }, [time]);

  /**
   * Удаление тренировки из списка
   * @param id - идентификатор тренировки
   * @param date - дата для обновления списка тренировок
   */
  const onDelete = async (id, date) => {
    await api.training.delete(id);
    await api.training.getTrainingByDate(date).then(data => {
      updateData(data);
    });
  };

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
        actions={[
          <Popconfirm
            placement="top"
            title="Действительно хочешь удалить тренировку?"
            onConfirm={() => onDelete(data.id, data.date)}
            okText="Да"
            okButtonProps={{ size: 'middle' }}
            cancelButtonProps={{ size: 'middle' }}
            cancelText="Нет"
            key="delete"
          >
            <DeleteTwoTone key="delete" />
          </Popconfirm>,
        ]}
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
          Время: <Text strong>{data.coach}</Text>
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
