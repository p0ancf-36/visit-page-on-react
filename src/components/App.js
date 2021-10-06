import React, { useEffect } from 'react';

import { Layout } from 'antd';

import AppHeader from './App-Header';
import AppContent from './App-Content';
import { ElementArray } from '../scripts/utilities';
import data from '../scripts/data';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header className="divider-h">
        <AppHeader />
      </Header>
      <Content className="divider-h">
        <AppContent />
      </Content>
      <Footer>
        {/* {ElementArray(50, () => <br />)} */}
      </Footer>
    </Layout>
  );
}

export default App;
