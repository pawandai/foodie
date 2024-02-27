import { useAuth0 } from '@auth0/auth0-react';
import { Loader2 } from 'lucide-react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)
    return (
      <div className='flex items-center justify-center h-[100vh]'>
        <Loader2 className='h-20 w-20 animate-spin' />
      </div>
    );

  if (isAuthenticated) return <Outlet />;

  return <Navigate to='/' replace />;
};

export default ProtectedRoute;
