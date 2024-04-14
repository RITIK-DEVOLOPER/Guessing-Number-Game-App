import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

const NumberContainer = ({children}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;
const deviceWidth = Dimensions.get('window').width



const styles = StyleSheet.create({
  container: {
    // flex:1,
    borderColor: Colors.primary600,
    borderWidth: 4,
    padding: deviceWidth <380 ? 12:24,
    borderRadius: 8,
    margin: deviceWidth < 380 ?12 :24,
    alignItems: 'center',
    justifyContent: 'center',
    // maxWidth:'30%'
  },
  numberText: {
    fontSize: deviceWidth<380 ?28:36,
    color: Colors.primary600,
  },
});
