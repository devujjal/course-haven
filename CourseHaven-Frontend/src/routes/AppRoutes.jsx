import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import HomePage from "../pages/HomePage/HomePage/HomePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import CoursePage from "../pages/CoursePage/CoursePage";
import ContactPage from "../pages/ContactPage/ContactPage";
import Layout from "../layouts/DashBoard";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import PrivateRoute from "./PrivateRoute";

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
                path: 'courses/:id',
                element: <PrivateRoute><CourseDetails /></PrivateRoute>
            },
            {
                path: 'contact',
                element: <ContactPage />
            },



        ]
    },
    {
        path: 'sign-in',
        element: <SignInPage />
    },
    {
        path: 'sign-up',
        element: <SignUpPage />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Layout /></PrivateRoute>
    }
])

export default router;