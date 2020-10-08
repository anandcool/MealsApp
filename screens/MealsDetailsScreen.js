import React from 'react'
import {Button, StyleSheet, Text,View,ScrollView, Image} from 'react-native'
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

      const ListItem = props =>{
          return <View style={styles.listItem}>
              <Text>{props.children}</Text>
          </View>
      }


    return (
        <ScrollView>
            <Image source={{uri:selectedMeals.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
        <Text>{selectedMeals.duration}m</Text>
        <Text>{selectedMeals.complexity.toUpperCase()}</Text>
        <Text>{selectedMeals.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeals.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem> )}
        <Text style={styles.title}>Steps</Text>
        {selectedMeals.steps.map(step => <ListItem key={step}>{step}</ListItem> )}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
 image:{
     width:'100%',
     height:200
 },
 details:{
     flexDirection:'row',
     padding:15,
     justifyContent:'space-around'
 },
 title:{
     fontSize:22,
     textAlign:'center',
     fontWeight:'bold'
 },
 listItem:{
     marginVertical:10,
     marginHorizontal:20,
     borderColor:'#ccc',
     borderWidth:1,
     padding:10
 }
})

export default MealsDetailsScreen