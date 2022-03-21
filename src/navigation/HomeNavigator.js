import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Contacts from "../screens/Contacts";
import Settings from "../screens/Settings";
import ContactsDetail from "../screens/ContactsDetail";
import CreateContact from "../screens/CreateContact";



const HomeNavigator = () => {
    const HomeStack = createNativeStackNavigator();
    return(
     
    <HomeStack.Navigator initialRouteName="Contacts">    
      <HomeStack.Screen name='Contacts' component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen name='Contact Detail' component={ContactsDetail}></HomeStack.Screen>
      <HomeStack.Screen name='Create a Contact' component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name='Settings' component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
    )
}


export default HomeNavigator;