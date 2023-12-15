/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouteProvider, Route, RouterProvider} from 'react-router-dom'
import Home from './routes/Home'
import NewPacient from './routes/NewPacient';
import ListPacients from './routes/ListPacients';
import AuthUser from './components/AuthUser';
import NewUser from './routes/NewPacient';



const router = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: "/",
      element: <AuthUser />,
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/new",
      element: <NewPacient />,
    },
    {
      path: "/list",
      element: <ListPacients />,
    },
    {
      path: "/newuser",
      element: <NewUser />,
    },
  ],
},
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
);

reportWebVitals();
