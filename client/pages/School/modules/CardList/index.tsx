/* eslint-disable react/jsx-key */
import React from 'react';
import { Row, Col } from 'antd';

import { BookingCard } from '@UI/basics/Card';

export const CardsList: React.FC<any> = ({ onClick }) => {
  const serviсes = [
    {
      name: 'Записаться на тренировку',
      training: ['Сноуборд', 'Батут', 'Скейтборд'],
    },
    {
      name: 'О нашей школе',
      training: ['Площадки для тренировок', 'Наши тренера'],
    },
  ];
  return (
    <Row justify="space-around">
      {serviсes.map((service: any) => (
        <Col className="card">
          <BookingCard
            name={service.name}
            training={service.training}
            onClick={onClick}
          />
        </Col>
      ))}
    </Row>
  );
};
