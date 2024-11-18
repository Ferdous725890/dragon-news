import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./src/LayOut/Home/Home";
import CategoryNews from "./src/LayOut/Home/Pages/CategoryNews";
import AuthLaout from "./src/LayOut/Home/Pages/AuthLaout";
import Login from "./Login";

import Registers from "./Registers";
import News from "./News";
import NewsDtails from "./NewsDtails";
import PrivateRouter from "./src/LayOut/Home/PrivateRouter";


const routers = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
          path:'',
          element:<Navigate to={"/category/01"} ></Navigate>
        },
        {
          path:'/category/:id',
          element:<CategoryNews></CategoryNews> ,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        },
       
      ],

    },
    {
      path: '/news/:id',
      element:<PrivateRouter>
        <NewsDtails></NewsDtails>
      </PrivateRouter>,

      loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
      path:'/auth',
      element:<AuthLaout></AuthLaout>,
      children:[
        {
          path:'/auth/login',
          element:<Login></Login>,
        },
        
        {
          path:'/auth/register',
          element:<Registers></Registers>
        },
       
      ]
    },
   

  ]);

  export default routers