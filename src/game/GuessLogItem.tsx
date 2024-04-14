import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GuessLogItem = ({roundNumber,guess}:any) => {
  return (
    <View style={styles.list}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  list: {
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: 'lightyellow',
    width: '100%',
    elevation: 4,
    shadowOffset: {width: 0, height: 0},
    flexDirection: 'row',
    justifyContent:'space-between',
    shadowOpacity:0.25,
    shadowRadius:3,
    shadowColor:'red'
  },
  itemText:
  {
    color:'black'
  }
});
