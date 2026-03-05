
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Home from "../src/pages/Home"
import Courses from "../src/pages/Courses"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Footer from "./components/Footer"
import Profile from "./pages/Profile"

const router = createBrowserRouter ([
  {
   path:"/",
   element:<><Navbar/><Home/> <Footer/></> 
  },

  {
   path:"/courses",
   element:<><Navbar/><Courses/> <Footer/></> 
  },
  {
   path:"/login",
   element:<><Navbar/><Login/><Footer/></> 
  },
  {
   path:"/signup",
   element:<><Navbar/><Signup/><Footer/></> 
  },
  {
   path:"/profile",
   element:<><Navbar/> <Profile/> <Footer/></> 
  },

])


function App() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
