import { createBrowserRouter } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import Layout from "../components/UI/Layout";
import ErrorElement from "../components/UI/ErrorElement";
import NotFound from "../components/UI/NotFound";
import Redirector from "../components/utils/Redirector";
import Profile from "../components/profile/Profile";
import Todo, { todoLoader } from "../components/Home/Todo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        element: <Redirector />,
        children: [
          {
        index: true,
        element: <HomePage />,
          },
          {
            loader: todoLoader,
            path: '/todos/:id',
            element: <Todo />
          },
          {
            path: '/profile',
            element: <Profile />
          }
        ]
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
