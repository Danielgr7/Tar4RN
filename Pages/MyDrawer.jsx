import React from 'react';

import { View, Text } from 'react-native';
import HomePage from './Pages/HomePage';
import NotesCategory from './Pages/NotesCategory'
import AddNote from './Pages/AddNote';
//import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function MyDrawer(props) {
    return (
            <Drawer.Navigator initialRouteName="HomePage">
                <Drawer.Screen name="HomePage" component={()=> <HomePage/>} options={{drawerLabel: "Home Page"}}/>
                <Drawer.Screen name="NotesCategory" component={()=> <NotesCategory/>} options={{drawerLabel: "Notes Category"}}/>
                <Drawer.Screen name="AddNote" component={()=><AddNote/>} options={{drawerLabel: "Add Note"}}/>
            </Drawer.Navigator>
    );
}



