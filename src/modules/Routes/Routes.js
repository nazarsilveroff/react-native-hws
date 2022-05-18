import {useState} from "react";
import HomeNavigation from "../../Screens/HomeSreen/HomeNavigation";
import AuthNavigation from "../../Screens/AuthScreen/AuthNavigation";


const MyRoutes = () => {
    const [isAuth, setIsAuth] = useState(true)

    return isAuth ? <HomeNavigation/> : <AuthNavigation/>
}

export default MyRoutes;
