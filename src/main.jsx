import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import './App.css'
import { Toaster } from 'react-hot-toast'







createRoot(document.getElementById('root')).render(
  <StrictMode>

   <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1e293b",
            color: "#fff",
            borderRadius: "10px",
            padding: "10px 16px",
            fontSize: "0.95rem",
            fontWeight: 500,
          },
          success: { iconTheme: { primary: "#0ea5e9", secondary: "#fff" } },
          error: { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
        }}
      />
  <App/>
   
   
    
  </StrictMode>,
)
