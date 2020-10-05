import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealsDetailsScreen from '../screens/MealsDetailsScreen'
import Color from '../constants/Color';
import StackNavigator from './StackNavigator';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MealsNavigator = props =>{
return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="MealDetail" component={MealsDetailsScreen} />
    </Tab.Navigator>
    </NavigationContainer>
);
}
export default MealsNavigator