import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Categories from "../Pages/Category/Category/Categories";
import Teams from "../Pages/Teams/Teams";
import Company from "../Pages/Company/Company";

const routes = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/categories',
            element: <Categories></Categories>
        },
        {
            path: '/teams',
            element: <Teams></Teams>
        },
        {
            path: '/company',
            element: <Company></Company>
        }
    ]
}])

export default routes;