import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, isCheckingToken, children }) {
  if (isCheckingToken) {
    return null;
  }
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
