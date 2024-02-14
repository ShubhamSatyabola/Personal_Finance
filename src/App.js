import React from 'react';
// import logo from './logo.svg';
import { Login } from './features/auth/components/Login'
import { Protected } from './features/auth/components/Protected';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Login />
    ),
  },
]);



function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
