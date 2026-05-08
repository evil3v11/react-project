import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import Layout from "../components/UI/Layout";
import ErrorElement from "../components/UI/ErrorElement";
import NotFound from "../components/UI/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegistrationForm />,
      },
      {
        path: '*',
        element: <NotFound />
      }
    ],
  },
]);
