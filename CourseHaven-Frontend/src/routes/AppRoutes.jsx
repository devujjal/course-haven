import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <div>This is error page</div>,
        // children: [
        //     {

        //     }
        // ]
    }
])

export default router;