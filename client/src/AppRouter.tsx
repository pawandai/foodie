import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';
import AuthCallback from './pages/AuthCallback';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path='/auth-callback' element={<AuthCallback />} />
      <Route path='/profile' element={<span>Profile Page</span>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRouter;
