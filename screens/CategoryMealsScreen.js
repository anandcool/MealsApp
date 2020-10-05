import React from 'react'
import {Button, FlatList, StyleSheet, Text,View} from 'react-native'
import MealItem from '../components/MealItem'
import { CATEGORIES, MEALS } from '../data/dummy-data'

const CategoryMealsScreen = props =>{
    const catId = props.route.params.categoryId
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
     setTimeout(function(){
        props.navigation.setOptions({title:selectedCategory.title})  //change header Dynamically
     },0.01)

     const renderMealItem = itemData =>{
         return <MealItem 
         title={itemData.item.title} 
         image={itemData.item.imageUrl}
         duration={itemData.item.duration}
         complexity={itemData.item.complexity}
         affordability={itemData.item.affordability}
          onSelectMeal={()=>{props.navigation.navigate('MealDetail',{mealId:itemData.item.id})}}/>
     }

     const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0)


    return (
        <View style={styles.screen}>
            <FlatList 
            data={displayMeals} 
            renderItem={renderMealItem}
            style={{width:'100%'}}/>
        </View>
    );
}

const styles = StyleSheet.create({
 screen:{
     flex:1,
     alignItems:'center',
     justifyContent:'center'
 }   
})

export default CategoryMealsScreen