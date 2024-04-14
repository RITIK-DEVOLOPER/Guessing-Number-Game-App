import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../ui/Title';
import InstructionText from '../../InstructionText';
import Card from '../ui/Card';

const StartGameScreen = ({onPickNumber}: any) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  function numberInputHandler(enterText: any) {
    setEnteredNumber(enterText);
  }
  function resetInputHandler() {
    setEnteredNumber('');
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 90',
        [{text: 'okay', style: 'destructive', onPress: resetInputHandler}],
      );
    } else {
      onPickNumber(chosenNumber);
    }
  }
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.rootContainer}>
          <Title> Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>

            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
const deviceHeight = Dimensions.get('window').height;

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {flex: 1},
  rootContainer: {
    flex: 1,
    marginTop: deviceHeight < 400 ? 30 : 100,
    marginBottom: deviceHeight < 400 ? 5 : 100,

    // alignItems:"center"
  },
  input: {},

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 20,
    color: 'black',
    fontSize: 32,
  },
  numberInput: {
    height: 60,
    width: 50,
    // paddingBottom: ,
    fontSize: 32,
    borderBottomColor: Colors.primary600,
    borderBottomWidth: 2,
    color: Colors.primary600,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {},
});
