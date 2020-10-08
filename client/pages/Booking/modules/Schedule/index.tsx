import React, { useEffect, useState } from 'react';
import { Button, Card, Skeleton, Empty, Input, Form } from 'antd';
import api from '@services/api';

export type IProps = {
  speciality: string;
};

export const Schedule = (props: IProps) => {
  const { speciality } = props;
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<any>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [id, setId] = useState<number>(null);

  useEffect(() => {
    (async () => {
      const data = await api.training.getSchedule(speciality);
      setTraining(data);
      setLoading(false);
      setVisible(true);
    })();
  }, []);

  const onFinish = values => {
    console.log(values, id);
  };
  return loading ? (
    <Skeleton active />
  ) : training.length !== 0 ? (
    <div>
      {training.map(elem => (
        <Form key={elem.id} onFinish={onFinish}>
          <Card title={speciality} extra={elem.place} style={{ width: 300 }}>
            <p>Время: {elem.time}</p>
            <p>Дата: {elem.date}</p>
            <p>Тренер: {elem.coach}</p>
            <Form.Item
              label="Ваше имя"
              name="name"
              rules={[{ required: true, message: 'Укажите Ваше имя' }]}
            >
              <Input />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => setId(elem.id)}
            >
              Записаться на тренировку
            </Button>
          </Card>
        </Form>
      ))}
    </div>
  ) : (
    <Empty description="Пока нет запланированных тренировок" />
  );
};
