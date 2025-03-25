import ReactDom from "react-dom/client"
import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Events from "./component/Event"
import Artists from "./component/Artists";
import Registration from "./component/Registration";
import Gallery from "./component/Gallary";
import Contect from "./component/Contect";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
    children: [
      {
        path: "/",
        element: <Home/>,
        
      },
      {
        path: "About",
        element: <About/>,
      },
      {
        path: "Events",
        element: <Events/>,
      },
      {
        path:"Artists",
        element:<Artists/>,
      },
      {
        path:"Artists",
        element:<Artists/>,
      },
      {
        path:"Registration",
        element:<Registration/>,
      },
      {
        path:"Gallery",
        element:<Gallery/>,
      },
      {
        path:"Contect",
        element:<Contect/>
      },      
    ],
  },
]);

export default function Main(){
  return(
   <App/>
  )
}

const root = ReactDom.createRoot(document.querySelector('#root'))
root.render(
  <RouterProvider router={router} />
);