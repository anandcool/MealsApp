import React from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

const CategoryGridTile = props => {

    return (
        <TouchableOpacity onPress={()=>props.onSelect()} style={styles.gridItem}>
        <View style={{...styles.container,backgroundColor:props.color}}>
            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150
    },
    container:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        borderRadius:10,
        elevation:10,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0,height:2},
        padding:10
    },
    title:{
        fontSize:22,
        textAlign:'right'
    }   
})

export default CategoryGridTile