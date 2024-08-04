import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.tsx'
import BigBoard from './pages/BigBoard.tsx'
import TierList from './pages/TierList.tsx'
import MockBoard from './pages/MockBoard.tsx'
import NotFoundPage from './pages/NotFound.tsx'

import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/bigBoard',
    element: <BigBoard />,
  },
  {
    path: '/tierList',
    element: <TierList />,
  },
  {
    path: '/mockBoard',
    element: <MockBoard />,
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
