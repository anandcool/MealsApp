import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealsDetailsScreen from '../screens/MealsDetailsScreen'
import Color from '../constants/Color';
import FiltersScreen from '../screens/FiltersScreen';


const Stack = createStackNavigator();

const FilterNavigator = props =>{
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
      <Stack.Navigator initialRouteName="Categories" screenOptions={screenstyles}>
        <Stack.Screen name="Filter" component={FiltersScreen} />
      </Stack.Navigator>
);
}
export default FilterNavigator