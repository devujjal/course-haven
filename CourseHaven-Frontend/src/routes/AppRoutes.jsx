import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import HomePage from "../pages/HomePage/HomePage/HomePage";
import SignInPage from "../pages/SignInPage/SignInPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <div>This is error page</div>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            
        ]
    },
    {
        path: 'sign-in',
        element: <SignInPage />
    }
])

export default router;