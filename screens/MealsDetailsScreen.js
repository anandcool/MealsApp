import React from 'react'
import {Button, StyleSheet, Text,View} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { MEALS } from '../data/dummy-data'

const MealsDetailsScreen = props =>{
    const mealId = props.route.params.mealId
    const selectedMeals = MEALS.find(meal => meal.id === mealId)
    setTimeout(function(){
        props.navigation.setOptions({ title: selectedMeals.title })
    },1/1000)
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item title="Favorite" iconName="ios-star"/>
              </HeaderButtons>       
                 ),
        });
      }, [props.navigation]);

    return (
        <View style={styles.screen}>
            <Text>The Meals Details Screen {selectedMeals.title} !!!</Text>
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

export default MealsDetailsScreen