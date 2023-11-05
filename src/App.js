import logo from './logo.svg';
import './App.css';
import Formatter from './components/Formatter';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Services from './Services/Services';
import Solution from './Solution/Solution';
import Tracking from './Tracking/Tracking';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Developers from './Solution/Developers';
import Ecommerce from './Solution/Ecommerce';
import Logistics from './Solution/Logistics';
import Network from './Solution/Network';
import ServiceOpt from './Solution/ServiceOpt';
import SmallBusiness from './Solution/SmallBusiness';
import Vision from './About/Vision';
import Sustainability from './About/Sustainability';
import Gpd from './About/Gpd';
import Compliance from './About/Compliance';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Formatter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/solution",
        element: <Solution />,
      },
      {
        path: "/tracking",
        element: <Tracking />,
      },
        {
        path: "/developers",
        element: <Developers />,
      },
        {
        path: "/ecommerce",
        element: <Ecommerce />,
      },
        {
        path: "/logistics",
        element: <Logistics />,
      },
        {
        path: "/network",
        element: <Network />,
      },
        {
        path: "/serviceopt",
        element: <ServiceOpt />,
      },
        {
        path: "/smallbusiness",
        element: <SmallBusiness />,
      }  ,
    
        {
        path: "/compliance",
        element: <Compliance />,
      }  ,
        {
        path: "/gpd",
        element: <Gpd />,
      }  ,
        {
        path: "/sustainability",
        element: <Sustainability />,
      }  ,
        {
        path: "/vision",
        element: <Vision />,
      }   
     ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
