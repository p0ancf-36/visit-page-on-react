import React from 'react';

import { Layout } from 'antd';

import AppHeader from './App-Header'
import AppContent from './App-Content'

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

      </Footer>
    </Layout>
  );
}

export default App;
