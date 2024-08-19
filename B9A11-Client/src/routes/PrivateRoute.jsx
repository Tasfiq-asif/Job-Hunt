import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg text-center"></span>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return (
    <Navigate state={location.pathname} to={"/login"} replace={true}></Navigate>
  );
}

export default PrivateRoute