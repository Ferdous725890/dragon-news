import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "./src/LayOut/Home/Home";
import CategoryNews from "./src/LayOut/Home/Pages/CategoryNews";
import AuthLaout from "./src/LayOut/Home/Pages/AuthLaout";
import Login from "./Login";
import Register from "./Register";


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
      path:'/auth',
      element:<AuthLaout></AuthLaout>,
      children:[
        {
          path:'/auth/login',
          element:<Login></Login>,
        },
        {
          path:'/auth/register',
          element:<Register></Register>
        },
      ]
    }

  ]);

  export default routers