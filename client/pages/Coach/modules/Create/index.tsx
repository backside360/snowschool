import React, { useState, useEffect } from 'react';
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
  TimePicker,
} from 'antd';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import { useHistory } from 'react-router-dom';

import api from '@services/api';

import './styles.css';
import moment from 'moment';

const { Option } = Select;

export type IProps = {
  visible: boolean;
  handleDrawerVisible: (value: boolean) => void;
};

export const Create = (props: any) => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);
  const [training, setTraining] = useState<any>(null);
  const [places, setPlaces] = useState<string[]>([]);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [speciality, setSpecitality] = useState<string>('');

  const { visible, handleDrawerVisible } = props;

  useEffect(() => {
    (async () => {
      const data = await api.training.get();
      setTraining(data);
      setLoading(false);
    })();
  }, []);

  const onFinish = async (values: any) => {
    console.log(values);

    const date = values.date.format('L');

    await api.training.post({
      ...values,
      type: speciality,
      date: date,
    });

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

  return !loading ? (
    <Drawer
      visible={visible}
      onClose={() => handleDrawerVisible(!visible)}
      width={300}
    >
      <div className="training_form">
        <Row justify="center">
          <Form layout="vertical" name="basic" onFinish={onFinish}>
            <Col sm={3}>
              <Form.Item
                label="Вид тренировки"
                name="type"
                rules={[{ required: true, message: 'Укажите вид тренировки' }]}
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
            <Col sm={3}>
              <Form.Item
                label="Место тренировки"
                name="place"
                rules={[
                  { required: true, message: 'Укажите место тренировки' },
                ]}
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
            <Col sm={3}>
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
            </Col>
            <Col sm={3}>
              <Form.Item
                label="Время тренировки"
                name="time"
                rules={[{ required: true, message: 'Укажите время' }]}
              >
                {/* <TimePicker defaultValue={moment()} format={'HH:mm'} /> */}
                <Input></Input>
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
                    <Button type="primary" onClick={history.goBack}>
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
  ) : (
    <Skeleton active></Skeleton>
  );
};
