import { Navigate, Outlet } from 'react-router-dom';

type Role = 'admin' | 'user';

interface User {
  id: string;
  role: Role;
}

interface RequireRoleProps {
  allowedRole: Role;
}

const RequireRole = ({ allowedRole }: RequireRoleProps) => {
  const user = JSON.parse(
    localStorage.getItem('user') || 'null'
  ) as User | null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RequireRole;
