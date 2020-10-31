import React from 'react';
import { Button, Card, Input, Form, message } from 'antd';
import api from '@services/api';
import './styles.css';
import moment from 'moment';

export type IProps = {
  title: string;
  schedule: any;
  date: string;
};

export const Schedule: React.FC<IProps> = ({ title, schedule, date }) => {
  const [form] = Form.useForm();

  const isDatePast = moment(schedule.date).isBefore(moment());

  const onFinish = React.useCallback(
    async values => {
      await api.training.createAppointment({ ...values, id: schedule.id });
      form.resetFields();
      await message.success(
        `Вы записались на тренировку: ${schedule.place} , ${schedule.time}`,
        2.5,
      );
    },
    [schedule.id],
  );

  return (
    <Form
      form={form}
      key={schedule.id}
      onFinish={onFinish}
      className="schedule_form"
    >
      <Card title={title} extra={schedule.place} className="schedule_card">
        <p>
          Время: <span className="card_item">{schedule.time}</span>
        </p>
        <p>
          Дата: <span className="card_item">{date}</span>
        </p>
        <p>
          Тренер: <span className="card_item">{schedule.coach}</span>
        </p>
        <Form.Item
          label="Ваше имя"
          name="name"
          rules={[{ required: true, message: 'Укажите Ваше имя' }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Записаться на тренировку
        </Button>
      </Card>
    </Form>
  );
};
