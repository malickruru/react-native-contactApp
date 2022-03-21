import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Loggin from "../screens/Loggin";
import Signup from "../screens/Signup";




const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();
    return(
    <AuthStack.Navigator>      
      <AuthStack.Screen name='Login' component={Loggin}></AuthStack.Screen>
      <AuthStack.Screen name=' Sign up' component={Signup}></AuthStack.Screen>
    </AuthStack.Navigator>
    )
}

//screens > home > drawer
//screens> auth


export default AuthNavigator;