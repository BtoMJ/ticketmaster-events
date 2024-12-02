import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";
import Error404 from "../views/Error404/Error404";
import Profle from "../views/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/detail/:eventId',
        element: <Detail />
    },
    {
        path: '/profile',
        element: <Profle />,
        children: [
            {
                path: 'my-info',
                element: <>My Info</>
            },
            {
                path: 'liked-events',
                element: <>Liked Events</>
            }
        ]
    }
]);

const MyRoutes = () =>  <RouterProvider router={router} />;

export default MyRoutes