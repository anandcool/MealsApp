import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import FiltersScreen from '../screens/FiltersScreen'
import MealsNavigator from './MealsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Color from '../constants/Color';
import FilterNavigator from './FilterNavigator';

const Drawer = createDrawerNavigator();

const  DrawerNavigator = props => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    const screenstyles ={
        headerStyle: {
          backgroundColor: Color.primaryColor
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }

  return (
      <NavigationContainer>
    <Drawer.Navigator
    drawerContentOptions={{
    activeTintColor: Color.accentColor,
    labelStyle:{
        fontWeight:"bold"
    }
  }}
    >
      <Drawer.Screen name="MealsFav" component={MealsNavigator} options={{drawerLabel:'Meals'}}  />
      <Drawer.Screen name="Filter" component={FilterNavigator}   />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerNavigator;