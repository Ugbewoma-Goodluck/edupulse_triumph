import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase"; // ✅ FIXED path

const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    // if (loading) return <p>Loading...</p>;

    return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
