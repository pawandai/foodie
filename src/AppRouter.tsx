import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout';
import HomePage from './pages/HomePage';
import AuthCallback from './pages/AuthCallback';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './auth/ProtectedRoute';
import ManageRestaurantPage from './pages/ManageRestaurantPage';
import SearchPage from './pages/SearchPage';
import DetailPage from './pages/DetailPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path='/auth-callback' element={<AuthCallback />} />
      <Route
        path='/search/:city'
        element={
          <Layout showHero={false}>
            <SearchPage />
          </Layout>
        }
      />
      <Route
        path='/detail/:restaurantId'
        element={
          <Layout showHero={false}>
            <DetailPage />
          </Layout>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route
          path='/profile'
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path='/manage-restaurant'
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        />
      </Route>

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRouter;
