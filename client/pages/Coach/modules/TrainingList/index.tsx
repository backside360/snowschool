import React from 'react';
import { Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;

export const TrainingList = props => {
  return (
    <>
      <h1>Тренировки</h1>

      <Table dataSource={props.data}>
        <Column title="Тренировка" dataIndex="type" key="type" />
        <Column title="Дата" dataIndex="date" key="date" />
        <Column
          title="Место"
          dataIndex="place"
          key="place"
          render={place => <Tag>{place}</Tag>}
        />
      </Table>
    </>
  );
};
