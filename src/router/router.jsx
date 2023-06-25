import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home/Home"
import About from "../page/About/About";
import Appointment from "../page/Appointment/Appointment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'appointment',
                element: <Appointment />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    }
]);

export default router;