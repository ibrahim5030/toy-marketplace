import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs/Blogs";
import NotFound from "../Pages/NotFound/NotFound";
import AllToys from "../Pages/AllToys/AllToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://b7a11-toy-marketplace-server-side-puce.vercel.app/cars')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-puce.vercel.app/cars/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: '/addatoy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: '/mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                loader: () => fetch('https://b7a11-toy-marketplace-server-side-puce.vercel.app/cars')

            },
            {
                path: '/updatetoys/:id',
                element: <UpdateToys></UpdateToys>,
                loader: ({ params }) => fetch(`https://b7a11-toy-marketplace-server-side-puce.vercel.app/cars/${params.id}`)
            }
        ],
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);



export default router;