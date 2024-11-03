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
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import InicioPage from "./pages/InicioPage";
import PersonalDataQuizPage from "./pages/PersonalDataQuizPage";
import HelpUsPage from "./pages/HelpUsPage";
import UploadImagePage from "./pages/UploadImagePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        { 
            path: "/",
            element: <InicioPage />,
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
            path: "/personalDataQuiz",
            element: <PersonalDataQuizPage />,
        },
        {
          path: "/helpUs",
          element: <HelpUsPage />,
        },
        {
          path: "/uploadImage",
          element: <UploadImagePage />,
        },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);