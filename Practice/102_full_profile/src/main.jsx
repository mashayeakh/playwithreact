import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import From from './Form/From.jsx'
import Profile from './Form/Profile.jsx'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import { Form } from 'react-hook-form'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<From />} />
      <Route path='/profile' element={<Profile />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <From /> */}
    {/* <Profile /> */}

    <RouterProvider router={router} />

  </StrictMode>,
)
