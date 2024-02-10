import Home from "./Pages/Home/Home";
import Car from "./Pages/Car/Car";
import SingUp from "./Pages/signUp/SignUp";
import Login from "./Pages/Login/Login";
let routes = [
    {path : '/' , element : <Home />},
    {path : '/car' , element : <Car />},
    {path : '/signUp' , element : <SingUp />},
    {path : '/login' , element : <Login />},
]

export default routes