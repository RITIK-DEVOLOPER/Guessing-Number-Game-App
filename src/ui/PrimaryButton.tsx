import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

const PrimaryButton = ({children,onPress}) => {
  // function pressHandler() {
  //   if (typeof onPress === 'function') {
  //     onPress(); // Call the onPress function if it's a function
  //   }
  // }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{color: Colors.primary700}}>
        <Text style={styles.buttonText}>{children} </Text>
        
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary800,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: Colors.primaryWhite,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
