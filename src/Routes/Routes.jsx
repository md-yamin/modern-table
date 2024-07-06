import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Error404 from "../Shared/Error404";
import News from "../Pages/News/News";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error404></Error404>,
        children: [
            {
            path: "/",
            element: <Home></Home>,
            },
            {
            path: "/menu",
            element: <Menu></Menu>,
            },
            {
            path: "/about",
            element: <About></About>,
            },
            {
            path: "/news",
            element: <News></News>,
            },
            {
            path: "/contact",
            element: <Contact></Contact>,
            },
    ]
    },
]);