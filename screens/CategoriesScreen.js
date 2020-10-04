import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import {CATEGORIES} from '../data/dummy-data'

const CategoriesScreen = props =>{
    // console.log(props)
const renderGridItem = itemData =>{
    return <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() =>{
                props.navigation.navigate('CategoryMeals',{categoryId:itemData.item.id})
            }}/>
}

    return (
        <FlatList numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
        />
    );
}

const styles = StyleSheet.create({
 screen:{
     flex:1,
     alignItems:'center',
     justifyContent:'center'
 },
})

export default CategoriesScreen