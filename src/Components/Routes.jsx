import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home'
import Order from '../Pages/Order'
import Cart from '../Pages/Cart'
// import Favourite from '../Pages/Favourite'
import Layout from "./Layout";
import Favourite from "../Pages/Favourite";

const router = createBrowserRouter([



    {

        path: '/',
        element: <Layout></Layout>,
        children: [

            {


                index: true,
                element: <Home></Home>
            },
            {


                path: 'Home',
                element: <Home></Home>
            },
            {


                path: 'Order',
                element: <Order></Order>

            },
            {

                path: 'Cart',
                element: <Cart></Cart>
            },
            {


                path: 'Favourite',
                element: <Favourite></Favourite>
            }





        ]
    }




])
export default router;
