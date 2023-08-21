import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routes.tsx'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<RouterProvider router={router} />)
