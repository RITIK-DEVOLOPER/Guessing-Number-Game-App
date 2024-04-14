import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from './src/constants/colors'


const InstructionText = (props:any,style:any) => {
  return (
    <View style={styles.container} >
      <Text style={[styles.instrunctionText,style]}>{props.children} </Text>
    </View>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instrunctionText:
  {

    color:Colors.primary600,
    fontSize:24,
    fontFamily:'OpenSans_Condensed-ExtraBold',
    
         
  },
  container:
  {
    // borderWidth:1,
    // borderColor:'red'
  },


})