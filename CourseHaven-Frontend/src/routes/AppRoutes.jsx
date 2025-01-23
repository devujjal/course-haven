import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import HomePage from "../pages/HomePage/HomePage/HomePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import CoursePage from "../pages/CoursePage/CoursePage";
import ContactPage from "../pages/ContactPage/ContactPage";

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
            {
                path: 'courses',
                element: <CoursePage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            }
            
        ]
    },
    {
        path: 'sign-in',
        element: <SignInPage />
    },
    {
        path: 'sign-up',
        element: <SignUpPage />
    }
])

export default router;