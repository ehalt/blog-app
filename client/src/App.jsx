
import './App.css'
// import Home from './pages/Home'
import Register from './pages/Register';
import Login from './pages/Login';
import Single from './pages/Single';
import Write from './pages/Write';

import {createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import "./style.scss";




const Layout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
  path:"/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path:"/post/:id",
      element: <Single />
    },
    {
      path:"/write",
      element: <Write />
    }
  ]
},
{
  path:"/test",
  element: <div> this is test route</div>,
},
{
  path:"/register",
  element: <Register /> ,
},
{
  path:"/login",
  element: <Login /> ,
},
{
  path:"/single",
  element: <Single /> ,
},
{
  path:"/write",
  element: <Write /> ,
},
]);



function App() {

  return (
    <>
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
    </>
  )
}




export default App
