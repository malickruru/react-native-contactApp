import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";



const AppNavContainer = () => {
    const isLoggedIn = true;
    return(
    <NavigationContainer>
        {isLoggedIn?<DrawerNavigator/>: <AuthNavigator/>}        
    </NavigationContainer>
    )
}

//screens > home > drawer
//screens> auth


export default AppNavContainer;