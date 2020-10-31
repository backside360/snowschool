import React, { useState } from 'react';
import {
  Form,
  Input,
  Drawer,
  Button,
  DatePicker,
  Select,
  Col,
  Row,
  message,
  Skeleton,
  Space,
} from 'antd';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';

import api from '@services/api';

import './styles.css';

import moment from 'moment';

const { Option } = Select;

export type IValues = {
  type: string;
  date: string;
  place: string;
  coach: string;
  time: string;
};

export type IProps = {
  visible: boolean;
  handleDrawerVisible: (value: boolean) => void;
};

export const Create: React.FC<any> = ({
  training,
  visible,
  handleDrawerVisible,
  updateData,
  currentDate,
}) => {
  const [places, setPlaces] = useState<string[]>([]);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [speciality, setSpecitality] = useState<string>('');

  const onFinish = async (values: IValues) => {
    await api.training.post({
      ...values,
      type: speciality,
    });

    if (values.date === currentDate) {
      await api.training.getTrainingByDate(values.date).then(data => {
        updateData(data);
      });
    }

    await message.success(
      `Вы успешно создали тренировку: ${values.place} на ${values.time}`,
      1.5,
    );
  };

  const handleSelectTraining = (place: string) => {
    setPlaces(training[place]);
    setSpecitality(place);
    setDisabled(false);
  };

  return (
    <Drawer visible={visible} onClose={() => handleDrawerVisible(!visible)}>
      <div className="training_form">
        <Row justify="center">
          <Form layout="vertical" name="basic" onFinish={onFinish}>
            <Col sm={3} md={24}>
              <Form.Item
                label="Вид тренировки"
                name="type"
                rules={[{ required: true, message: 'Укажи вид тренировки' }]}
              >
                <Select
                  style={{ width: '100%' }}
                  onSelect={(e: string) => handleSelectTraining(e)}
                >
                  <Option value="Батут">Батут</Option>
                  <Option value="Сноуборд">Сноуборд</Option>
                  <Option value="Скейтборд">Скейтборд</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col sm={3} md={24}>
              <Form.Item
                label="Место тренировки"
                name="place"
                rules={[{ required: true, message: 'Укажи место тренировки' }]}
              >
                <Select style={{ width: '100%' }} disabled={disabled}>
                  {!disabled
                    ? places.map((place: any) => (
                        <Option key={place} value={place}>
                          {place}
                        </Option>
                      ))
                    : null}
                </Select>
              </Form.Item>
            </Col>
            <Col sm={3} md={24}>
              <Form.Item
                label="Выберите дату"
                name="date"
                rules={[{ required: true, message: 'Укажи дату' }]}
              >
                <input type="date" className="training_form_date" />
              </Form.Item>
            </Col>
            <Col sm={3} md={24}>
              <Form.Item
                label="Время тренировки"
                name="time"
                rules={[{ required: true, message: 'Укажи время' }]}
              >
                <Input></Input>
              </Form.Item>
            </Col>
            <Col sm={3} md={24}>
              <Form.Item
                label="Кто будет тренировать"
                name="coach"
                rules={[{ required: true, message: 'Укажи тренера' }]}
              >
                <Select style={{ width: '100%' }}>
                  <Option value="Саша">Саша</Option>
                  <Option value="Миша">Миша</Option>
                  <Option value="Саша и Миша">Саша и Миша</Option>
                </Select>
              </Form.Item>
            </Col>
            <Form.Item>
              <div className="form_buttons">
                <Space direction="vertical" align="center">
                  <Col xs={24}>
                    <Button type="primary" htmlType="submit">
                      Создать треню
                    </Button>
                  </Col>
                  <Col xs={24}>
                    <Button
                      type="primary"
                      onClick={() => handleDrawerVisible(false)}
                    >
                      Назад
                    </Button>
                  </Col>
                </Space>
              </div>
            </Form.Item>
          </Form>
        </Row>
      </div>
    </Drawer>
  );
};
