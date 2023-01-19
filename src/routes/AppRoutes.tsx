import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages/auth';
import UiPaths from '../paths/uiPaths';
import Private from './helpers/Private';

const RestrictedPage = lazy(() => import('../pages/RestrictedPage'));
const AllowedPage = lazy(() => import('../pages/AllowedPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  const loggedIn = true;

  if (loggedIn) {
    return (
      <Routes>
        <Route index element={<Navigate to={UiPaths.AllowedPage} />} />

        <Route path={UiPaths.Login} element={<LoginPage />} />
        <Route path={UiPaths.Register} element={<RegisterPage />} />
        <Route path={UiPaths.AllowedPage} element={<AllowedPage />} />

        <Route element={<Private allowedRoles={['admin', 'customer']} />}>
          <Route path={UiPaths.RestrictedPage} element={<RestrictedPage />} />
          {/* <Route
          path={`${UiPaths.Companies}/:companyId`}
          element={<CompanyDetailsPage />}
        /> */}
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route index element={<Navigate to={UiPaths.Login} />} />

        <Route path={UiPaths.Login} element={<LoginPage />} />
        <Route path={UiPaths.Register} element={<RegisterPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    );
  }
};

export default AppRoutes;
