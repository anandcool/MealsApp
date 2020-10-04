import React from 'react'
import {StyleSheet, Text,View} from 'react-native'

const MealsDetailsScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text>The Meals Details Screen !!!</Text>
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