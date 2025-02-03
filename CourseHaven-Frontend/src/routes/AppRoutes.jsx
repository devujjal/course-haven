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
import Cart from "../pages/Dashboard/Student/Cart/Cart";
import Statistic from "../pages/Dashboard/Student/Dashboard/Statistic";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import EditProfile from "../pages/Dashboard/EditProfile/EditProfile";
import CourseVideoPage from "../pages/Dashboard/Student/CourseVideoPage/CourseVideoPage";
import MyCourse from "../pages/Dashboard/MyCourse/MyCourse";

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
            {
                path: 'payment-info',
                element: <PaymentHistory />
            }

        ]
    },
    {
        path: '/sign-in',
        element: <SignInPage />
    },
    {
        path: '/sign-up',
        element: <SignUpPage />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Layout /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <Statistic />
            },
            {
                path:'course-one',
                element: <CourseVideoPage />

            },
            {
                path: 'my-course',
                element: <MyCourse />
            },
            {
                path: 'my-cart',
                element: <Cart />
            },
            {
                path: 'payment-info',
                element: <PaymentHistory />
            },
            {
                path: 'edit-profile',
                element: <EditProfile />
            }
        ]
    }
])

export default router;