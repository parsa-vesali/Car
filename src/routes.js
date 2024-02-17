import Home from "./Pages/Home/Home";
import Car from "./Pages/Car/Car";
import SingUp from "./Pages/signUp/SignUp";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import MainPost from "./Components/MainPost/MainPost";
import AboutUs from "./Pages/AboutUs/AboutUs";
let routes = [
    {path : '/' , element : <Home />},
    {path : '/car' , element : <Car />},
    {path : '/car/:postId' , element : <MainPost />},
    {path : '/abouteUs' , element : <AboutUs />},
    {path : '/signUp' , element : <SingUp />},
    {path : '/login' , element : <Login />},
    {path : '*' , element : <NotFound />},
]

export default routes