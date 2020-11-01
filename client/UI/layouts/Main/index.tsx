import React from 'react';
import { Layout } from 'antd';

import './styles.css';

interface IProps {
  header?: () => React.ReactNode;
  body?: () => React.ReactNode;
  footer?: () => React.ReactNode;
}

export const MainLayout: React.FC<IProps> = ({
  header: renderHeader,
  body: renderBody,
  footer: renderFooter,
}) => (
  <div className="main">
    {renderHeader && renderHeader()}
    <Layout>
      <Layout.Content className="content">
        {renderBody && renderBody()}
      </Layout.Content>
    </Layout>
    {renderFooter && renderFooter()}
  </div>
);
