import Home from "./Pages/Home/Home";
import Car from "./Pages/Car/Car";
import SingUp from "./Pages/signUp/SignUp";
let routes = [
    {path : '/' , element : <Home />},
    {path : '/car' , element : <Car />},
    {path : '/signUp' , element : <SingUp />},
]

export default routes