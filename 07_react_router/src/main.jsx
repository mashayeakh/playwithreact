import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/home'
import About from './components/About/About.jsx'
import { Route } from 'react-router-dom'
import User from './components/User/User.jsx'
import Contact from './components/Contact/contact.jsx'
import Github, { githubInfo } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ])

// ! Another way to create routes 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/contact' element={<Contact />} />

      <Route loader={githubInfo} path="/github" element={<Github />} />

      {/* Lets get the id */}
      <Route path="/user/:userId" element={<User />} />
    </Route>
  )
)
//! This process seems easier



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
