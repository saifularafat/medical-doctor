import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import Error from "../page/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children:[
            {
                
            }
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