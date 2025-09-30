import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './App'
import { AuthProvider } from './contexts/AuthContext'
import { UpdateProvider } from './contexts/UpdateContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <UpdateProvider>
          <RouterProvider router={router}/>
      </UpdateProvider>
    </AuthProvider>
  </StrictMode>,
)
