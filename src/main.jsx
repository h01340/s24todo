import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Contact from './components/Contact';
import Todos from './components/Todos';
import Error from './components/Error';

const router = createBrowserRouter([  // Import components that are used in routes
  {
    //when user navigates to the /- endpoint, react router renders App component
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [                       // children are nested routes with a route
      {
        element: <Home />,
        index: true                   // index route does not need any path
      },
      {
        path: "todos",                // path can be defined relative to the parent path
        element: <Todos />,
      },
      {
        path: "kontakti",
        element: <Contact />,
      }
    ]
  }
]);
/**
 * RouterProvider component renders the router and pass our routes 
 * to this component using the router prop. 
 * It acts as the root component that connects the router 
 * logic to your React app, enabling it to handle navigation, 
 * URL changes, and rendering of the defined components for each route.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);