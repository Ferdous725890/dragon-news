import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from '../Routes'
import AtuhProvider from './AuthProvider/AuthProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AtuhProvider>
      <RouterProvider router={routers} />
    </AtuhProvider>
  </StrictMode>,
)
