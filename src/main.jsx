import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/fonts.css"
import "./assets/colors.css"
import "./components/index.css"

// Pages
import Root from "./routes/Root";
import ProtectedRoute from "./routes/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UploadImagePage from "./pages/UploadImagePage";
import ResultsPage from "./pages/ResultsPage";
import MeasurementsPage from "./pages/MeasurementsPage";

// Contexts
import { SessionProvider } from "./contexts/SessionContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { 
                path: "/",
                element: <HomePage />, // Redirige a Inicio o a Ideas
            },
            { 
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/upload-image",
                element: (
                    <ProtectedRoute>
                        <UploadImagePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/measurements",
                element: (
                    <ProtectedRoute>
                        <MeasurementsPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/results",
                element: (
                    <ProtectedRoute>
                        <ResultsPage />
                    </ProtectedRoute>
                ),
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  </React.StrictMode>
);