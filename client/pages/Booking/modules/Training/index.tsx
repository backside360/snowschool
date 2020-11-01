/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Col,
  Row,
  message,
  Skeleton,
  Typography,
  Space,
} from 'antd';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import { useHistory } from 'react-router-dom';

import api from '@services/api';

import './styles.css';

const { Option } = Select;

export const Training = (props: any) => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<any>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const { times, speciality } = props;

  useEffect(() => {
    (async () => {
      const data = await api.training.get();
      setTraining(data[speciality]);
      setLoading(false);
      setVisible(true);
    })();
  }, []);

  const onFinish = async (values: any) => {
    const date = values.date.format('L');

    await api.training.post({ ...values, type: speciality, date: date });

    await message.success(
      `Вы успешно записались на тренировку в ${values.place}`,
      1.5,
    );

    await message.info('Перенаправляем на главную...', 1);
    history.push('/');
  };

  return !loading ? (
    <div className="training_form">
      <Row justify="center">
        <Col sm={3}>
          <Typography.Title level={5}>{speciality}</Typography.Title>

          <Form layout="vertical" name="basic" onFinish={onFinish}>
            <Form.Item
              label="Ваше имя"
              name="name"
              rules={[{ required: true, message: 'Укажите Ваше имя' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Место тренировки"
              name="place"
              rules={[{ required: true, message: 'Укажите место тренировки' }]}
            >
              <Select style={{ width: '100%' }}>
                {training.map((place: any) => (
                  <Option value={place}>{place}</Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Выберите дату"
              name="date"
              rules={[{ required: true, message: 'Укажите дату' }]}
            >
              <DatePicker
                locale={locale}
                style={{ width: '100%' }}
                format={'DD-MM-YYYY'}
              />
            </Form.Item>
            <Form.Item
              label="Доступное время"
              name="time"
              rules={[{ required: true, message: 'Укажите время' }]}
            >
              <Select style={{ width: '100%' }}>
                //@ts-ignore
                {times.map((time, i) => (
                  <Option value={time}>{time}</Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <div className="form_buttons">
                <Space direction="vertical" align="center">
                  <Col xs={24}>
                    <Button type="primary" htmlType="submit">
                      Записаться
                    </Button>
                  </Col>
                  <Col xs={24}>
                    <Button type="primary" onClick={history.goBack}>
                      Назад
                    </Button>
                  </Col>
                </Space>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  ) : (
    <Skeleton active></Skeleton>
  );
};
