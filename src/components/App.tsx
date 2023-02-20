import React, { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import { PrivateRoute } from './providers/PrivateRoute';
import { PublicRoute } from './providers/PublicRoute';

const Auth = lazy(() => import('../pages/auth-page/Auth'));
const HomePage = lazy(() => import('../pages/home-page/HomePage'));
const NewsPage = lazy(() => import('../pages/news-page/NewsPage'));
const Profile = lazy(() => import('../pages/profile-page/ProfilePage'));

const App: FC = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="auth" element={<Auth />} />
          </Route>

          <Route index element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
