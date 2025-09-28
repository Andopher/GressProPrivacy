import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './styles.css'

// Redirect URLs that contain a raw access_token hash to the /confirmed route
if (location.hash && /#access_token/i.test(location.hash)) {
  location.replace('#/confirmed')
}

const router = createHashRouter([
  {
    path: '/*',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


