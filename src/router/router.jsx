import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import Error from "../page/Error/Error";
import Home from "../page/Home/Home/Home"
import About from "../page/About/About";
import Appointment from "../page/Appointment/Appointment";
import Details from "../page/Home/Service/Details";
import Profile from "../page/Home/ExpertDoctor/Profile/Profile";
import Reviews from "../page/Reviews/Reviews";
import ContactUs from "../page/ContactUs/ContactUs";

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
                path: '/details/:id',
                element: <Details />
            },
            {
                path: '/profile/:id',
                element: <Profile />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'appointment',
                element: <Appointment />
            },
            {
                path: 'reviews',
                element: <Reviews />
            },
            {
                path: 'contactUs',
                element: <ContactUs />
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