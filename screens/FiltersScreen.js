import React, { useEffect, useState } from 'react'
import {StyleSheet, Switch, Text,View} from 'react-native'
import { HeaderButton, HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Entypo } from '@expo/vector-icons';
import Color from '../constants/Color';
import { FlatList } from 'react-native-gesture-handler';


const FilterSwitch = props =>{
  return (
    <View style={styles.filterContainer}>
    <Text>{props.label}</Text>
    <Switch
    trackColor={{true:Color.primaryColor}} 
    thumbColor={Color.primaryColor}
    value={props.state}
    onValueChange={props.onChange}/>
      </View>
  )
}


const FiltersScreen = props =>{

  const [isGlutenFree,setIsGultenFree] = useState(false)
  const [isLactoseFree,setIsLactoseFree] = useState(false)
  const [isVeganFree,setIsVeganFree] = useState(false)
  const [isVegetrianFree,setIsVegetrianFree] = useState(false)

  const saveFilters = () =>{
    const appiledFilters = {
      glutenFree:isGlutenFree,
      lactoseFree:isLactoseFree,
      vegan:isVeganFree,
      vegetrian:isVegetrianFree
    }
    console.log(appiledFilters)
  }

  useEffect(()=>{
    props.navigation.setOptions({save:saveFilters})
    // console.log("hello")
  })

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
          headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Entypo name="menu" size={30} color="white" onPress={()=>props.navigation.toggleDrawer()}  />
              </HeaderButtons>       
                 ),
            headerRight: () =>(
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Entypo name="save" size={30}  color="white" onPress={()=>props.navigation}  />
                </HeaderButtons>       
            )
        });
      }, [props.navigation]);


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters/Restrictions</Text>
              <FilterSwitch label="Gluteen Free" state={isGlutenFree} onChange={newValue => setIsGultenFree(newValue)}/>
              <FilterSwitch label="Lactose Free" state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
              <FilterSwitch label="Vegan Free" state={isVeganFree} onChange={newValue => setIsVeganFree(newValue)}/>
              <FilterSwitch label="Vegetrian Free" state={isVegetrianFree} onChange={newValue => setIsVegetrianFree(newValue)}/>
        </View>
    );
}

const styles = StyleSheet.create({
 screen:{
     flex:1,
     alignItems:'center',
 },
 title:{
  fontWeight:'bold',
  fontSize:22,
  margin:20,
  textAlign:'center'
 },
 filterContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  width:'80%',
  alignItems:'center',
  marginVertical:15

 }
})

export default FiltersScreen