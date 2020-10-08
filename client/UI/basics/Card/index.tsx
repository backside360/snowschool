/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';

import './styles.css';

export type IProps = {
  name?: string;
  exchange?: string;
  marketCapitalization?: number;
  ticker: string;
  onClick?: (symbol: string) => void;
};

export const BookingCard: React.FC<any> = ({ name, training, onClick }) => {
  const history = useHistory();

  return (
    <Card
      title={name}
      headStyle={{ display: 'flex', justifyContent: 'center' }}
      style={{ width: '400px', height: '100%', borderRadius: '10px' }}
    >
      {training.map((workout: any) => (
        <div className="training_col">
          <a
            className="training_link"
            onClick={e =>
              //@ts-ignore
              history.push(`/booking/${e.target.innerText}`)
            }
          >
            {workout}
          </a>
        </div>
      ))}
    </Card>
  );
};
