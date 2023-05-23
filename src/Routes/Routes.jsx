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



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/cars')
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
                loader: ({params})=> fetch(`http://localhost:5000/cars/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blogs></Blogs>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>
            }
        ],
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
]);



export default router;