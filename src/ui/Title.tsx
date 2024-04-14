import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'
import { useFonts } from 'expo-font'


const Title = (props:any) => {

 
  return (
   <View style={styles.rootContianer}>
<Text style={styles.title}>{props.children}</Text>
   </View>
       
  
  )

}

const styles = StyleSheet.create({ 
    title:{
    fontSize:18,
    color:Colors.primary600,
    textAlign:'center',
    // borderWidth:Platform.OS === 'android'?2:0,
    borderWidth:Platform.select({ios:0 ,android:2}),
    borderColor:Colors.primary600,
    padding:12,
    fontFamily:'Pacifico-Regular',
    maxWidth:"80%",
    
       
  } ,
  rootContianer:
  {
           alignItems:'center'
  },})
  export default Title