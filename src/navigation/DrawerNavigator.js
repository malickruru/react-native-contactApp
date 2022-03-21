import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Contacts from "../screens/Contacts";
import Settings from "../screens/Settings";
import ContactsDetail from "../screens/ContactsDetail";
import CreateContact from "../screens/CreateContact";





//Technique Initial ne fait apparaitre q'une page
// const DrawerNavigator = () => {
//     const Drawer = createDrawerNavigator();
//     return(
//     <Drawer.Navigator>      
//       <Drawer.Screen name='Home' component={HomeNavigator}></Drawer.Screen>
//     </Drawer.Navigator>
//     )
// }




//Technique pour faire apparaitre toutes les pagess
const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
    return(
    <Drawer.Navigator>
      <Drawer.Screen name='Contacts' component={Contacts}></Drawer.Screen>      
      <Drawer.Screen name='Contact Detail' component={ContactsDetail}></Drawer.Screen>
      <Drawer.Screen name='Create a Contact' component={CreateContact}></Drawer.Screen>
      <Drawer.Screen name='Settings' component={Settings}></Drawer.Screen>
    </Drawer.Navigator>
    )
}

export default DrawerNavigator;