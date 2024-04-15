import Home from "./Pages/Home/Home";
import Car from "./Pages/Car/Car";
import SingUp from "./Pages/signUp/SignUp";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import MainPost from "./Components/MainPost/MainPost";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Articles from "./Pages/Articles/Articles";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Analysis from "./Pages/DashBoard/analysis/Analysis";
import Sale from "./Pages/DashBoard/sale/Sale";

let routes = [
    { path: '/', element: <Home /> },
    { path: '/car', element: <Car /> },
    { path: '/car/:postId', element: <MainPost /> },
    { path: '/abouteUs', element: <AboutUs /> },
    { path: '/signUp', element: <SingUp /> },
    { path: '/articles', element: <Articles /> },
    { path: '/login', element: <Login /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/analysis', element: <Analysis /> },
    { path: '/sale', element: <Sale /> },
    { path: '*', element: <NotFound /> },
]

export default routes