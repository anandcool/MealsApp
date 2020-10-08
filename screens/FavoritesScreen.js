import React from 'react'
import {StyleSheet, Text,View} from 'react-native'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Entypo } from '@expo/vector-icons';

const FavoritesScreen = props =>{

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Entypo name="menu" size={30} color="white" onPress={()=>props.navigation.toggleDrawer()}  />
              </HeaderButtons>       
                 ),
        });
      }, [props.navigation]);


    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return <MealList listData={favMeals} navigation={props.navigation}/>
}



export default FavoritesScreen