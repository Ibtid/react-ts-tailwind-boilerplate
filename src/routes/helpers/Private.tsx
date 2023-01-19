import { Navigate, Outlet, useLocation } from 'react-router-dom';
import UiPaths from '../../paths/uiPaths';

interface IAllowedRoles {
  allowedRoles: string[];
}

export default function Private({ allowedRoles }: IAllowedRoles) {
  const userRole: string[] = ['adm'];

  const location = useLocation();

  const isvalid = allowedRoles.some((role: string) => userRole.includes(role));

  if (isvalid) return <Outlet />;

  return (
    <Navigate
      to={UiPaths.NotFound}
      state={{ pathname: location.pathname }}
      replace
    />
  );
}
