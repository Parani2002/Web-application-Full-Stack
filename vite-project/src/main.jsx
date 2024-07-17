import React from 'react'
import router from './router.jsx'
import ReactDOM from 'react-dom'

import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
