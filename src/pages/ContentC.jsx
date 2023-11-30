import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const AppContent = () => {
  return (
    <Content className="site-layout-background" style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
      {/* Main content goes here */}
    </Content>
  );
};

export default AppContent;

