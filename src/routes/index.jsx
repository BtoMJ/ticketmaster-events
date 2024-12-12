import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";
import Error404 from "../views/Error404/Error404";
import Profle from "../views/Profile/Profile";
import Login from "../views/Login/Login";
// import MyInfo from "../views/Profile/MyInfo";
// import LikedEvents from "../views/Profile/LikedEvents";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/detail/:eventId',
        element: <Detail />
    },
    {
        path: '/profile',
        element: <Profle />
    },
    // {
    //     path: '/profile',
    //     element: <Profle />,
    //     children: [
    //         {
    //             path: 'my-info',
    //             element: <MyInfo />
    //         },
    //         {
    //             path: 'liked-events',
    //             element: <LikedEvents />
    //         }
    //     ]
    // }
]);

const MyRoutes = () =>  <RouterProvider router={router} />;

export default MyRoutes