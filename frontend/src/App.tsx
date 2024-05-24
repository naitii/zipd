import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import { Toaster } from './components/ui/toaster'
import Header from './components/Header'
import Dashboard from './Pages/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/about',
    element: <div>About us</div>,
  },
  {
    path: '/dashboard',
    element: <Dashboard/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App
