// routes/AuthRoute.jsx
// import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  // const { user, loading } = useAuth();

  // if (loading) return null; // ⏳ Wait until auth is initialized

  // return user ? children : <Navigate to="/login" replace />;
  return;
};

export default AuthRoute;
