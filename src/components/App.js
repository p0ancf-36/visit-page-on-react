import React, { useEffect } from 'react';

import AppHeader from './App-Header';
import AppContent from './App-Content';
import AppFooter from './App-Footer';
import { Layout } from 'antd';
import data from '../scripts/data';

function App() {
  function resizeHandler() {
    if (window.innerWidth > 768) {
      data.margin = 64;
    } else {
      data.margin = 128;
    }
  }
  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <Layout>
      <Layout.Header className="header">
        <AppHeader className="divider-h" />
      </Layout.Header>
      <Layout.Content>
        <AppContent />
      </Layout.Content>
      <Layout.Footer>
        <AppFooter />
      </Layout.Footer>
    </Layout>
  );
}

export default App;
