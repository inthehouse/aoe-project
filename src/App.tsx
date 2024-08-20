import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Players from 'pages/players/Players';
import NotFound from 'pages/404';
import Header from 'components/organisms/Header/Header';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Players />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
