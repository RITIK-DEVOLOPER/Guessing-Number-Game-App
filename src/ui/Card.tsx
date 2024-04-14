import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

const Card = (props:any) => {
  return (
    <View style={styles.Card}>{props.children}</View>
  )
}

export default Card
const deviceWidth = Dimensions.get('window').width



const styles = StyleSheet.create({
    Card: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: deviceWidth< 380? 18:36,
        marginHorizontal: 24,
        padding: 16,
        elevation: 4,
        backgroundColor: Colors.primary500,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})