import React from 'react';
import { Card, Empty, Row } from 'antd';

import './styles.css';

export type IProps = {
  description: string;
};

export const EmptyCard: React.FC<IProps> = ({ description }) => {
  return (
    <Row justify="center">
      <Card className="empty_card">
        <Empty description={description} />
      </Card>
    </Row>
  );
};
