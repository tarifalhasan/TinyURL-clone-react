import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import App from './App';
import Features from './components/Features/Features';
import Login from './components/Login/Login';
import MyUrl from './components/MyUrl/MyUrl';
import Plan from './components/Plan/Plan';
import SignUp from './components/SignUp/SignUp';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/plans",
        element: <Plan />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/myurls",
        element: <MyUrl />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
          <App />
        </RouterProvider>
  </React.StrictMode>
);

