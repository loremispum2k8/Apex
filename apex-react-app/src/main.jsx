import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './pages/App.jsx'
import AppItems from './pages/AppItems.jsx'

let router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/:slug',
    element: <AppItems/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
