import React from 'react'
import {Button, FlatList, StyleSheet, Text,View} from 'react-native'
import MealList from '../components/MealList'
import { CATEGORIES, MEALS } from '../data/dummy-data'


const CategoryMealsScreen = props =>{
    const catId = props.route.params.categoryId
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
     setTimeout(function(){
        props.navigation.setOptions({title:selectedCategory.title})  //change header Dynamically
     },0.01)

     const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0)
     return <MealList listData={displayMeals} navigation={props.navigation}/>

}



export default CategoryMealsScreen