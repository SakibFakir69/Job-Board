import { createBrowserRouter } from "react-router";

import MainLayouts from "../MainLayouts";
import Home from "../page/Home";
import Authlayoutes from "../layouts/Authlayoutes";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";



// route

export const route = createBrowserRouter([


    {
        path:'',
        element:<MainLayouts/>,
        children:[
            {
                path:'/',
                element:<Home/>

            }
        ]
    },
    {
        path:'auth',
        element:<Authlayoutes/>,
        children:[

            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/registration ',
                element:<Registration/>
            }
        ]
    }
])