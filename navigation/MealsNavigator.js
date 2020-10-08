import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Color from '../constants/Color';
import StackNavigator from './StackNavigator';
import FavoritesScreen from '../screens/FavoritesScreen'
import { Ionicons } from '@expo/vector-icons';
import MealsDetailsScreen from '../screens/MealsDetailsScreen';
import FiltersScreen from '../screens/FiltersScreen';

const Fav = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const FavNavigator = props =>{
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
    <Fav.Navigator screenOptions={screenstyles}>
      <Fav.Screen name="Favorites" component={FavoritesScreen}  options={{title:"Your Favorites"}} />
      <Fav.Screen name="MealDetail" component={MealsDetailsScreen} />
    </Fav.Navigator>
);
}


const MealsNavigator = props =>{
return (
    <Tab.Navigator
      activeColor={Color.accentColor}
      inactiveColor={Color.iconColor}
      barStyle={{ backgroundColor: Color.primaryColor }}
    >
      <Tab.Screen
       name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({  }) => (
            <Ionicons name="ios-restaurant" color={Color.iconColor}  size={25}/>
          ),
        }} />
      <Tab.Screen 
      name="FavoritesScreen" 
      component={FavNavigator} 
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({  }) => (
          <Ionicons name="ios-star" color={Color.iconColor} size={25}/>
        ),
      }} />
    </Tab.Navigator>

);
}
export default MealsNavigator