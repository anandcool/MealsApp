import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealsDetailsScreen from '../screens/MealsDetailsScreen'
import Color from '../constants/Color';


const Stack = createStackNavigator();

const StackNavigator = props =>{
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
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{title:"Meals Categories"}}  />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
        <Stack.Screen name="MealDetail" component={MealsDetailsScreen} />
      </Stack.Navigator>
);
}
export default StackNavigator