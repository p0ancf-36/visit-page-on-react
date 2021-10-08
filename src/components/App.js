import React from 'react';

import { Layout } from 'antd';

import AppHeader from './App-Header';
import AppContent from './App-Content';
import AppFooter from './App-Footer';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header className="divider-h header">
        <AppHeader />
      </Header>
      <Content className="divider-h content">
        <AppContent />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
