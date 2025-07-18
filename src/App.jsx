// import './styles/index.css';
// import './styles/component-styles.css';
import NotFound404 from "@/pages/404.jsx";
import Student from "./pages/Student";
import Login from "./pages/Login";
import Admin from "./components/Admin.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Feedback from "./components/Feedback.jsx";
import { useState, useEffect } from "react";
import DashboardLayout from "./components/DashboardLayout.jsx";
import Feedbacktrend from "./components/FeedbackTrend.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SentimentChart from "./components/SentimentChart.jsx";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
    const [feedback, setfeedback] = useState([]);
    return (
        <BrowserRouter>
            <Toaster richColors position="top-center" />
            <Routes>
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <DashboardLayout />
                        </PrivateRoute>
                    }
                >
                    <Route
                        path="feedback"
                        element={<Feedback feedback={feedback} setfeedback={setfeedback} />}
                    />
                    <Route
                        index
                        element={
                            <PrivateRoute>
                                {" "}
                                <Admin feedback={feedback} setfeedback={setfeedback} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="admin"
                        element={
                            <PrivateRoute>
                                <Admin feedback={feedback} setfeedback={setfeedback} />
                            </PrivateRoute>
                        }
                    />
                </Route>
                <Route
                    path="/"
                    element={<Student feedback={feedback} setfeedback={setfeedback} />}
                />
                <Route
                    path="/feedbacktrend"
                    element={
                        <PrivateRoute>
                            <Feedbacktrend feedback={feedback} />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/sentiment"
                    element={
                        <PrivateRoute>
                            <SentimentChart feedback={feedback} />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
