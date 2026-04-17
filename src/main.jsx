import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Timeline from './pages/timeline/Timeline.jsx'
import Home from './pages/homepage/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children : [
      {
        index : true,
        element: <Home></Home>
      },
      {
        path: "/timeline",
        element : <Timeline />
      }
    ],
    errorElement : <h2>404 Not Found</h2>
  }
  ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
