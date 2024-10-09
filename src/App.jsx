import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './Components/Home';
import Navbar from './Components/Nav/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';

function App() {
  const routes = createBrowserRouter([
    {path:'' , element:<Layout/> , children: [
      {path:'' , element:<Home/>},
      {path:'/home' , element:<Home/>},
      {path:'/aboutUs' , element:<Home/>},
    ]}
  ])
  return <>
   <RouterProvider router={routes}/>
    {/* <Navbar/>
    <Home/> */}
  </>
}

export default App;
