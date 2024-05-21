import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import SignIn from './Components/Access/SignIn'
import Home from './Components/pages/Home'
import Admin from './Components/pages/Admin'
import Tutor from './Components/pages/Tutor'

const privateRoute = createBrowserRouter([
  {
    path:"/",
    element: <SignIn />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/tutor",
    element: <Tutor />
  },

])
function App() {
  return (
  <RouterProvider router={privateRoute} />
  )
}

export default App
