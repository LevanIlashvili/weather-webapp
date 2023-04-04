import React from 'react';
import type { FC } from 'react';
import { Button, ConfigProvider, Layout, theme } from 'antd';
import 'antd/dist/reset.css';

const { defaultAlgorithm, darkAlgorithm } = theme;

const App: FC = () => (
  <ConfigProvider theme={{algorithm: darkAlgorithm}}>
      <Layout>
      </Layout>
  </ConfigProvider>
);

export default App;
