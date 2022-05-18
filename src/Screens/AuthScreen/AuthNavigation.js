import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import RegistrationScreen from "./RegistrationScreen";
import LoginScreen from "./LoginScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

function AuthNavigation(props) {
    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen options={{headerShown: false}} name="registration" component={RegistrationScreen}/>
                <AuthStack.Screen options={{headerShown: false}} name="login" component={LoginScreen}/>
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigation;
