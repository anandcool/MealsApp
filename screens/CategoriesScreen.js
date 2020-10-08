import React from 'react'
import {FlatList, StyleSheet} from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import {CATEGORIES} from '../data/dummy-data'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Entypo } from '@expo/vector-icons';


const CategoriesScreen = props =>{


    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Entypo name="menu" size={30} color="white" onPress={()=>props.navigation.toggleDrawer()}  />
              </HeaderButtons>       
                 ),
        });
      }, [props.navigation]);

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


export default CategoriesScreen