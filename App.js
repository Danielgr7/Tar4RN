
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Pages/HomePage';
import NotesCategory from './Pages/NotesCategory'
import AddNote from './Pages/AddNote';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();
//Drawer
{
  // import MyDrawer from './Pages/MyDrawer';
  // import { createDrawerNavigator } from '@react-navigation/drawer';
  // const Drawer = createDrawerNavigator();

  // function MyDrawer() {
  //   return (
  //     <Drawer.Navigator initialRouteName="FirstPage">
  //       <Drawer.Screen name="HomePage" component={HomePage} options={{ drawerLabel: 'Home Page' }} />
  //       <Drawer.Screen name="NotesCategory" component={NotesCategory} options={{ drawerLabel: 'Notes Category Page' }} />
  //       <Drawer.Screen name="AddNote" component={AddNote} options={{ drawerLabel: 'Add Note Page' }} />
  //     </Drawer.Navigator>
  //   );
  // }
}

export default function App() {
  return (
    // <SafeAreaProvider>
    <NavigationContainer>
      {/* <MyDrawer> */}
      <Stack.Navigator initialRouteName="HomePage" backBehavior="history">
        <Stack.Screen name="HomePage" component={HomePage}  />
        <Stack.Screen name="NotesCategory" component={NotesCategory} options={{headerBackTitleVisible: true}} />
        <Stack.Screen name="AddNote" component={AddNote} options={{headerBackTitleVisible: true}}/>
      </Stack.Navigator>
      {/* </MyDrawer> */}
    </NavigationContainer>
    // </SafeAreaProvider>
  );
}









