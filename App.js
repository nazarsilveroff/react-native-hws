import RegistrationScreen from "./src/Screens/Auth/RegistrationScreen";
import LoginScreen from "./src/Screens/Auth/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";





const AuthStack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen options={{headerShown: false}} name="registration" component={RegistrationScreen}/>
                <AuthStack.Screen options={{headerShown: false}} name="login" component={LoginScreen}/>
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}

