
import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedRoutes = () => {

  if (!JSON.parse(localStorage.getItem("auth"))) {
    
    return (<Navigate to='/login' /> )
  }

  return (<Outlet/>)
}
