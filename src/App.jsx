import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './Layouts/PageLayout/PageLayout'; // Đảm bảo đường dẫn đúng
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';

const App = () => {
  return (
      <PageLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
        </Routes>
      </PageLayout>
  );
}

export default App;
